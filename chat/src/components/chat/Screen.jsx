import { useState } from "react"
import Message from "./Message";

function Screen(props){

    const [messageArray, setMessageArray] = useState([])

    function newMessage(){
        //get from api
        // setMessageArray(data)
    }

    function createMessage(){

        const allMessage = messageArray.map((message)=>{
          return <Message key={message.time} message={message}/>
            })
            return allMessage;
    }


    return(
        <div className="container">
           {createMessage()}
        </div>
    )
}

const message1= [{
    "user" : "shelly",
    "content": "haha",
    "time" : 12
},{
    "user" : "shselly",
    "content": "hasha",
    "time" : 122
}
]

export default Screen;