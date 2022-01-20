const EqualButton = ({
    text,
    clase,
    operation,
    firstNumber,
    secondNumber,
    setDisplaySecondNumber,
    displaySecondNumber,
    setResult,
}) => {
    const handleClick = (operation) => {
        let resultado;
        let number;
        let n;
        let m;
        switch (operation) {
            case "suma":
                if (secondNumber.includes(".") || firstNumber.includes(".")) {
                    n = secondNumber.split(".").length;
                    m = firstNumber.split(".").length;
                    if (n > 1 || m > 1) {
                        setResult("Syntax Error");
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    } else {
                        resultado =
                            parseFloat(secondNumber) + parseFloat(firstNumber);
                        setResult(resultado);
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    }
                } else {
                    resultado = parseInt(secondNumber) + parseInt(firstNumber);
                    setResult(resultado);
                    number = displaySecondNumber;
                    number = number + " " + firstNumber;
                    setDisplaySecondNumber(number);
                }
                break;
            case "resta":
                if (secondNumber.includes(".") || firstNumber.includes(".")) {
                    n = secondNumber.split(".").length;
                    m = firstNumber.split(".").length;
                    if (n > 1 || m > 1) {
                        setResult("Syntax Error");
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    } else {
                        resultado =
                            parseFloat(secondNumber) - parseFloat(firstNumber);
                        setResult(resultado);
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    }
                } else {
                    resultado = parseInt(secondNumber) - parseInt(firstNumber);
                    setResult(resultado);
                    number = displaySecondNumber;
                    number = number + " " + firstNumber;
                    setDisplaySecondNumber(number);
                }
                break;
            case "division":
                if (secondNumber.includes(".") || firstNumber.includes(".")) {
                    n = secondNumber.split(".").length;
                    m = firstNumber.split(".").length;
                    if (n > 1 || m > 1 || secondNumber === "0") {
                        setResult("Syntax Error");
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    } else {
                        resultado =
                            parseFloat(secondNumber) / parseFloat(firstNumber);
                        setResult(resultado);
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    }
                } else {
                    if (secondNumber === "0") {
                        setResult("syntax Error");
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    } else {
                        resultado =
                            parseInt(secondNumber) / parseInt(firstNumber);
                        setResult(resultado);
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    }
                }
                break;
            case "multiplicacion":
                if (secondNumber.includes(".") || firstNumber.includes(".")) {
                    n = secondNumber.split(".").length;
                    m = firstNumber.split(".").length;
                    if (n > 1 || m > 1) {
                        setResult("Syntax Error");
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    } else {
                        resultado =
                            parseFloat(secondNumber) * parseFloat(firstNumber);
                        setResult(resultado);
                        number = displaySecondNumber;
                        number = number + " " + firstNumber;
                        setDisplaySecondNumber(number);
                    }
                } else {
                    resultado = parseInt(secondNumber) * parseInt(firstNumber);
                    setResult(resultado);
                    number = displaySecondNumber;
                    number = number + " " + firstNumber;
                    setDisplaySecondNumber(number);
                }
        }
    };
    return (
        <button className={clase} onClick={() => handleClick(operation)}>
            {text}
        </button>
    );
};

export default EqualButton;
