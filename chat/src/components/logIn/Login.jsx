import { useContext, useEffect, useRef, useState } from "react";
import RadioBtn from "./RadioBtn";
import {Link} from "react-router-dom";
import { user } from "../../App";


function Login(props){

    const [link, setLink] = useState("/login");

    const UserName = useContext(user)

    const input = useRef(null);
    const button = useRef(null);

    useEffect(()=>{
        if(link==="/login"){
        button.current.click();
        }
    },[link])

    function submit(){
        if(input.current.value===null){
            console.log("error");
            return;
        }
        UserName.setUserName(input.current.value)
        setLink("/chat")
    }

    return(
        <div className="container">
            <h2>Live Chat</h2>
            <input  ref={input} type="text" placeholder="User Name"/>
            {/* <form>
                <p>Select Gender</p>
                <RadioBtn setGender={setGender}  gender="Male"/>
                <RadioBtn setGender={setGender}  gender="Female"/>
                <RadioBtn setGender={setGender}  gender="Other"/>
            </form> */}
            <Link to={link}>
                <button ref={button} onClick={()=>{submit()}}>Log In</button>
            </Link>
        </div>
    )
}



export default Login;