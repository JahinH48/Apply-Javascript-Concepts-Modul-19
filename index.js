// 19-3 Check even and odd number using function


// var namber = 140;
// var result = namber % 2;
// console.log(result == 0);


//    Ever Number 

/*
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const MyNumber = 1456;
const Jisan = isEven(MyNumber);
console.log('is My Number Even : ', Jisan);


//  odd Number



function isodd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const oddNumber = 1453;
const Jisa = isEven(oddNumber);
console.log('is My Number Odd : ', Jisa);   */



// 19-4 Check whether a year is a Leap Year or not


// function isLeapYear(Year) {
//     if ((Year % 4 == 0) && (Year % 100 != 0) && (Year % 400 == 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const YearNumber = 2400;
// const ShowLeapYear = isLeapYear(YearNumber);
// console.log('is Leap Year  : ', ShowLeapYear);



//19-5 Calculate factorial of a number using for loop



// var factorial = 1;

// for (var i = 0; i <= 7; i++) {

//     console.log(i);

//     factorial = factorial * 1;

// }

// console.log(factorial);



//19-6 Recalculate factorial multiple times using a function


// let factorial = 1;
// for (let i = 1; i <= 6; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

/*

function getFactorial(myNumber) {
    let factorial = 1;
    for (let i = 1; i <= myNumber; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var myFristFactorialNumber = getFactorial(9);
console.log(myFristFactorialNumber);
*/



// function factorial(namber) {
//     let fac = 1;
//     for (let i = 1; i <= namber; i++) {
//         fac = fac * i;
//     }
//     return fac;

// }
// var fastfac = factorial(6);
// console.log(fastfac);


// 19-7 Factorial using a while loop or a decrementing loop

function Myfunction(namber) {
    let factorial = 1;
    let i = 1;
    while (i <= namber) {
        factorial = factorial * 1;
        i++;

    } return factorial;

}
const myFrist = Myfunction(6);
console.log(myFrist);



// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);



/*

// decriment


function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

// const myFactorial = getFactorial(50);
// console.log(myFactorial);

// for loop reverse

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

// const myFactorial = getFactorial2(6);
// console.log(myFactorial);

*/


// function fac(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * fac(n - 1);
// }
// const MyNum = fac(5);
// console.log(MyNum);
