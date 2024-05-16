window.onload = function () {
  console.log("window is loaded");
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const cursor = document.getElementById("custom-cursor");
  const catElement = document.getElementById("normal-cat");
  const angryCatElement = document.getElementById("angry-cat");
  const happyCatElement = document.getElementById("happy-cat");
  const treat = document.getElementById("treat-popup");
  const hearts = document.getElementById("hearts-popup");
  let clickCount = 0;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  treat.addEventListener("click", () => {
    game.lives++;
    limitClicks();
    // treat.remove();
  });

  function limitClicks() {
    if (game.lives >= 2) {
      treat.remove();
    }
  }

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
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      angryCatElement.style.display = "none";

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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      angryCatElement.style.display = "none";
      happyCatElement.style.display = "none";
      catElement.style.display = "inherit";
      console.log("Good 3");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      catElement.style.display = "none";
      happyCatElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      happyCatElement.style.display = "none";
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      console.log("Good 7");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
      console.log("Bad 11");
      game.lives--;
      game.angryCat();
    }
  });

  happyCatElement.addEventListener("click", (e) => {
    let catRect = happyCatElement.getBoundingClientRect();
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
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      angryCatElement.style.display = "none";

      console.log("hearts");
      hearts.style.display = "block";
      setTimeout(() => {
        hearts.style.display = "none";
      }, 3000);

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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      angryCatElement.style.display = "none";
      happyCatElement.style.display = "none";
      catElement.style.display = "inherit";

      let hearts = document.getElementById("hearts-popup");
      console.log("hearts");
      hearts.style.display = "block";
      setTimeout(() => {
        hearts.style.display = "none";
      }, 3000);

      console.log("Good 3");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      catElement.style.display = "none";
      happyCatElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      happyCatElement.style.display = "none";
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      if (treat) {
        treat.style.display = "inherit";
        setTimeout(() => {
          treat.style.display = "none";
        }, 3000);
      }

      let hearts = document.getElementById("hearts-popup");
      console.log("hearts");
      hearts.style.display = "block";
      setTimeout(() => {
        hearts.style.display = "none";
      }, 3000);

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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";

      let hearts = document.getElementById("hearts-popup");
      console.log("hearts");
      hearts.style.display = "block";
      setTimeout(() => {
        hearts.style.display = "none";
      }, 3000);

      console.log("Good 7");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
      console.log("Bad 11");
      game.lives--;
      game.angryCat();
    }
  });

  angryCatElement.addEventListener("click", (e) => {
    let catRect = angryCatElement.getBoundingClientRect();
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
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      angryCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      angryCatElement.style.display = "none";
      happyCatElement.style.display = "none";
      catElement.style.display = "inherit";
      console.log("Good 3");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= 0 &&
      e.offsetY <= catSectionHeight
    ) {
      catElement.style.display = "none";
      happyCatElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      happyCatElement.style.display = "none";
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
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
      angryCatElement.style.display = "none";
      catElement.style.display = "none";
      happyCatElement.style.display = "inherit";
      console.log("Good 7");
      game.happyCat();
    }

    if (
      e.offsetX >= catSectionWidth * 3 &&
      e.offsetX <= catSectionWidth * 4 &&
      e.offsetY >= catSectionHeight &&
      e.offsetY <= catSectionHeight * 2
    ) {
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
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
      catElement.style.display = "none";
      angryCatElement.style.display = "inherit";
      happyCatElement.style.display = "none";
      console.log("Bad 11");
      game.lives--;
      game.angryCat();
    }
  });
};
