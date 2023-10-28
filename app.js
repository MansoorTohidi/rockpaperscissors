const gameBoard = document.getElementById("gameBoard")
const yourScore = document.getElementById("yourScore")
const botScore = document.getElementById("botScore")
const botSelectionShow = document.getElementById("botSelectionShow")
let activeBtn = true
gameBoard.addEventListener("click", (e) => {
    const btn = e.target.id
    
    
    setTimeout(()=>{e.target.style.scale=1},100)
    if (activeBtn && ((btn == "rock") || (btn == "paper") || (btn == "scissors"))) {
        comparasion(btn)
        e.target.style.scale=1.2
        activeBtn = false
    }
})

const scors = [0, 0]


function botTurn() {
    const botSelection = ["rock", "paper", "scissors"]
    const randomNumber = (Math.floor(Math.random() * ((3 - 1) + 1) + 1))
    console.log(botSelection[randomNumber - 1])
    return (botSelection[randomNumber - 1])
}


function comparasion(you) {
    const bot = botTurn()
    setTimeout(()=>{botSelectionShow.innerHTML = "?"},1000)
    
    botSelectionShow.style.scale = 5
    botSelectionShow.style.color = "red"
    setTimeout(showBot, 2000)
    function showBot() {
        botSelectionShow.innerHTML = bot
        botSelectionShow.style.scale = 2.4
    }
    setTimeout(showscores, 3000)

    function showscores() {
        activeBtn = true
        if (bot === you) {
            console.log("the same")
            botSelectionShow.innerHTML = ""
        }

        else if ((bot == "rock" && you == "paper") ||
            (bot == "paper" && you == "scissors") ||
            (bot == "scissors" && you == "rock")
        ) {
            console.log("you")
            scors[0] = scors[0] + 1

            yourScore.style.backgroundColor = "#a2c11c"
            yourScore.style.scale=1.2
            yourScore.style.zIndex=2
            setTimeout(() => {
                yourScore.innerHTML = `YOU: ${scors[0]}`
                yourScore.style.scale=1
                yourScore.style.zIndex=1
                yourScore.style.backgroundColor = "#222831"

            }, 1000)

            botSelectionShow.innerHTML = ""

        }

        else {
            console.log("bot")
            scors[1] = scors[1] + 1
            botScore.style.backgroundColor = "#a2c11c"
            botScore.style.scale=1.2
            botScore.style.zIndex=2
            setTimeout(() => {
                botScore.innerHTML = `BOT: ${scors[1]}`
                botScore.style.backgroundColor = "#222831"
                botScore.style.zIndex=1
                botScore.style.scale=1
            }, 1000)
            botSelectionShow.innerHTML = ""

        }

    }
}