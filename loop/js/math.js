/* function sum() {
    const num = document.getElementById('number').value;

    const display = document.getElementById('display');

    display.innerHTML +=  "sample<br/>";
    let sum = 0;
for (let a = 1; a <= 20; a++) {
    console.log(a);
    sum += a; 
}

const word = `The sum of numbers from 1 to 20 is: ${sum}x;`;
console.log(word);
} */

/* function factorial() {
    let num=5;
let product = num;
while(num > 1) {
    console.log(num);
    product *= (num-1);
    num--;
}
console.log("the factorial of 5 is", product)
} */


function add() {
    const num = document.getElementById('number').value;

    const display = document.getElementById('display');

    let answer = "";
    let sum = 0;
    for (let a = 1; a <= num; a++) {
       /*  answer += a + "<br/>"; */
        sum += a;
    } 
    answer += "the sum is: " +sum;
    display.innerHTML = answer;
}

function fac() {
    let number = document.getElementById('number').value;



    let answer = '';
    let product = number;
    let num = number;
    while (num > 1) {
/*         answer += num + "<br/>" */
        product *= (num - 1);
        num --;
    }
    answer += num + "<br/>"
    answer += "the factorial of " + number + " is "  + product;
    document.getElementById('display').innerHTML = answer;
}


function odd() {
    let number = document.getElementById('number').value;
    let answer = '';
    let num = number;
    
    while (num > 1) {
        if (num % 2 !== 0) {
            answer += num + "<br/>";
        }
        num--;
    }
    
    if (num % 2 !== 0) {
        answer += num + "<br/>";
    }
    document.getElementById('display').innerHTML = answer;
}

function even() {

        let number = document.getElementById('number').value;
        let answer = '';
        let num = number;
        
        while (num > 1) {
            if (num % 2 === 0) {
                answer += num + "<br/>";
            }
            num--;
        }
        
        if (num % 2 === 0) {
            answer += num + "<br/>";
        }
        document.getElementById('display').innerHTML = answer; 
        console.log(answer);
    
}