function display(value) {
    document.getElementById("outCome").value += value;
}

function calculate() {
    const task = document.getElementById("outCome").value;
    const solution = eval(task);
    document.getElementById("outCome").value = solution;
}

function clearScreen() {
    document.getElementById("outCome").value = "";
}