

const game = [
    "Rock",
    "Paper",
    "Scissors"
]

const HumanInput = () => prompt(`choose an option\n 
    1=>${game[0]}\n
    2=>${game[1]}\n
    3=>${game[2]}`) - 1


function computerPlay (){
    let computerChoice = ''
    computerChoice = game[Math.floor(Math.random()* game.length)]
    return computerChoice
}



function oneRoundGamePlay (my_selection,computer_selection){
    let result = ''
    console.log("my selection is ",game[my_selection]," computer selection is",computer_selection)
    let humanWins = `Yaaay you won ${game[my_selection]} beats ${computer_selection}`
    let computerWins = `Oops computer win ${computer_selection} beats ${game[my_selection]}`
    let draw = "Draw none of you has scored -_- !"

    if (game[my_selection]===computer_selection){
        result = draw
    }
    else if (game[my_selection]!== computer_selection 
            && my_selection < 1 
            && game.indexOf(computer_selection) > 1){
                result = humanWins
        }
    else if (game[my_selection]!== computer_selection 
            && my_selection < 1 
            && game.indexOf(computer_selection) == 1){
            result = computerWins
        }
    else if (game[my_selection]!== computer_selection 
            && my_selection == 1 
            && game.indexOf(computer_selection) > 1){
            result = computerWins
        }
    else if (game[my_selection]!== computer_selection 
            && my_selection > 1 
            && game.indexOf(computer_selection) == 1){
            result = humanWins
                }
    else if (game[my_selection]!== computer_selection 
            && my_selection > 1 
            && game.indexOf(computer_selection) < 1){
                result = computerWins
        }    
    else {
        result = humanWins
        }
    return result
}

function multiRoundsGame (){
    let finalresult = ''
    let roundCount = 0
    let won = 0
    let lost = 0
    for(let i = 0;i < 5;i++){
        const single_game = oneRoundGamePlay(HumanInput(),computerPlay())
        roundCount++
        if(single_game.includes("won")){
            won++
        }
        else if(single_game.includes("win")){
            lost++
        }
        else {
            won += 0
            lost += 0
        }
        
        alert(`Round : ${roundCount}\n`+ " " + single_game + `\n Score is ${won}-${lost}`)
    }
    if(lost > won){
        finalresult = "Computer won try next time! :("+ "\n" +  `\nFinal Score is ${won}-${lost}`
    }
    else if(lost < won){
        finalresult = "yaaay you won congratulations! :)"+ "\n" +  `\nFinal Score is ${won}-${lost}`
    }
    else {
        finalresult = "Draw tough Game Man! :o"+ `\nFinal Result is ${won}-${lost}`
    }
    return finalresult
}


alert(multiRoundsGame())