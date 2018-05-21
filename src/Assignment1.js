//function 1
const positiveSum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}

// function 2
const isDivisible = (number, divisorA, divisorB) => number % divisorB === 0 && number % divisorA === 0

//function 3
const solution = (str) => str.split('').reverse().join('')

// function 4
const reverseSeq = (n) => {
    let answer = []; //intialize an array

    for (let i = n; i > 0; i--) { //loop down from n to 1
        answer.push(i); //push each i to the answer array
    }

    return answer; //return answer;
};