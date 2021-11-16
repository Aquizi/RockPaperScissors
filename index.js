//  player and ai objects
let player = {
    selection: "",
    score: 0
}

let ai = {
    selection: "",
    score: 0
}

//  global variables and html elements
let options = ["rock", "paper", "scissors"]
let messageEl = document.getElementById("message-el")
let option1El = document.getElementById("option1")
let option2El = document.getElementById("option2")
let option3El = document.getElementById("option3")
let playerEl = document.getElementById("player-el")
let aiEl = document.getElementById("ai-el")


function newGame() {
    player.selection = ""
    player.score = 0
    ai.selection = options[Math.floor(Math.random() * 3)]
    ai.score = 0

    messageEl.textContent = ""
    playerEl.textContent = ""
    aiEl.textContent = ""

    option1El.style.display = "inline"
    option2El.style.display = "inline"
    option3El.style.display = "inline"
}




function selectRock() {
    player.selection = options[0]
    checkWin(player.selection)
}


function selectPaper() {
    player.selection = options[1]
    checkWin(player.selection)
}


function selectScissors() {
    player.selection = options[2]
    checkWin(player.selection)
}


function checkWin(selection) {
    let playerSelection = selection.charAt(0).toUpperCase() + selection.slice(1)
    let aiSelection = ai.selection.charAt(0).toUpperCase() + ai.selection.slice(1)

    option1El.style.display = "none"
    option2El.style.display = "none"
    option3El.style.display = "none"

    if (playerSelection === "Rock" && aiSelection === "Scissors" || 
        playerSelection === "Paper" && aiSelection === "Rock" ||
        playerSelection === "Scissors" && aiSelection === "Paper"
    ) 
    {
        messageEl.textContent = playerSelection + " beats " + aiSelection + "! YOU WIN!"
    }
    else if (playerSelection === "Rock" && aiSelection === "Paper" ||
             playerSelection === "Paper" && aiSelection === "Scissors" ||
             playerSelection === "Scissors" && aiSelection === "Rock"
    ) 
    {
        messageEl.textContent = aiSelection + " beats " + playerSelection + "! YOU LOSE!"
    }

    else {
        messageEl.textContent = "It's a TIE!"
    }

    playerEl.textContent = "Player Selection: " + playerSelection
    aiEl.textContent = "AI Selection: " + aiSelection
}