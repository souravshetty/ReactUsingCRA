import { useState } from "react"
function Increment(){
    const [count,setCount]=useState(0)
    return (
			<div>
				<button onChange={()=>setCount(count+1)}>Increment</button>
                <button onChange={()=>setCount(count-1)}></button>
			</div>
		);
}
export default Increment;