const Button = ({
    text,
    clase,
    firstNumber,
    setFirstNumber,
    result,
    setDisplaySecondNumber,
    setSecondNumber,
    setResult,
}) => {
    const handleClick = (text) => {
        let number;
        if (result) {
            setDisplaySecondNumber("");
            setFirstNumber("");
            setResult("");
            setSecondNumber("");
            number = firstNumber;
            number = number + text;
            setFirstNumber(number);
            console.log(firstNumber);
        } else {
            number = firstNumber;
            number = number + text;
            setFirstNumber(number);
            console.log(firstNumber);
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

export default Button;
