const Output = ({ firstNumber, result, displaySecondNumber }) => {
    return (
        <div className="output">
            <div className="previous-operand">{displaySecondNumber}</div>
            <div className="current-operand">
                {result ? result : firstNumber}
            </div>
        </div>
    );
};

export default Output;
