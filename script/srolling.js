import {checkNumber, arrayRandomNumber} from "./randomNumber.js";

const scrollers = document.querySelectorAll(".scroller")
const number1 = document.querySelector("#number1 .scroller__inner")
const number2 = document.querySelector("#number2 .scroller__inner")
const number3 = document.querySelector("#number3 .scroller__inner")

const scrollToNumber = (number, slot)=>{
    slot.querySelectorAll('span').forEach((tick, i) => {
        slot.style.transform = `translateY(-${10 * parseInt(number)}%)`;
    })
}

const scrolling = ()=>{
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    })
}

const stopScrolling = ()=>{
    let {firstLost, secondLost, thirdLost} = checkNumber()
    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", false);
    })
    console.log(firstLost)
    console.log(secondLost)
    console.log(thirdLost)
    scrollToNumber(firstLost,number1)
    scrollToNumber(secondLost,number2)
    scrollToNumber(thirdLost,number3)
    award()
}


const award = ()=>{
    let awardElement = ``
    arrayRandomNumber.map((value, index)=>{
        let tmp = `
                    <div class="numberAward">${value}</div>
                `
        awardElement += tmp
    })
    document.getElementById("award").innerHTML = awardElement
}

const refreshAward = ()=>{
    while (arrayRandomNumber.length > 0) {
        arrayRandomNumber.pop();
      }
    console.log(arrayRandomNumber)
    document.getElementById("award").innerHTML = ``
    
}

document.getElementById("Reset").addEventListener("click",refreshAward)
document.getElementById("Spin").addEventListener("click",scrolling)
document.getElementById("Stop").addEventListener("click",stopScrolling)


// // If a user hasn't opted in for recuded motion, then we add the animation
// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     // add data-animated="true" to every `.scroller` on the page
//     scroller.setAttribute("data-animated", true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);

//     // For each item in the array, clone it
//     // add aria-hidden to it
//     // add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
//   });
// }
