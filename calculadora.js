let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimal = false;
let valSave = "";
function numButPress(num){
    if(resultVal){
        newVal = num;
        resultVal = "";
    } else{
        if(num === '.'){
            if(decimal != true){
                newVal += num;
                decimal = true;
            }
        }else{
            newVal += num;
        }
    }
    document.getElementById("entry").value = newVal
}

function mathButPress(operator){
    if(!resultVal){
        prevVal = newVal;
    } else {
        prevVal =resultVal;
    }
    newVal = "";
    decimal = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}

function equalButPress(num){
    decimal = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }
    prevVal =resultVal;
    document.getElementById("entry").value = resultVal;
}

function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    document.getElementById("entry").value = "0";
}

function copyButPress(){
    valSave = document.getElementById("entry").value;
}

function pasteButPress(num){
    if(valSave){
        document.getElementById("entry").value = valSave;
        newVal = valSave;
    }
}
