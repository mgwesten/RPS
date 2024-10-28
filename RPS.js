document.addEventListener('DOMContentLoaded', () => {
    let wins = 0;
    let losses = 0;
    let ties = 0;

    const resultDisplay = document.getElementById('result');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const tiesDisplay = document.getElementById('ties');

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        let result;

        if (userChoice === computerChoice) {
            result = "It's a tie!";
            ties++;
            updateStats()
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
            wins++;
            updateStats()
        } else {
            result = 'You lose!';
            losses++;
            updateStats()
        }

        resultDisplay.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
        
    }
function updateStats(){
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;
}

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
});