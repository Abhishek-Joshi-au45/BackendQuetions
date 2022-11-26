const Rock = document.querySelector('#Rock')
const Paper = document.querySelector('#Paper')
const Scissors = document.querySelector('#Scissors')

const RockC = document.querySelector('#RockC')
const PaperC = document.querySelector('#PaperC')
const ScissorsC = document.querySelector('#ScissorsC')

const Res=document.querySelector('#Result')

const computerChoiseArray=[RockC.innerHTML,PaperC.innerHTML,ScissorsC.innerHTML]
const userChoise =[Rock.innerHTML,Paper.innerHTML,Scissors.innerHTML]

Rock.addEventListener('click',(event)=>
{     
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerChoiseArray[choiceNumber];
     
    if(Rock.innerHTML===computerChoice){
        // console.log("Match is tie")
        Res.innerText = `Computer Select ${computerChoice} and User Select ${Rock.innerHTML} So Match is "DRAW" `
    }
    if(computerChoice==='Paper'){
        // console.log("Computer is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Rock.innerHTML} So Computer "WIN" `
    }
    if(computerChoice==='Scissors'){
        // console.log("user is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Rock.innerHTML} So User "WIN" `
    }
    // console.log("User Rock is selcted",Rock.innerHTML)
})



Paper.addEventListener('click',(event)=>
{   
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerChoiseArray[choiceNumber];
     
    if(Paper.innerHTML===computerChoice){
        // console.log("Match is tie")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Paper.innerHTML} So Match is "DRAW"`
    }
    if(computerChoice==='Scissors'){
        // console.log("Computer is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Paper.innerHTML} So Computer "WIN"`
    }
    if(computerChoice==='Rock'){
        // console.log("user is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Paper.innerHTML} So User "WIN" `
    }

    // console.log("User Paper is selcted",Paper.innerHTML)
})



Scissors.addEventListener('click',(event)=>
{
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerChoiseArray[choiceNumber];
     
    if(Scissors.innerHTML===computerChoice){
        // console.log("Match is tie")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Scissors.innerHTML} So  Match is  "DRAW"`
    }
    if(computerChoice==='Rock'){
        // console.log("Computer is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Scissors.innerHTML} So Computer is "WIN" `
    }
    if(computerChoice==='Paper'){
        // console.log("user is win")
        Res.innerText = `Computer Select ${computerChoice} and User Select  ${Scissors.innerHTML} So user is "WIN" `
    }

    // console.log("User Scissors is selcted",Scissors.innerHTML)
})

