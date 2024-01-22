import { award, imgSlots } from "./srolling.js";

var slideIndex = 1;
showDivs(slideIndex);

//add animation slide left right when click next pre:
// + if n = 1 click next add to spinBox and img animation
const addAnimationSpinSlide = (n) => {
    let spinBoxOutSideElement = document.getElementById("spinBoxOutSide")
    let mySlidesElement = document.querySelectorAll(".mySlides")
    
    if (n == 1) {
        mySlidesElement.forEach((mySlide)=>{
            mySlide.classList.add("prize-next")
        })
        spinBoxOutSideElement.classList.add("prize-next")
    } else {
        mySlidesElement.forEach((mySlide)=>{
            mySlide.classList.add("prize-prev")
        })
        spinBoxOutSideElement.classList.add("prize-prev")
    }
}
//remove animation slide left right when click next pre for another click
const removeAnimationSpinSlide = () => {
    let spinBoxOutSideElement = document.getElementById("spinBoxOutSide")
    let mySlidesElement = document.querySelectorAll(".mySlides")

    mySlidesElement.forEach((mySlide)=>{
        mySlide.classList.remove("prize-next")
    })
    mySlidesElement.forEach((mySlide)=>{
        mySlide.classList.remove("prize-prev")
    })
    spinBoxOutSideElement.classList.remove("prize-next")
    spinBoxOutSideElement.classList.remove("prize-prev")
}
// when click next-prev:
// + opacity spinBox and image = 0 to hide 
// + remove animation in spinBox and image
// + opacity spinbox = 1 to show
// + settimeout to wait to add animation
function plusDivs(n) {
    showDivs(slideIndex += n);
    let spinBoxOutSideElement = document.getElementById("spinBoxOutSide")
    let mySlidesElement = document.querySelectorAll(".mySlides")

    spinBoxOutSideElement.style.opacity = "0"
    mySlidesElement.forEach((mySlide)=>{
        mySlide.style.opacity = "0"
    })
    removeAnimationSpinSlide()
    spinBoxOutSideElement.style.opacity = "1"
    

    setTimeout(() => {
        mySlidesElement.forEach((mySlide)=>{
            mySlide.style.opacity = "1"
        })
        imgSlots.forEach((imgSlot) => {
            imgSlot.style.display = "inline-block"
        })
        addAnimationSpinSlide(n)
    }, 200)
    award();
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

document.getElementById("buttonPre").addEventListener("click", () => { plusDivs(-1) })
document.getElementById("buttonNext").addEventListener("click", () => { plusDivs(1) })