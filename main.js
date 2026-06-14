console.log("Why are you looking here buddy?");

/*vars*/
const fly = document.querySelector(".fly");
let mouseX;
let mouseY;
let on = false;

/*mouse move and update mouse position*/
document.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
})

/*space toggle*/
document.addEventListener("keydown", (e)=>{
    if(e.code === "Space"){
        e.preventDefault;
        on = !on;
        if(on){
            animate();
        }
    }
})

/*move div to mouse var position*/
function animate(){
    if (!on){
        return;
    }

    fly.style.left = mouseX + "px";
    fly.style.top = mouseY + "px";
    requestAnimationFrame(animate);
}