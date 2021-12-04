import { createContext, useState } from "react";
import Screen from "./Screen";
import Users from "./Users";

const Context = createContext();

function Chat(){

    const [data, setData] = useState(null)

    // setData("axios")


    return(
        <Context.Provider value={data}>
            <Screen />
            <Users />
            {/* <TypingZone /> */}
        </Context.Provider >
)
}

export default Chat;