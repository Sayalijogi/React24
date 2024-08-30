import React from "react";
import { useState } from "react";

// function Functionfour(prop){
//     console.log(prop.greet)
//     console.log(prop.greet2)

//     return (
//         <div>
//             <h1>Hello {prop.greet}</h1>
//             <h1>Hello {prop.greet2}</h1>
//         </div>
//     )
// }


//sample 2

function Functionfour({greet,greet2}){
    return (
        <div>
            <h1>Hello {greet}</h1>
            <h1>Hello {greet2}</h1>
        </div>
    )
}
export default Functionfour