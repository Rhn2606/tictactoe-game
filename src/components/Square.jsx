

const Square = ({value}) => {
    return (
        <button type ="button" className="square" onClick={onBtnClick}>
            {value}
        </button>
    )
};

export default Square;   
