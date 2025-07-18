let currentPlayer = 1;

const rollBtn = document.querySelector('#roll-btn');
rollBtn.addEventListener('click', () => {
    let number = Math.floor(Math.random() * 6) + 1;
    let imgSrc = "./images/" + number + '.png';

    const diceImg = document.querySelector('#dice-img');
    diceImg.setAttribute('src', imgSrc);

    updateCurrentScore(number);
    checkWinner()
})

const holdBtn = document.querySelector('#hold-btn');
holdBtn.addEventListener('click', () => {

    let scoreId = '#score-player' + currentPlayer;
    const score = document.querySelector(scoreId);

    let currentPlayerId = '#current-player' + currentPlayer;
    const currentPlayerScore = document.querySelector(currentPlayerId)

    score.textContent = parseInt(score.textContent) + parseInt(currentPlayerScore.textContent);
    currentPlayerScore.textContent = 0;

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    const message = document.querySelector('#message');
    message.textContent = "Player " + currentPlayer + "'s turn !!";
})

let updateCurrentScore = (number) => {
    let currentPlayerId = '#current-player' + currentPlayer;
    const currentPlayerScore = document.querySelector(currentPlayerId)

    if (number === 1) {
        let scoreId = '#score-player' + currentPlayer;
        const score = document.querySelector(scoreId);
        currentPlayerScore.textContent = 0;
        score.textContent = 0;
    } else {
        currentPlayerScore.textContent = parseInt(currentPlayerScore.textContent) + number;
    }

}

let checkWinner = () => {
    let scoreId = '#score-player' + currentPlayer;
    const score = document.querySelector(scoreId);

    let currentPlayerId = '#current-player' + currentPlayer;
    const currentPlayerScore = document.querySelector(currentPlayerId)

    let totalScore = parseInt(score.textContent) + parseInt(currentPlayerScore.textContent)

    if (totalScore >= 10) {
        const message = document.querySelector('#message');
        message.textContent = "Player " + currentPlayer + " Won !!!";
        message.style.backgroundColor = '#abcabc'
        
        const rollBtn = document.querySelector('#roll-btn');
        rollBtn.disabled = true;
        const holdBtn = document.querySelector('#hold-btn');
        holdBtn.disabled = true;

        const newBtn = document.createElement('button');
        newBtn.textContent = "Retry"
        newBtn.setAttribute('id', 'retry-btn');

        message.insertAdjacentElement('afterend', newBtn)
        

        const retryBtn = document.querySelector('#retry-btn');
        retryBtn.addEventListener('click', () => {
            resetScores();

            rollBtn.disabled = false
            holdBtn.disabled = false

            const message = document.querySelector('#message');
            message.textContent = "Player 1's turn !!";
            message.style.backgroundColor = 'white';

            retryBtn.remove();
        })
    }

}


let resetScores = () => {
    const player1Total  = document.querySelector('#score-player1');
    player1Total.textContent = 0;
    const player1Current = document.querySelector('#current-player1');
    player1Current.textContent = 0;
    const player2Total  = document.querySelector('#score-player2');
    player2Total.textContent = 0;
    const player2Current = document.querySelector('#current-player1');
    player2Current.textContent = 0;
}
