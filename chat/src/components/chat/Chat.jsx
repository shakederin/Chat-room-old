import { createContext, useEffect, useState } from "react";
import Screen from "./Screen";
import TypingZone from "./TypingZone";
import Users from "./Users";


export const Context = createContext();


function Chat(){
    
    const [data, setData] = useState([]);
    const [listening, setListening] = useState(false);

    useEffect(()=>{
        if(!listening){
            let source  = new EventSource("http://localhost:3001/chat");
            source.onmessage = e =>{
                console.log(data, "data");
                setData(preData =>[...preData, e.data])
            }
            setListening(true);
            console.log(data);
        }
    }, [listening, data])
    


    return(
        <Context.Provider value={data}>
            <Screen data={data}/>
            <Users />
            <TypingZone />
        </Context.Provider >
)
}

export default Chat;