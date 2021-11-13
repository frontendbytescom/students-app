const ToggleColorButton = (props) => {
    return (
        <button
            onClick={props.click}
            className="toggle-color"
        >
            Toggle Color
        </button>
    )
}

export default ToggleColorButton;