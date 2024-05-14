window.onload = function () {
  console.log("window is loaded");
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const catElement = document.getElementById("cat");

  let game;

  function startGame() {
    game = new Game();
    game.start();

    console.log("start game");
  }

  function restartGame() {
    startGame();

    game.gameEndScreen.style.display = "none";
    // game.gameEndScreen.style.padding = 0;
    // game.gameEndScreen.style.height = 0;

    game.gameScreen.style.display = "inherit";
  }
  restartButton.addEventListener("click", () => {
    console.log("clicking restart button");
    restartGame();
  });
  startButton.addEventListener("click", () => {
    console.log("Clicking Start Button");
    startGame();
  });

  catElement.addEventListener("click", (e) => {
    let catRect = catElement.getBoundingClientRect();
    let catWidth = catRect.width;
    let catHeight = catRect.height;

    let catSectionWidth = catWidth / 4;
    let catSectionHeight = catHeight / 3;

    if (
      e.offsetX >= 0 &&
      e.offsetX <= catSectionWidth &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      console.log("Good 1");
      game.happyCat();
      game.timer++; /* freezes the timer for 1 second */
    }

    if (
      e.offsetX >= catSectionWidth &&
      e.offsetX <= catSectionWidth * 2 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      console.log("Bad 2");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= catSectionWidth * 2 &&
      e.offsetX <= catSectionWidth * 3 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      console.log("Good 3");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      console.log("Bad 4");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= 0 &&
      e.offsetX <= catSectionWidth &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      console.log("Bad 5");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= catSectionWidth &&
      e.offsetX <= catSectionWidth * 2 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      console.log("Good 6");
      game.timer++;
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 2 &&
      e.offsetX <= catSectionWidth * 3 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      console.log("Good 7");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      console.log("Bad 8");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= 0 &&
      e.offsetX <= catSectionWidth &&
      e.offsetY >= catSectionHeight * 2 &&
      e.offsetY <= catSectionHeight * 3
    ) {
      console.log("Bad 9");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= catSectionWidth &&
      e.offsetX <= catSectionWidth * 2 &&
      e.offsetY >= catSectionHeight * 2 &&
      e.offsetY <= catSectionHeight * 3
    ) {
      console.log("Bad 10");
      game.lives--;
      game.angryCat();
    }

    if (
      e.offsetX >= catSectionWidth * 2 &&
      e.offsetX <= catSectionWidth * 3 &&
      e.offsetY >= catSectionHeight * 2 &&
      e.offsetY <= catSectionHeight * 3
    ) {
      console.log("super bad spot");
      /* belly rub = -1 life & -1 second */
      game.timer--;
      game.lives--;
      game.superAngryCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= catSectionHeight * 2 &&
      e.offsetY <= catSectionHeight * 3
    ) {
      console.log("Bad 11");
      game.lives--;
      game.angryCat();
    }
  });
};
