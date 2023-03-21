let result = document.getElementById("result");
function appendValue(value) {
    result.value += value;
}
function clearResult() {
    result.value = "";
}
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid expression");
    }
}
