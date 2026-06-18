console.log("Why are you looking here buddy?");

/* vars */
const move = document.querySelector(".move");
let moveX = 0;
let moveY = 0;
let velY = 0;
const grav = 0.5;
const speed = 10;
const jumpStrength = 50;

/* wasd movement */
document.addEventListener("keydown", (e) => {
    if (e.code === "KeySpace") {
        velY = -jumpStrength;
    } else if (e.code === "KeyD") {
        moveX += speed;
    } else if (e.code === "KeyA") {
        moveX -= speed;
    }
});

function gameloop() {
    velY += grav;
    moveY += velY;

    if (moveX < 0) moveX = 0;
    if (moveY < 0) {
        moveY = 0;
        velY = 0;
    }

    const maxX = window.innerWidth - move.offsetWidth;
    const maxY = window.innerHeight - move.offsetHeight;

    if (moveX > maxX) moveX = maxX;
    if (moveY > maxY) {
        moveY = maxY;
        velY = 0;
    }

    move.style.left = moveX + "px";
    move.style.top = moveY + "px";
    requestAnimationFrame(gameloop);
}
gameloop();





