const result = document.getElementById("input");

const calculate = (number) => {
    return (checkOp(number) 
    && checkOp(result.value[result.value.length - 1])) ? 
    null : result.value += number;
}

function checkOp(str){
    switch (str) {
        case "+":
            return true;
        case "-":
            return true;
        case "*":
            return true;
        case "/":
            return true;
        case "%":
            return true;
        case ".":
            return result.value[result.value.length - 1] == "." ? true : false;
        default:
            return false;
    }
}

const Result = () => {
    try{
        result.value = eval(result.value);
    } catch (err) { 
        alert("Error: Input invalid!");
    }
}

function ac() {
    result.value = ""; 
}

function del() {
    result.value = result.value.slice(0, -1);
}