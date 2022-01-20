const OperationButton = ({
    text,
    clase,
    setOperation,
    setSecondNumber,
    setFirstNumber,
    firstNumber,
    setDisplaySecondNumber,
}) => {
    const handleClick = (text) => {
        let number;
        switch (text) {
            case "+":
                setSecondNumber(firstNumber);
                setOperation("suma");
                number = firstNumber;
                number = number + " " + text;
                setDisplaySecondNumber(number);
                setFirstNumber("");
                console.log(firstNumber);
                console.log(number);
                break;
            case "-":
                setSecondNumber(firstNumber);
                setOperation("resta");
                number = firstNumber;
                number = number + " " + text;
                setDisplaySecondNumber(number);
                setFirstNumber("");
                break;
            case "*":
                setSecondNumber(firstNumber);
                setOperation("multiplicacion");
                number = firstNumber;
                number = number + " " + text;
                setDisplaySecondNumber(number);
                setFirstNumber("");
                break;
            case "÷":
                setSecondNumber(firstNumber);
                setOperation("division");
                number = firstNumber;
                number = number + " " + text;
                setDisplaySecondNumber(number);
                setFirstNumber("");
                break;
        }
    };

    return (
        <button
            className={clase ? clase : null}
            onClick={() => handleClick(text)}
        >
            {text}
        </button>
    );
};

export default OperationButton;
