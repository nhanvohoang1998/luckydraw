let arrayRandomNumber = []

const randomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}


const putInSlot = (number)=>{
    let firstLost = Math.floor(number / 100)
    let secondLost = Math.floor((number%100)/10)
    let thirdLost = number%100%10
    console.log(firstLost," ", secondLost, " ", thirdLost)
    return {
        firstLost,
        secondLost,
        thirdLost
    }
}

const checkNumber = ()=>{
    let number = randomNumber(1,1000)
    let isNumber = arrayRandomNumber.find((value, index)=>{
        return value == number
    })
    // check isNumber not exist in array 
    while(isNumber != undefined){
        number = randomNumber(1,1000)
        isNumber = arrayRandomNumber.find((value, index)=>{
            return value == number
        })
    }
    
    arrayRandomNumber.push(number)
    console.log(arrayRandomNumber)
    return putInSlot(number)
}

export {
    checkNumber,
    arrayRandomNumber,
}






