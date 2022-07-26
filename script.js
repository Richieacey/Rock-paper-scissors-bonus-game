let rpsButtons = document.querySelector(".container");
let score = document.querySelector(".score");
let selectionContainer = document.querySelector(".selection-container");
let pickedPaper = document.querySelector(".scissors-image2");
let housePickedPaperVar = document.querySelector(".rock-image2")
let mainSection = document.querySelector("main");
let playerPaperGradient = document.querySelector(".player-gradient");
let houseGradient = document.querySelector(".house-gradient")
let rulesButton = document.querySelector(".rules-button");
let rules = document.querySelector(".rules-container");
let closeRules = document.querySelector(".close-button");
let houseSelectionEmpty = document.querySelector(".house-selection-empty");
let finalPrompt = document.querySelector(".final-prompt");
let gameOverText = document.querySelector(".game-over");
let playButton = document.querySelector(".play-btn");
let houseSelection = document.querySelector(".house-selection");
let playerSelection = document.querySelector(".player-selection");
let emptyContainer = document.querySelector(".empty-container");
let emptyContainer2 = document.querySelector(".empty-container2");
let resetScoreButton = document.querySelector(".reset-score-button");
let x = window.matchMedia("(max-width: 450px)")


rulesButton.addEventListener("click", () => {
    rules.style.display = "flex";
    buttonClick.play()
})

resetScoreButton.addEventListener("click", () =>{
    score.textContent = 0;
    localStorage.clear()
    buttonClick.play()
})


closeRules.addEventListener("click", () => {
    rules.style.display = "none";
    buttonClick.play()
})

playButton.addEventListener("click", () =>{
    selectionContainer.style.display = "none";
    mainSection.style.opacity = "1";
    emptyContainer.style.display = "none";
    emptyContainer2.style.display = "none";
    emptyContainer.style.opacity = "0";
    emptyContainer2.style.opacity = "0";
    houseGradient.style.opacity = "0";
    finalPrompt.style.display = "none";
    houseSelectionEmpty.style.animationName = "unset";

    // window.location.reload()
    buttonClick.play()
})


if (score.textContent == isNaN) {
   localStorage.setItem("Score", "0");
}


score.textContent = Number(localStorage.getItem("Score"));

const buttonClick = new Audio()
buttonClick.src = "audio assets/button click.wav"

const houseSelectAudio = new Audio()
houseSelectAudio.src = "audio assets/House selection.wav"

const loseAudio = new Audio()
loseAudio.src = "audio assets/LOSE.mp3"

const winAudio = new Audio()
winAudio.src = "audio assets/WIN.mp3"

const drawTryAgain = new Audio()
drawTryAgain.src = "audio assets/TRY AGAIN.mp3"


