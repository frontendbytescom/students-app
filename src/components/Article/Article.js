const Article = (props) => {
    return (
        <div className="card full-width">
            <h1
                onClick={props.titleClick}
                style={{ color: props.color }}>
                {props.title}
            </h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Article;