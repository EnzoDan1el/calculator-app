const SpecialButton = ({
    text,
    clase,
    setDisplaySecondNumber,
    setFirstNumber,
    setResult,
    setSecondNumber,
    firstNumber,
    result,
}) => {
    const handleClick = (text) => {
        let number;
        if (text === "AC") {
            setDisplaySecondNumber("");
            setFirstNumber("");
            setResult("");
            setSecondNumber("");
        } else if (text === "DEL") {
            if (result) {
                number = result.toString();
                number = number.slice(0, -1);
                setResult(number);
            } else {
                number = firstNumber.slice(0, -1);
                setFirstNumber(number);
            }
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

export default SpecialButton;
