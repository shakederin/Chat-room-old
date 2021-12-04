import { useRef } from "react";

function RadioBtn(props){
    const gender = useRef(null)
    return(
        <div>
            <input ref={gender} onClick={()=>{props.setGender(gender.current.value);}} type="radio" id={props.gender} value={props.gender} name="Gender" />
            <label for={props.gender}>{props.gender}</label>
        </div>
    )
}

export default RadioBtn;