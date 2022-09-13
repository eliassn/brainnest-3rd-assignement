export function singleGame() {
  let playGame = confirm('Are you ready to start playing?')
  if (playGame) {
    let playerChoice = prompt('Please enter rock, paper or scissors')
    if (playerChoice) {
      let playerOne = playerChoice.trim().toLowerCase()
      if (
        playerOne === 'rock' ||
        playerOne === 'paper' ||
        playerOne === 'scissors'
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1)
        let computer =
          computerChoice === 1
            ? 'rock'
            : computerChoice === 2
            ? 'paper'
            : 'scissors'
        let result =
          playerOne === computer
            ? 'Tie Game'
            : playerOne === 'rock' && computer === 'paper'
            ? `playerOne : ${playerOne} \n Computer : ${computer}\n Computer wins`
            : playerOne === 'paper' && computer === 'scissors'
            ? `playerOne : ${playerOne} \n Computer : ${computer}\n Computer  wins`
            : playerOne === 'scissors' && computer === 'rock'
            ? `playerOne : ${playerOne} \n Computer : ${computer}\n Computer  wins`
            : `playerOne : ${playerOne} \n Computer : ${computer}\n You win`

        alert(result)
      } else {
        alert('Your choice is wrong')
      }
    } else {
      alert('i guess you changed your mind next time maybe :)')
    }
  } else {
    alert('Ok,maybe next time')
  }
}
