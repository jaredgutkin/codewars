// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //...
    let convertN = n.toString()
    console.log(convertN)
    let newArray = convertN.split('')
    console.log(newArray)
    let sortArray = newArray.sort()
    console.log(sortArray)
    let reverseArray = sortArray.reverse()
    console.log(reverseArray)
    let joinArray = sortArray.join('')
    console.log(joinArray)
    let backNumber = Number(joinArray)
    console.log(backNumber)
    return backNumber
  }
  