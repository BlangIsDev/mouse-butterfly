const button = document.querySelector(".intbut");
const why = document.querySelector(".why");

button.addEventListener("click", ()=>{
    why.innerHTML = "WHY WOULD YOU PRESS THIS BUTTON!!!!"
    setTimeout(() => {
        why.innerHTML = "";
    }, 1000);
})