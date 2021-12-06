function Message(props){
    return(
        <div className="message">
            <div>{props.message.user}</div>
            <span>{props.message.content} </span>
            <span>{props.message.date}</span>
        </div>
    )
}

export default Message;