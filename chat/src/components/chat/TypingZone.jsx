import { useContext, useRef, useState } from "react";
import { user } from "../../App";
const axios = require("axios").default;

function TypingZone(){
    const [hidden, setHidden] = useState("hidden");
    const inputTag = useRef(null)

    const UserName = useContext(user)
 
    return(
        <div>
            <input onChange={()=>{setHidden(inputTag.current.value ? "visible" : "hidden");}}  ref={inputTag} type="text" />
            <button
                className={hidden}
                onClick={()=>{
                sendMessage(inputTag.current.value, UserName.userName);
                inputTag.current.value = null;
                }}>send</button>
        </div>
    )
}



async function sendMessage(value, userName){
    try {
            await axios.post("http://localhost:3001/chat", {"user": userName, "content": value})   
    } catch (error) {
        console.log(error);
    }
}

export default TypingZone;