let numString = "10";
let num = 5;
console.log(numString + num); // Concatenation 105
console.log(Number(numString) + num); // Conversion 15


// looping
for (initialize; condition; increment / decrement) {

}

for (var i = 0; i < 10; i++) {
    console.log(i) // 1,2,3,4,5,6,7,8,9,10
}

var i = 0
while (i < 10) {
    console.log(i)
    i++
    // 1,2,3,4,5,6,7,8,9,10
}

var i = 0
do {
    console.log(i)
    i++
} while (i < 10) //  1,2,3,4,5,6,7,8,9,10