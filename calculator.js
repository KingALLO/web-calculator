let result = document.getElementsById("input-text");

let calculate = (number) => {
    result.value += number;
}

let Result = () => {
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