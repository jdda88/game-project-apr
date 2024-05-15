class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.containers = document.getElementsByClassName("containers");
    this.cat = document.getElementById("normal-cat");
    this.theAngryCat = document.getElementById('angry-cat')
    this.theHappyCat = document.getElementById('happy-cat')
    // this.player = new Player(this.gameScreen, 215, 450, 66, 150, '../images/shelby.png')
    this.height = "85vw";
    this.score = 0;
    this.lives = 20;
    this.timer = 60;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.frames = 0;
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.stats = document.getElementById("stats-container");
    this.clockContainer = document.getElementById("clock-container");
    this.clock = document.getElementById("clock");
    this.winMessage = document.getElementById("win-message");
    this.endMessage = document.getElementById("end-message");
    this.catAttack = document.getElementById("cat-gif");
    this.catWin = document.getElementById("cat-win");
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;

    this.cat.style.display = "block";
    this.theAngryCat.style.display = 'none'
    this.theHappyCat.style.display = 'none'



    this.startScreen.style.display = "none";
    this.startScreen.style.padding = 0;
    this.startScreen.style.height = 0;

    let theseContainers = [...this.containers];

    theseContainers.forEach((container) => {
      container.style.height = "fit-content";
      container.style.display = "block";
      console.log(this.lives);
    });

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.frames += 1;
    this.update();

    if (this.lives <= 0) {
      console.log("Lives====>", this.lives);
      this.gameIsOver = true;
    }

    if (this.frames % 60 === 0) {
      this.timer--;
      this.clock.innerHTML = this.timer;
    }

    if (this.timer === 0) {
      this.clock.innerHTML = this.timer;
      this.gameIsOver = true;
      this.timer--;
    }

    if (this.timer <= 0) {
      this.gameIsOver = true;
    }

    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
      this.gameOverScreen();
    }
  }

  update() {
    this.livesElement.innerHTML = this.lives;

    // this.clock.innerHTML = this.timer;
  }

  happyCat() {
    console.log("Cat is happy function");
    let happyCatSound = new Audio();
    happyCatSound.src = "cat-purring.mp3";
    happyCatSound.volume = 1;
    happyCatSound.loop = true;
    happyCatSound.play();

    let timer = 0;

    let happyInterval;

    happyInterval = setInterval(() => {
      timer++;
      if (timer >= 4) {
        happyCatSound.pause();
        happyCatSound.volume = 0;
        happyCatSound.loop = false;
        clearInterval(happyInterval);
      }
    }, 500);
  }

  angryCat() {
    console.log("Cat is angry function");
    let angryCatSound = new Audio();
    angryCatSound.src = "cat-hiss.mp3";
    angryCatSound.volume = 1;
    angryCatSound.loop = false;
    angryCatSound.play();

    let timer = 0;

    let angryInterval;

    angryInterval = setInterval(() => {
      timer--;
      if (timer >= 4) {
        angryCat.pause();
        angryCat.volume = 0;
        angryCat.loop = false;
        clearInterval(angryInterval);
      }
    }, 500);
  }

  superAngryCat() {
    console.log("Cat is angry function");
    let superAngryCatSound = new Audio();
    superAngryCatSound.src = "cat-angry.mp3";
    superAngryCatSound.volume = 1;
    superAngryCatSound.loop = false;
    superAngryCatSound.play();

    let timer = 0;

    let superAngryInterval;

    superAngryInterval = setInterval(() => {
      timer--;
      if (timer >= 4) {
        superAngryCat.pause();
        superAngryCat.volume = 0;
        superAngryCat.loop = false;
        clearInterval(superAngryInterval);
      }
    }, 500);
  }

  gameOverScreen() {
    console.log("Game is over!");
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "inherit";

    if (this.timer <= 0 && this.lives) {
      this.catAttack.style.display = "none";
      this.catWin.style.display = "inherit";
      this.winMessage.innerText = `CONGRATULATIONS!`;
      this.endMessage.innerHTML = `You won, with ${this.lives} lifes left you are clearly a cat person!`;
    } if(this.lives <= 0) {
      this.catWin.style.display = "none";
      this.catAttack.style.display = "inherit";
      this.winMessage.innerText = `GAME OVER`;
      this.endMessage.innerHTML = ` You lost, grab some band-aids for you!`;
    }
  }
}
