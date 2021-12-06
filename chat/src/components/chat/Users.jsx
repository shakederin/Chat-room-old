import { useContext, useState } from "react";
import { user } from "../../App";

function Users(props){
    const [allUsers, setAllUsers]=useState([])
    const UserName = useContext(user)

    function updateUsersList(){
        setAllUsers(preAllUsers=>[...preAllUsers, UserName.userName])
    }

    return (
        <div></div>
        // <div>{allUsers[0]}</div>
    )
}

export default Users;