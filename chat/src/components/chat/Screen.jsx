import { useContext, useEffect, useState } from "react"
import Message from "./Message";
import {Context} from "./Chat"

function Screen(){

    const data = useContext(Context);


    function createMessage(data){
        console.table(data[0]);
        const allMessage = data.map((message)=>{ 
            const objMessage =JSON.parse(message)
            return <Message key={objMessage.date} message={objMessage}/>
            })
            return allMessage;
    }


    return(
        <div className="container">
           {createMessage(data)}
        </div>
    )
}

export default Screen;