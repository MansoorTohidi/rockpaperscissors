const gameBoard=document.getElementById("gameBoard")
const yourScore=document.getElementById("yourScore")
const botScore=document.getElementById("botScore")
const botSelectionShow=document.getElementById("botSelectionShow")
let activeBtn=true
gameBoard.addEventListener("click",(e)=>{
    const btn=e.target.id
    if(activeBtn&&((btn=="rock")||(btn=="paper")||(btn=="scissors"))){
    comparasion(btn)  
    activeBtn=false
}
})

const scors=[0,0]


function botTurn(){
const botSelection=["rock","paper","scissors"]
const randomNumber=(Math.floor(Math.random()*((3-1)+1)+1))
console.log(botSelection[randomNumber-1])
return(botSelection[randomNumber-1])
}


function comparasion(you){
const bot=botTurn()
botSelectionShow.innerHTML=bot

setTimeout(showscores,1000)

function showscores(){

activeBtn=true  
if(bot===you){
console.log("the same")
botSelectionShow.innerHTML=""  
}

else if((bot=="rock"&&you=="paper")||
(bot=="paper"&&you=="scissors")||
(bot=="scissors"&&you=="rock")
)
{
    console.log("you")
    scors[0]=scors[0]+1
    yourScore.innerHTML=`YOU: ${scors[0]}`
    
    botSelectionShow.innerHTML=""  
   
}

else{
    console.log("bot")
    scors[1]=scors[1]+1
    botScore.innerHTML=`BOT: ${scors[1]}`
    botSelectionShow.innerHTML=""  
    
}

}
}