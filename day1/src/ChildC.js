import React from "react";
const ChildC = ({onAction}) =>{
    const handleclick = () =>{
        onAction("This message is from child")
    }
    return (
        <div>
            <h2>ChildComponent</h2>
            <button onClick={handleclick}>Send Message to Parent</button>
        </div>
    )
}
export default ChildC

