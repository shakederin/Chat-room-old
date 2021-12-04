import { useEffect, useRef, useState } from "react";
import RadioBtn from "./RadioBtn";
import {Link} from "react-router-dom";

function Login(){

    const [userName, setuserName] = useState(null);
    const [gender, setGender] = useState(null);
    const [link, setLink] = useState("/login");

    const input = useRef(null);
    const button = useRef(null);

    useEffect(()=>{
        button.current.click();
    },[link])

    function submit(){
       if(gender===null || userName===null){
           console.log("error");
           return;
       }
       setLink("/")

    }

    return(
        <div className="container">
            <h2>Live Chat</h2>
            <input onKeyUp={()=>{setuserName(input.current.value)}} ref={input} type="text" placeholder="User Name"/>
            <form>
                <p>Select Gender</p>
                <RadioBtn setGender={setGender}  gender="Male"/>
                <RadioBtn setGender={setGender}  gender="Female"/>
                <RadioBtn setGender={setGender}  gender="Other"/>
            </form>
            <Link to={link}>
                <button ref={button} onClick={()=>{submit()}}>Log In</button>
            </Link>
        </div>
    )
}



export default Login;