function Message(props){
    return(
        <div>
            <div>{props.message.user}</div>
            <div>{props.message.content}</div>
            <span>{props.message.time}</span>
        </div>
    )
}

export default Message;