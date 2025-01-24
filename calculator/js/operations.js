function sum() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;

    if (display2 !== "") {
        let answer = Number(display2) + Number(display1);  
        document.getElementById('display2').value = answer;  
        document.getElementById('display1').value = "0";    
    } else {
        document.getElementById('display2').value = display1; 
        document.getElementById('display1').value = "0";      
    }
    document.getElementById('operator').value = "+"; 
}

function sub() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;

    if (display2 !== "") {
        let answer = Number(display2) - Number(display1);  
        document.getElementById('display2').value = answer;  
        document.getElementById('display1').value = "0";     
    } else {
        document.getElementById('display2').value = display1; 
        document.getElementById('display1').value = "0";      
    }
    document.getElementById('operator').value = "-"; 
}

function mul() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;

    if (display2 !== "") {
        let answer = Number(display2) * Number(display1); 
        document.getElementById('display2').value = answer;  
        document.getElementById('display1').value = "0";     
    } else {
        document.getElementById('display2').value = display1; 
        document.getElementById('display1').value = "0";      
    }
    document.getElementById('operator').value = "*"; 
}

function div() {
    const display1 = document.getElementById('display1').value;
    const display2 = document.getElementById('display2').value;

    if (display2 !== "") {
        if (Number(display1) === 0) {
            document.getElementById('display1').value = "Error";  
            document.getElementById('display2').value = "0";
            document.getElementById('operator').value = "";
            return;
        }
        let answer = Number(display2) / Number(display1); 
        document.getElementById('display2').value = answer;  
        document.getElementById('display1').value = "0";     
    } else {
        document.getElementById('display2').value = display1; 
        document.getElementById('display1').value = "0";      
    }
    document.getElementById('operator').value = "/"; 
}

function dot() {
    const num = document.getElementById('display1').value;
    if (!num.includes('.')) {
        const newNum = num + '.';
        document.getElementById('display1').value = newNum;
    }
}

function equal() {
    const num = document.getElementById('display1').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;

    if (operator == "+") {
        answer = Number(num) + Number(num2);
    } else if (operator == "-") {
        answer = Number(num2) - Number(num);
    } else if (operator == "*") {
        answer = Number(num2) * Number(num);
    } else if (operator == "/") {
        if (Number(num) === 0) {
            answer = "Error"; 
        } else {
            answer = Number(num2) / Number(num);
        }
    }

    document.getElementById('display1').value = answer;  
    document.getElementById('display2').value = "0";     
    document.getElementById('operator').value = "";      
}
