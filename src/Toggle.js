import { useState } from "react";

function Toggle(){
    const [visible,setVisible]=useState(true);
    return(
        <div>
            <button onChange={()=>setVisible(!visible)}>Toggle</button>
            {visible&&<p>Toggle On</p>}
        </div>
    )
}
export default Toggle;