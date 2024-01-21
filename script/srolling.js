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
    slot.querySelectorAll('span').forEach(() => {
        slot.style.transform = `translateY(-${10 * parseInt(number)}%)`;
    })
}

// scrolling button with add animation attribute
const scrolling = () => {
    resetY.forEach((value) => {
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
    // translate y to -90 to sroll up number2 slot
    scrollToNumber(9, number2)
    //fix bug at scroll number 0 and 9
    if (firstLost == 0) {
        number1.style.transform = `translateY(2%)`
    }
    if (secondLost == 9) {
        number2.style.transform = `translateY(-92%)`
    }
    if (thirdLost == 0) {
        number3.style.transform = `translateY(2%)`
    }

    setTimeout(() => {
        scrollToNumber(firstLost, number1)
        scrollToNumber(secondLost, number2)
        scrollToNumber(thirdLost, number3)
        setTimeout(() => {
            award()
        }, 2000)
    }, 1)
}

//get name value from data employee
const getNameFromData = (number) => {
    return employee.find((value, index) => {
        return number == value.number
    })
}

// show randomnumber bottom at website
const award = () => {
    try {
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
    } catch (error) {

    }
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

// document.getElementById("Reset").addEventListener("click", refreshAward)
document.getElementById("Spin").addEventListener("click", scrolling)
document.getElementById("Stop").addEventListener("click", stopScrolling)


export {
    award,
}