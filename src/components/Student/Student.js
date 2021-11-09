const Student = (props) => {
    return (
        <div className="student">
            <h1 style={{ color: props.color }}>
                {props.firstName} {props.lastName}
            </h1>
            <h3><strong>Course:</strong> {props.course}</h3>
            <p><strong>Email:</strong> {props.email}</p>
        </div>
    )
}

export default Student;