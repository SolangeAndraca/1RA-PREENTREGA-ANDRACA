//Operacion suma

function addition (value1, value2){
    const result = value1 + value2;
    return result;
}

//Operacion resta
function substraction (value1, value2){
    const result = value1 - value2;
    return result;
}

//Operacion multiplicar
function multiplication (value1, value2){
    const result = value1 * value2;
    return result;
}

//Operacion division
function division (value1, value2){
    const result = value1 /value2;
    return result;
}



function calculator () {
    let operation;


    while (operation != "x" && operation != "Leave"){
        operation = prompt (
            "Which operation would you like to do? \n+: Addition\n-: Substraction\n*: Multiplication\n/: Division\nx: Leave"      
        );

        operation = operation.toLowerCase();

        switch (operation){
            case "+":
                value1 = parseInt(prompt("Please enter value N°1"));

                value2 = parseInt(prompt("Please enter value N°2"));

                alert("The result of the addition is " + addition(value1, value2));
                break;

            case "-":
                value1 = parseInt(prompt("Please enter value N°1"));

                value2 = parseInt(prompt("Please enter value N°2"));

                alert("The result of the Substraction is " + substraction(value1,value2));
                break;

            case "*":
                value1 = parseInt(prompt("Please enter value N°1"));

                value2 = parseInt(prompt("Please enter value n°2"));

                alert("The result of the multiplication is" + multiplication(value1, value2));
                break;

            case "/":
                value1 = parseInt(prompt("Please enter value N°1"));

                value2 = parseInt(prompt("Please enter value N°2"));

                alert("The result of the division is" + division(value1,value2));
                break;
            
            case "x":
                break;
            
            case "Leave":
                break;
             
            default:
                alert("The operation you are trying to do does not exist.");   
        }
    }
}
