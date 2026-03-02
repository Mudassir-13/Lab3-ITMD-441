// M Baksh
// ITMD 441-02 Undergraduate Student
// ----------------------------------------------

//Exercise #1
function minMaxAverage(array) {
    let total = array.length;
    let min = Infinity
    let max = -Infinity
    let sum = 0

    for (let i = 0; i < total; i++) {
        let current = array[i];
        if (current < min) {
            min = current;
        }
        if (current > max) {
            max = current;
        }
        sum += current;
    }

    let average = sum / total;

    let output = "Total Numbers: " + total + ", Min Value: " + min + ", Max Value: " + max + ", Average: " + average;

    console.log(output);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([6, 5, 3, 5, 10, 12, 8, 9]);
minMaxAverage([-5, 9, 14, 10, 22, 7, 5, 8]);


// ----------------------------------------------
//Exercise #2
function countVowels(string) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }

    return `${string}: ${count} vowels`;
}

console.log(countVowels("Summer"));
console.log(countVowels("Illinois"));
console.log(countVowels("Macbook"));


// ----------------------------------------------
//Exercise #3
function sortNumbers(array) {
    let originalArray = Array.from(array);
    
    let sortedArray = Array.from(array).sort((a, b) => a - b);

    return `Original Array: [${originalArray}] output Sorted Array: [${sortedArray}]`;
}

console.log(sortNumbers([5, 2, 6, 1, 5, 6]));
console.log(sortNumbers([3, 0, -4, 10, 5]));
console.log(sortNumbers([4, 4, 1, 6, 9]));


// ----------------------------------------------
// Exercise #4
function celsiusToFahrenheit (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit");
}

celsiusToFahrenheit(-13);
celsiusToFahrenheit(100);
celsiusToFahrenheit(37);