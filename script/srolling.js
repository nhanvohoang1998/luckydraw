import employee from "../data/employee.js";
import { checkNumber, arrayRandomNumber, selectAwardName, putInArrayAward, returnArrayAward } from "./randomNumber.js";

const scrollers = document.querySelectorAll(".scroller")
const imgSlots = document.querySelectorAll(".imgSlot")
const number1 = document.querySelector("#number1 .scroller__inner")
const number2 = document.querySelector("#number2 .scroller__inner")
const number3 = document.querySelector("#number3 .scroller__inner")
const resetY = document.querySelectorAll(".scroller .scroller__inner")

//scroll number with stranslate y
const scrollToNumber = (number, slot) => {
    slot.querySelectorAll('span').forEach((tick, i) => {
        slot.style.transform = `translateY(-${10 * parseInt(number)}%)`;
    })
}

// scrolling button with add animation attribute
const scrolling = () => {
    resetY.forEach((value)=>{
        value.style.transform = `translateY(0%)`
    })

    imgSlots.forEach((imgSlot) => {
        imgSlot.style.display = "none"
    })

    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
    })
}

// stop scroliing button:
// + check data-animated is runing or stoping  if stopping return
// + erase animation attribute
// + scroll to random number every single slot
// + show randomnumber bottom at website
const stopScrolling = () => {
    let isStop = document.querySelector("#number1").getAttribute("data-animated")
    if (isStop == "false") {
        return
    }

    scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", false);
    })

    let { firstLost, secondLost, thirdLost } = checkNumber()
    scrollToNumber(firstLost, number1)
    scrollToNumber(secondLost, number2)
    scrollToNumber(thirdLost, number3)

    award()
}

//get name value from data employee
const getNameFromData = (number) => {
    return employee.find((value, index) => {
        return number == value.number
    })
}

// show randomnumber bottom at website
const award = () => {
    let awardElement = ``
    // get array award to maping
    returnArrayAward(selectAwardName()).map((value, index) => {
        let { name } = getNameFromData(value)
        let tmp = `
                    <div class="numberAward">
                        <div>${value}</div>
                        <div>${name}</div>
                    </div>
                `
        awardElement += tmp
    })
    document.getElementById("award").innerHTML = awardElement
}

// refresh new award:
// + 

const refreshAward = () => {
    while (arrayRandomNumber.length > 0) {
        arrayRandomNumber.pop();
    }
    console.log(arrayRandomNumber)
    document.getElementById("award").innerHTML = ``

}

document.getElementById("Reset").addEventListener("click", refreshAward)
document.getElementById("Spin").addEventListener("click", scrolling)
document.getElementById("Stop").addEventListener("click", stopScrolling)


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
