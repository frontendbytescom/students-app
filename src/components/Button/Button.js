const Button = (props) => {
    return (
        <button
            onClick={props.click}
            className="toggle-color"
        >
            {props.text}
        </button>
    )
}

export default Button;