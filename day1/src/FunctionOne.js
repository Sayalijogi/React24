//Short circuit 
import React,{useState} from "react";

const Functionone = () =>{

    const [isLoggedIn,setLoggedIn] = useState(false)

    return(
        <div>
            <h1>Welcome to our Website !</h1>
            {isLoggedIn && <p>You are Logged in !</p>}
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout':'Login In'}
            </button>
        </div>
    )
}
export default Functionone;