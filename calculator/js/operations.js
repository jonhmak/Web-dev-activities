function sum() {
    calculate();
    document.getElementById('operator').value = "+";
}

function sub() {
    calculate();
    document.getElementById('operator').value = "-";
}

function mul() {
    calculate();
    document.getElementById('operator').value = "*";
}

function div() {
    calculate();
    document.getElementById('operator').value = "/";
}

function calculate() {
    const display1 = document.getElementById("display1").value;
    const display2 = document.getElementById("display2").value;
    const operator = document.getElementById("operator").value;

    // Perform calculation only if there is a valid operator
    if (operator && display2 !== "" && display1 !== "0") {
        let answer;
        if (operator === "+") {
            answer = Number(display2) + Number(display1);
        } else if (operator === "-") {
            answer = Number(display2) - Number(display1);
        } else if (operator === "*") {
            answer = Number(display2) * Number(display1);
        } else if (operator === "/") {
            answer = Number(display2) / Number(display1);
        }

        // Store the result in display1 and reset display2
        document.getElementById('display1').value = answer;
        document.getElementById('display2').value = "0";
    } else {
        // If no operator or display2 is empty, move display1 to display2
        document.getElementById('display2').value = display1;
        document.getElementById('display1').value = "0";
    }
}

function equal() {
    calculate();
    // Clear the operator after final calculation
    document.getElementById('operator').value = "";
}
