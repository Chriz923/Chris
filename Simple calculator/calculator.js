function display(value) {
    document.getElementById("Result").value += value;
}

function calculate() {
    const task = document.getElementById("Result").value;
    const solution = eval(task);
    document.getElementById("Result").value = solution;
}

function clearScreen() {
    document.getElementById("Result").value = "";
}