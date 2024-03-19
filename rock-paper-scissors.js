let score =   JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    loose : 0,
    tie : 0
   }
   document.getElementById("js-score")
    .innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`




function playGame(playerMove){
    const computerMove = pickComputerMove()
    let result = ''
    if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'Win'
        }else if(computerMove === 'paper'){
            result= 'Loose'
        }else if(computerMove === 'scissors'){
            result = 'Tie'
        }

    }else if (playerMove == 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie'
        }else if (computerMove === 'paper'){
            result = 'Loose'
        }else if (computerMove === 'scissors'){
            result = 'Win'
        }

    }else if (playerMove ==='paper'){
        if (computerMove === 'scissors'){
            result = 'Win'
        }else if (computerMove === 'paper'){
            result = 'Tie'
        }else if(computerMove === 'rock'){
            result = 'Loose'
        }
    }
    if(result === 'Win'){
        score.win +=1
    }else if (result === 'Loose'){
        score.loose +=1
    }else if (result === 'Tie'){
        score.tie +=1
    }
    localStorage.setItem('score', JSON.stringify(score));
    
    updatescore();
    if(result === "Loose"){
     document.getElementById("js-result").innerHTML= `😜${result}`
    }else if(result === "Tie"){
    document.getElementById("js-result").innerHTML= `👍${result}`
    }else if (result === "Win"){
    document.getElementById("js-result").innerHTML= `👏✔${result}`

    }
    document.getElementById("js-moves").innerHTML = ` You
    <img src="../amazonprj/${playerMove}-emoji.png" alt="" class="rck">
    <img src="../amazonprj/${computerMove}-emoji.png" alt="" class="rck">
    Computer`
   
   function updatescore(){
    document.getElementById("js-score")
    .innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`

    }}
const randomNumber = Math.random();
        computerMove = ''
    function pickComputerMove(){
        if(randomNumber >= 0 && randomNumber < 1 / 3){
            computerMove = 'rock'
        }else if (randomNumber >= 1 / 3 && randomNumber < 2 /3 ){
            computerMove = 'paper'
        }else if(randomNumber >= 2/ 3 && randomNumber , 1){
            computerMove = 'scissors'
     
       }
       return computerMove
    }

    function reset(){
         score.win = 0
        score.loose= 0
        score.tie= 0
       
        localStorage.removeItem("score")
        document.getElementById("js-score")
    .innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`

    }