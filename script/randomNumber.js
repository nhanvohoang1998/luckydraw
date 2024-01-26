let arrayRandomNumber = []
let arrayGiaiKhuyenKhich = []
let arrayGiaiBa = []
let arrayGiaiNhi = []
let arrayGiaiNhat = []
let arrayGiaiDacBiet = []

let maxNumber = 273

//random number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

//get valua max number from input model
const getMaxNumber = () => {
    maxNumber = document.getElementById("modalInput").value * 1 + 1
    document.getElementById("myModal").style.display = "none";
}

document.getElementById("modalSubmit").addEventListener("click", getMaxNumber)


//split number to 3 slot
const putInSlot = (number) => {
    let firstLost = Math.floor(number / 100)
    let secondLost = Math.floor((number % 100) / 10)
    let thirdLost = number % 100 % 10
    return {
        firstLost,
        secondLost,
        thirdLost
    }
}

//get value name of selection award -> return string name
const selectAwardName = () => {
    let awardName = ``
    document.querySelectorAll("img.mySlides[style*='display: block']").forEach((value, index) => {
        awardName = value.getAttribute("value")
    })
    return awardName
}

// push number to right array award
const putInArrayAward = (awardName, number) => {
    switch (awardName) {
        case "giaiKhuyenKhich":
            arrayGiaiKhuyenKhich.push(number)
            break
        case "giaiBa":
            arrayGiaiBa.push(number)
            break
        case "giaiNhi":
            arrayGiaiNhi.push(number)
            break
        case "giaiNhat":
            arrayGiaiNhat.push(number)
            break
        case "giaiDacBiet":
            arrayGiaiDacBiet.push(number)
            break
    }
}

// return array award selection
const returnArrayAward = (awardName) => {
    switch (awardName) {
        case "giaiKhuyenKhich":
            return arrayGiaiKhuyenKhich 
        case "giaiBa":
            return arrayGiaiBa 
        case "giaiNhi":
            return arrayGiaiNhi 
        case "giaiNhat":
            return arrayGiaiNhat 
        case "giaiDacBiet":
            return arrayGiaiDacBiet 
    }
}



//check number: 
// + random number default max number is 1000
// + random number not exist in arrayRandomNumber
// + push number to arrayRandomNumber
// + return object number to 3 slot
// + push number into global array
// + push number into single award array
const checkNumber = () => {
    let number = randomNumber(1, maxNumber)
    let isNumber = arrayRandomNumber.find((value, index) => {
        return value == number
    })
    // check isNumber not exist in array 
    while (isNumber != undefined) {
        number = randomNumber(1, maxNumber)
        isNumber = arrayRandomNumber.find((value, index) => {
            return value == number
        })
    }
    // push number into array
    arrayRandomNumber.push(number)
    putInArrayAward(selectAwardName(),number)
    return putInSlot(number)
}



export {
    checkNumber,
    arrayRandomNumber,
    putInArrayAward,
    selectAwardName,
    returnArrayAward
}