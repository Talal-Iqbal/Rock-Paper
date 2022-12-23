document.addEventListener('DOMContentLoaded', () => {
    const rock = document.querySelector('#rock')
    const paper = document.querySelector('#paper')
    const scissors = document.querySelector('#scissors')
    const playerOption = document.querySelector('#playerOption') ;
    const computerOption = document.querySelector('#computerOption') ;
    const winner = document.querySelector('#winner')


    function getComputerChoice()   {
        let options = ['Rock', 'Paper' , 'Scissors'];
        let computerChoice = Math.floor(Math.random()*options.length);
        console.log('Computer (1)  :' + options[computerChoice].toLowerCase())
        return options[computerChoice].toLowerCase()
    };

    // const computer = getComputerChoice()
    function setComputerOption(computer) {
        // const computer = getComputerChoice()
        if(computer=== 'rock'){
            computerOption.textContent = '👊'
        }
        else if(computer  === 'paper'){
            computerOption.textContent = '✋'
        }
        else if(computer  === 'scissors'){
            computerOption.textContent = '✌'
        }
        computerOption.classList.add('options')
        computerOption.style.fontSize = '100px'
        console.log('set computer check (2) ' + getComputerChoice())
        return computerOption
    }
    let setRock = () => {
        playerOption.textContent = '👊'
        playerOption.classList.add('options')
        playerOption.style.fontSize = '100px'
        playGame('Rock')
        // setComputerOption()
        // console.log()

    }
    let setPaper = () => {
        playerOption.textContent = '✋'
        playerOption.classList.add('options')
        playerOption.style.fontSize = '100px'
        // setComputerOption()
        playGame('Paper')
    }
    let setScissors = () => {
        playerOption.textContent = '✌'
        playerOption.classList.add('options')
        playerOption.style.fontSize = '100px'
        playGame('Scissors')
    }

    rock.addEventListener('click', setRock)
    paper.addEventListener('click', setPaper)
    scissors.addEventListener('click', setScissors)


    function playGame(playerChoice) {
        // let playerScore =0;
        // let computerScore =0;

        let computer= getComputerChoice()
        setComputerOption(computer)
        winner.style.color = 'white'
        winner.style.fontSize = '22px'
        winner.style.fontWeight = '700'
        winner.style.padding = '20px'
        console.log('Computer Check (3): '+computer)
        let player = playerChoice.toLowerCase()
        console.log('Player ' + player)
        if (computer === player){
            console.log('TIE')
            winner.textContent = 'TIE!'
        }
        else{
            if(computer==='rock' && (player==='scissors') || (computer==='paper' && (player==='rock')) || (computer==='scissors' && (player==='paper')) ){
                console.log('Computer Wins')
                winner.textContent = 'Computer Wins!'
                // computerScore++;
                // console.log(computerScore)
            }
            else if (computer==='scissors' && (player==='rock') || (computer==='rock' && (player==='paper')) || (computer==='paper' && (player==='scissors'))){
                console.log('Player Wins')
                winner.textContent = 'Player Wins!'
                // playerScore++;
                // console.log(playerScore)
            }
        }
    };
});


