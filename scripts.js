window.onload = function () {
    console.log("window is loaded")
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    const catElement = document.getElementById('cat')
  
    let game
  
    function startGame() {
      
      game = new Game()
      game.start()
      
      console.log("start game");
       
      

    catElement.addEventListener('click', (e) => {
        let catRect = catElement.getBoundingClientRect()
        let catWidth = catRect.width
        let catHeight = catRect.height

        let catSectionWidth = catWidth/4
        let catSectionHeight = catHeight/3


        if (e.offsetX >= 0 &&
            e.offsetX <= catSectionWidth &&
            e.offsetY >= 0 &&
            e.offsetY <= catSectionHeight
        ) {
            console.log("Good spot - We're hitting the first of the top sections")
        }

        if (e.offsetX >= catSectionWidth &&
            e.offsetX <= catSectionWidth * 2 &&
            e.offsetY >= 0 &&
            e.offsetY <= catSectionHeight
        ) {
           
            console.log("Bad spot - We're hitting the second of the top sections")
        }

        if (e.offsetX >= catSectionWidth * 2 &&
            e.offsetX <= catSectionWidth * 3 &&
            e.offsetY >= 0 &&
            e.offsetY <= catSectionHeight
        ) {
            console.log("Good spot - We're hitting the third of the top sections")
        }

        if (e.offsetX >= catSectionWidth * 3 &&
            e.offsetX <= catSectionWidth * 4 &&
            e.offsetY >= 0 &&
            e.offsetY <= catSectionHeight
        ) {
            console.log("Bad spot - We're hitting the fourth of the top sections")
        }





        if (e.offsetX >= 0 &&
            e.offsetX <= catSectionWidth &&
            e.offsetY >= catSectionHeight &&
            e.offsetY <= catSectionHeight * 2
        ) {
            console.log("Bad spot - We're hitting the first of the middle sections")
        }

        if (e.offsetX >= catSectionWidth &&
            e.offsetX <= catSectionWidth * 2 &&
            e.offsetY >= catSectionHeight &&
            e.offsetY <= catSectionHeight * 2
        ) {
            console.log("Bad spot - We're hitting the second of the middle sections")
        }

        if (e.offsetX >= catSectionWidth * 2 &&
            e.offsetX <= catSectionWidth * 3 &&
            e.offsetY >= catSectionHeight &&
            e.offsetY <= catSectionHeight * 2
        ) {
            console.log("Good spot - We're hitting the third of the middle sections")
        }

        if (e.offsetX >= catSectionWidth * 3 &&
            e.offsetX <= catSectionWidth * 4 &&
            e.offsetY >= catSectionHeight &&
            e.offsetY <= catSectionHeight * 2
        ) {
            console.log("Bad spot - We're hitting the fourth of the middle sections")
        }




        if (e.offsetX >= 0 &&
            e.offsetX <= catSectionWidth &&
            e.offsetY >= catSectionHeight * 2 &&
            e.offsetY <= catSectionHeight * 3
        ) {
            console.log("Bad spot - We're hitting the first of the bottom sections")
        }

        if (e.offsetX >= catSectionWidth &&
            e.offsetX <= catSectionWidth * 3 &&
            e.offsetY >= catSectionHeight * 2 &&
            e.offsetY <= catSectionHeight * 3
        ) {
            console.log("Bad spot - We're hitting the second of the bottom sections")
        }

        if (e.offsetX >= catSectionWidth * 2 &&
            e.offsetX <= catSectionWidth * 3 &&
            e.offsetY >= catSectionHeight * 2 &&
            e.offsetY <= catSectionHeight * 3
        ) {
            console.log("Bad spot - We're hitting the third of the bottom sections")
        }

        if (e.offsetX >= catSectionWidth * 3 &&
            e.offsetX <= catSectionWidth * 4 &&
            e.offsetY >= catSectionHeight * 2 &&
            e.offsetY <= catSectionHeight * 3
        ) {
            console.log("Bad spot - We're hitting the fourth of the bottom sections")
        }


        // console.log("this is the catRect", catRect)

        // console.log("this is click event object", e)
    })
      
      
    }
  
    function restartGame() {
  
      startGame()
  
      game.gameEndScreen.style.display = 'none'
      game.gameEndScreen.style.padding = 0
      game.gameEndScreen.style.height = 0
  
    }
  
    startButton.addEventListener("click", () => {
        console.log("Clicking Start Button")
      startGame();
    });
  
    restartButton.addEventListener("click", () => {
      restartGame();
    });
  };