rpsButtons.addEventListener("click", e => {
    const{target} = e;
    const houseSelections = [housePickedScissors, housePickedRock, housePickedPaper, housePickedSpock, housePickedLizard]
    function houseSelect() {
        setTimeout(
            function random_selections() {
                houseSelections[Math.floor(Math.random() * houseSelections.length)]();
            }, 3000

        );

        
        
    }


    if (target.dataset.paper) {
        selectionContainer.style.display = "flex";
        pickedPaper.src = "images/icon-paper.svg";
        mainSection.style.opacity = "0";
        emptyContainer.style.display = "block";
        emptyContainer2.style.display = "block";
        buttonClick.play()

        setTimeout(
            function strobeAnimation() {
                houseSelectionEmpty.style.animation = "0.7s infinite strobe";
            },1000
        )
        
        
        if (x.matches) {
            playerSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            pickedPaper.style.width = "3rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            pickedPaper.style.width = "5rem";
        }
        
       
        playerPaperGradient.setAttribute("style","background-color: hsl(230, 89%, 65%); \
        box-shadow: 0px 8px 0px hsl(230, 57%, 51%);");
        houseSelect()
        setTimeout(
            function delayHouseAudio() {
                houseSelectAudio.play()
            },1000
        )
        

    }else if (target.dataset.rock) {
        selectionContainer.style.display = "flex";
        pickedPaper.src = "images/icon-rock.svg";
        emptyContainer.style.display = "block";
        emptyContainer2.style.display = "block";
        buttonClick.play()
        if (x.matches) {
            playerSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            pickedPaper.style.width = "3rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            pickedPaper.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        playerPaperGradient.setAttribute("style","background-color: hsl(349, 70%, 56%); \
        box-shadow: 0px 8px 0px hsl(349, 71%, 52%)");
        setTimeout(
            function delayHouseAudio() {
                houseSelectAudio.play()
            },1000
        )

        setTimeout(
            function strobeAnimation() {
                houseSelectionEmpty.style.animation = "0.7s infinite strobe";
            },1000
        )
        houseSelect()
    }else if (target.dataset.scissors) {
        selectionContainer.style.display = "flex";
        pickedPaper.src = "images/icon-scissors.svg";
        emptyContainer.style.display = "block";
        emptyContainer2.style.display = "block";
        buttonClick.play()
        if (x.matches) {
            playerSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            pickedPaper.style.width = "3rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            pickedPaper.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        playerPaperGradient.setAttribute("style","background-color: hsl(40, 84%, 53%); \
        box-shadow: 0px 8px 0px hsl(39, 88%, 42%)");
        setTimeout(
            function delayHouseAudio() {
                houseSelectAudio.play()
            },1000
        )

        setTimeout(
            function strobeAnimation() {
                houseSelectionEmpty.style.animation = "0.7s infinite strobe";
            },1000
        )
        houseSelect()
    }else if (target.dataset.spock) {
        selectionContainer.style.display = "flex"
        pickedPaper.src = "images/icon-spock.svg";
        emptyContainer.style.display = "block";
        emptyContainer2.style.display = "block";
        buttonClick.play()
        if (x.matches) {
            playerSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.6rem; padding-right: 2.6rem;")
            pickedPaper.style.width = "2.5rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 2.5rem;\
            padding-bottom: 2.88rem; padding-left: 3.6rem; padding-right: 3.6rem;")
            pickedPaper.style.width = "4rem";
        }
        mainSection.style.opacity = "0";
        playerPaperGradient.setAttribute("style","background-color: hsl(189, 58%, 57%); \
        box-shadow: 0px 8px 0px hsl(189, 59%, 53%)");
        setTimeout(
            function delayHouseAudio() {
                houseSelectAudio.play()
            },1000
        )

        setTimeout(
            function strobeAnimation() {
                houseSelectionEmpty.style.animation = "0.7s infinite strobe";
            },1000
        )
        houseSelect()
    }else if (target.dataset.lizard) {
        selectionContainer.style.display = "flex"
        pickedPaper.src = "images/icon-lizard.svg";
        emptyContainer.style.display = "block";
        emptyContainer2.style.display = "block";
        buttonClick.play()
        if (x.matches) {
            playerSelection.setAttribute("style","padding-top: 2rem;\
            padding-bottom: 2rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            pickedPaper.style.width = "2.5rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 3.2rem;\
            padding-bottom: 3.2rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            pickedPaper.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        playerPaperGradient.setAttribute("style","background-color: hsl(261, 72%, 63%); \
        box-shadow: 0px 8px 0px hsl(261, 73%, 60%)");
        setTimeout(
            function delayHouseAudio() {
                houseSelectAudio.play()
            },1000
        )

        setTimeout(
            function strobeAnimation() {
                houseSelectionEmpty.style.animation = "0.7s infinite strobe";
            },1000
        )
        houseSelect()
    }


    function housePickedPaper() {
        selectionContainer.style.display = "flex";
        housePickedPaperVar.src = "images/icon-paper.svg";
        if (x.matches) {
            houseSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            housePickedPaperVar.style.width = "3rem";
        } else {
            playerSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            pickedPaper.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        houseGradient.setAttribute("style","background-color: hsl(230, 89%, 65%); \
        box-shadow: 0px 8px 0px hsl(230, 57%, 51%)");
        houseGradient.style.opacity = "1"
        
        
        setTimeout(
            function logic() {
                if (target.dataset.scissors) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.paper) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "DRAW";
                    drawTryAgain.play()
                    playButton.style.color = "green";
                }else if (target.dataset.rock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = "hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.spock) {
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = "hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.lizard) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }
            }, 1000
        )
        
        
        
    }
    
    function housePickedRock() {
        selectionContainer.style.display = "flex";
        housePickedPaperVar.src = "images/icon-rock.svg";
        if (x.matches) {
            houseSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            housePickedPaperVar.style.width = "3rem";
        } else {
            houseSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            housePickedPaperVar.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        houseGradient.setAttribute("style","background-color: hsl(349, 70%, 56%); \
        box-shadow: 0px 8px 0px hsl(349, 71%, 52%);");
        houseGradient.style.opacity = "1"
        

        setTimeout(
            function logic() {
                if (target.dataset.scissors) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.paper) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = " hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.rock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "DRAW";
                    drawTryAgain.play()
                    playButton.style.color = "green";
                }else if (target.dataset.spock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.lizard) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }
            }, 1000
        )
        
       
    };
    
    function housePickedScissors() {
        selectionContainer.style.display = "flex";
        housePickedPaperVar.src = "images/icon-scissors.svg";
        if (x.matches) {
            houseSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            housePickedPaperVar.style.width = "3rem";
        } else {
            houseSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            housePickedPaperVar.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        houseGradient.setAttribute("style","background-color: hsl(40, 84%, 53%); \
        box-shadow: 0px 8px 0px hsl(39, 88%, 42%)");
        houseGradient.style.opacity = "1"


        setTimeout(
            function logic() {
                if (target.dataset.scissors) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "DRAW";
                    drawTryAgain.play()
                    playButton.style.color = "green";
                }else if (target.dataset.paper) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.rock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.spock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.lizard) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)"
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }
            }, 1000
        )

        
    };

    function housePickedSpock() {
        selectionContainer.style.display = "flex";
        housePickedPaperVar.src = "images/icon-spock.svg";
        if (x.matches) {
            houseSelection.setAttribute("style","padding-top: 1.88rem;\
            padding-bottom: 1.88rem; padding-left: 2.6rem; padding-right: 2.6rem;")
            housePickedPaperVar.style.width = "2.5rem";
        } else {
            houseSelection.setAttribute("style","padding-top: 2.88rem;\
            padding-bottom: 2.88rem; padding-left: 3.6rem; padding-right: 3.6rem;")
            housePickedPaperVar.style.width = "4rem";
        }
        mainSection.style.opacity = "0";
        houseGradient.setAttribute("style","background-color: hsl(189, 58%, 57%); \
        box-shadow: 0px 8px 0px hsl(189, 59%, 53%)");
        houseGradient.style.opacity = "1"


        setTimeout(
            function logic() {
                if (target.dataset.paper) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.scissors) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.lizard) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    emptyContainer.style.opacity = "1";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.rock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.spock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "DRAW";
                    drawTryAgain.play()
                    playButton.style.color = "green";
                }
            }, 1000
        )

    }    
    
    function housePickedLizard() {
        selectionContainer.style.display = "flex";
        housePickedPaperVar.src = "images/icon-lizard.svg";
        if (x.matches) {
            houseSelection.setAttribute("style","padding-top: 2rem;\
            padding-bottom: 2rem; padding-left: 2.2rem; padding-right: 2.2rem;")
            housePickedPaperVar.style.width = "3rem";
        } else {
            houseSelection.setAttribute("style","padding-top: 3rem;\
            padding-bottom: 3rem; padding-left: 3.2rem; padding-right: 3.2rem;")
            housePickedPaperVar.style.width = "5rem";
        }
        mainSection.style.opacity = "0";
        houseGradient.setAttribute("style","background-color: hsl(261, 72%, 63%); \
        box-shadow: 0px 8px 0px hsl(261, 73%, 60%)");
        houseGradient.style.opacity = "1"


        setTimeout(
            function logic() {
                if (target.dataset.scissors) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.paper) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.rock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU WIN";
                    winAudio.play()
                    emptyContainer.style.opacity = "1";
                    playButton.style.color = "hsl(229, 25%, 31%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) + 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.spock) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "YOU LOSE";
                    loseAudio.play()
                    if (x.matches) {
                        gameOverText.style.fontSize = "3rem";
                    }else {
                        gameOverText.style.fontSize = "3.8rem";
                    }
                    emptyContainer2.style.opacity = "1";
                    playButton.style.color = " hsl(349, 71%, 52%)";
                    currentScore = score.textContent
                    currentScore = parseInt(currentScore) - 1
                    score.textContent = currentScore
                    localStorage.setItem("Score", JSON.stringify(currentScore));
                }else if (target.dataset.lizard) {
                    finalPrompt.style.display = "flex";
                    gameOverText.textContent = "DRAW";
                    drawTryAgain.play()
                    playButton.style.color = "green";
                }
            }, 1000
        )


       
    };

})








