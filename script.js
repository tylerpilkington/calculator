
class Calculator {
    
    constructor() {
        this.displayValue = "";//public attribute or class field
    }//end constructor

}//end class

var Clear = new Boolean(false);
webCalculator = new Calculator;

function InputDigit(digit) {
    if(Clear == true){
        webCalculator.displayValue = digit
        Clear = false
    }else{
        webCalculator.displayValue += digit;
    }
    UpdateDisplay();
    

    //console.log("pressed " + digit);
    //console.log("displayValue is now " + webCalculator.displayValue);
}//end function



function InputOperator(operator) {
    webCalculator.displayValue += " " + operator + " ";
    UpdateDisplay();
    Clear = false;
}//end function

function UpdateDisplay() {
    //SELECT INPUT ELEMENT
    var inputRef = document.querySelector(".calculator-screen");

    //UPDATE INPUT ELEMENT
    inputRef.value = webCalculator.displayValue;
}//end function


function AllClear() {
    webCalculator.displayValue = "0";
    Clear = true
    UpdateDisplay();
}//end function

function Compute() {
    let problem = webCalculator.displayValue;
    let answer = eval(problem);
    webCalculator.displayValue = answer;
    UpdateDisplay();
    Clear = true;
}


//TO DO complete calculator