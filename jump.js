let isHovering = false;
let isMovingLeft = false;
let isMovingRignt = false;

const maru = document.querySelector(".maru");

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !isHovering) {
    jump();
  } else if (event.code === "ArrowLeft" && !isHovering) {
    moveLeft();
  } else if (event.code === "ArrowRight" && !isHovering) {
    moveRight();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    stopMoveLeft();
  } else if (event.code === "ArrowRight") {
    stopMoveRight();
  }
});

function jump() {
  isHovering = true;
  maru.style.animation = "none";
  void maru.offsetWidth;
  maru.style.animation = "jump 0.5s ease-out";

  setTimeout(function () {
    isHovering = false;
  }, 500);
}

function moveLeft() {
  isMovingLeft = true;
  move();
}

function moveRight() {
  isMovingRignt = true;
  move();
}

function stopMoveLeft() {
  isMovingLeft = false;
}

function stopMoveRight() {
  isMovingRignt = false;
}

function move() {
  var currentLeft = maru.offsetLeft;
  var step = 10;

  if (isMovingLeft) {
    if (currentLeft - step >= 0) {
      maru.style.left = (currentLeft - step) + "px";
    }
  } else if (isMovingRignt) {
    var maxWidth = window.innerWidth - maru.offsetWidth;
    if (currentLeft + step <= maxWidth) {
      maru.style.left = (currentLeft + step) + "px";
    }
  }

  if (isMovingLeft || isMovingRignt) {
    requestAnimationFrame(move);
  }
}