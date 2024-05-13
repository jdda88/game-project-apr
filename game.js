class Game {
    constructor(){
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById('game-end')
        this.containers = document.getElementsByClassName('containers')
        this.cat = document.getElementById('cat')
        // this.player = new Player(this.gameScreen, 215, 450, 66, 150, '../images/shelby.png')
        this.height = '85vw'
        this.score = 0
        this.lives = 3
        this.timer = 60
        this.gameIsOver = false
        this.gameIntervalId = null
        this.gameLoopFrequency = 1000/60
        this.frames = 0
        this.scoreElement = document.getElementById("score");
        this.livesElement = document.getElementById("lives");
        this.stats = document.getElementById("stats-container");
        this.clockContainer = document.getElementById("clock-container");
        this.clock = document.getElementById("clock");
        this.endMessage = document.getElementById("end-message");
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`

        this.cat.style.display = 'block'

        this.startScreen.style.display = 'none'
        this.startScreen.style.padding = 0
        this.startScreen.style.height = 0

        let theseContainers = [...this.containers]

        theseContainers.forEach((container) => {
            container.style.height = 'fit-content'
            container.style.display = 'block'
            console.log(this.lives )
            
        })

    }

    gameLoop() {
       


        this.update()

        if (this.lives <= 0) {
            console.log("Lives====>", this.lives);
            this.gameIsOver = true;
          }
        
        if (this.timer === 0) {
            this.timer --;
            this.clock.innerHTML = this.timer;
        }

        if (this.timer <= 0) {
            this.gameIsOver = true;
          }

        if (this.gameIsOver === true) {
            clearInterval(this.gameIntervalId)
            this.gameEndScreen();
        }
    }

    









}