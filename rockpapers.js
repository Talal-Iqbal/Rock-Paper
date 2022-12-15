document.addEventListener('DOMContentLoaded', () => {
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissors = document.querySelector('#scissors')
    let playerChoice ;

    function getComputerChoice() {
        let options = ['Rock', 'Paper' , 'Scissors'];
        let computerChoice = Math.floor(Math.random()*options.length);
        console.log('Computer :' + options[computerChoice])
        return options[computerChoice].toLowerCase()
    };
    let setRock = () => {
        playGame('Rock')
    }
    let setPaper = () => {
        playGame('Paper')
    }
    let setScissors = () => {
        playGame('Scissors')
    }

    rock.addEventListener('click', setRock)
    paper.addEventListener('click', setPaper)
    scissors.addEventListener('click', setScissors)

    function playGame(playerChoice) {

        let computer= getComputerChoice()
        let player = playerChoice.toLowerCase()
        console.log('Player ' + player)
        if (computer === player){
            console.log('TIE')
        }
        else{
            if(computer==='rock' && (player==='scissors') || (computer==='paper' && (player==='rock')) || (computer==='scissors' && (player==='paper')) ){
                console.log('Computer Wins')
            }
            else if (computer==='scissors' && (player==='rock') || (computer==='rock' && (player==='paper')) || (computer==='paper' && (player==='scissors'))){
                console.log('Player Wins')
            }
        }
    };
});


