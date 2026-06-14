console.log("Why are you looking here buddy?");

/*vars*/
const fly = document.querySelector(".fly");
let flyX = 0;
let flyY = 0;
let velY = 0;
const grav = 0.5;

/*wasd movement*/
document.addEventListener("keydown", (e)=>{
    if(e.code === "KeyW"){
        velY = -10
    }else if(e.code === "KeyD"){
        flyX += 5
        fly.style.left = flyX + "px";
    }else if(e.code === "KeyA"){
        flyX -= 5
        fly.style.left = flyX + "px";
    }
})

function gameloop(){
    velY += grav;
    flyY += velY;

    fly.style.top = flyY + "px";
    requestAnimationFrame(gameloop);
}
gameloop()