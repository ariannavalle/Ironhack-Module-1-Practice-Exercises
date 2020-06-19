//1. Turn string to number
let price1 = '30.14xxx';
let price2 = '45';
let convertString = price => parseInt(price)
console.log(convertString(price1))
console.log(convertString(price2))

//2. Given the number as string, remove comma and add dot
let num = '2,45';
let newNum = num.replace(",",".")
console.log(newNum)

//3. Turn number to string
let price3 = 55;
let newPrice = price3.toString()
console.log(typeof newPrice)

//4. Write if-else or switch that will console.log() message if someone is eligible to drink, and send them warning if they are not eligible to drink
let age = 20;
age >= 21 ? console.log(`You are eligible to drink`) : console.log(`You are NOT eligible to drink`)

//5. Find js method that will help you to get rid of the white space around the string
let weirdString = '   this string has some white space around    ';
console.log(`weirdString length: ${weirdString.length}`)
let normalString = weirdString.trim();
console.log(`normalString length: ${normalString.length}`)
console.log(normalString)

//6. Create two variables with your first name and last name, make the first letters capitalized and concatenate them
let firstName = 'arianna';
let lastName = 'valle';

let fullName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1)} ` ;
console.log(fullName)

//7. Using the new Date().getDay() method you can get the numerical representation of a current day in the week.
switch(new Date().getDay()) {
    case 0:
        console.log("It's Sunday")
    case 1:
        console.log("It's Monday")
      break;
    case 2:
        console.log("It's Tuesday")
      break;
    case 3:
        console.log("It's Wednesday")
    break;
    case 4:
        console.log("It's Thursday")
    break;
    case 5:
        console.log("It's Friday")
    break;
    case 6:
        console.log("It's Saturday")
    break;
    default:
        console.log("Invalid Day")
  }