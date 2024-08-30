

import ChildC from "./ChildC";

import React, {useState} from "react";

const ParentC = () =>{
    const [message,setMessage] = useState("Hello i am from parent")

    const handleChildAction = (childMessage) => {
        alert(`Message from child component ${childMessage}`)
    }

    return (
        <div>
            <h1>Parent component</h1>
            <ChildC onAction={handleChildAction}></ChildC>
        </div>
    );
};
export default ParentC

