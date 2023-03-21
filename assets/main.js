let problem = document.querySelector('.problem');
let result = document.querySelector('.result');
let calc = document.querySelector('.calc');
let buttons = document.querySelectorAll('.buttons span');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        problem.innerHTML == "0" ? problem.innerHTML = " " : "";
        switch (btn.innerHTML) {
            case '+':
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
            case "-":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;
            case "*":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;

            case "/":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;

            case ".":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;
            case "(":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;
            case ")":
                if (problem.dataset.check == "true") {
                    problem.innerHTML += btn.innerHTML;
                    problem.dataset.check = "false";
                }
                break;
            case "AC":
                if (problem.innerHTML.length > 2) {
                    problem.innerHTML = problem.innerHTML.slice(-1) == " " ? problem.innerHTML.slice(0, -2) : problem.innerHTML.slice(0, -1);
                }
                else {
                    problem.innerHTML = "0";
                }
                break;
            case "C":
                problem.innerHTML = 0;
                result.innerHTML = 0;
            case "=":
                break;
            default:
                problem.innerHTML += btn.innerHTML;
                problem.dataset.check = "true";
        }
    })
})
calc.addEventListener('click', () => {

    if (problem.innerHTML == 0) {
        result.innerHTML = 0;

    }
    else {
        result.innerHTML = eval(problem.innerHTML);
    }
    problem.innerHTML = 0
})