(function () {
    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const operator = document.querySelector("#operator");
    const calculateBtn = document.querySelector("#calculateBtn");

    function calculate(n1, n2, op) {
        let result;
        switch (op) {
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            case "/":
                result = n2 !== 0 ? n1 / n2 : "Error: Division by zero";
                break;
            default:
                result = "Invalid Operation";
        }
        return result;
    }

    calculateBtn.addEventListener("click", function () {
        const val1 = parseFloat(num1.value);
        const val2 = parseFloat(num2.value);
        const op = operator.value;

        if (isNaN(val1) || isNaN(val2)) {
            console.clear();
            console.log("🚫 Please enter valid numbers.");
            return;
        }

        const result = calculate(val1, val2, op);

        document.querySelector(result)

        console.clear();
        
        console.log(`🧮 Calculation Result: ${val1} ${op} ${val2} = ${result}`);
        
    });

})();
