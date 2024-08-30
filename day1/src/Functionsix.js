import React from "react";

const items = [
    {id:1,name:"Sunflower🌻"},
    {id:2,name:"Rose🌹"},
    {id:3,name:"Lotus🌷"},
    {id:4,name:"Lily🥀"},
    {id:5,name:"Jasmine🌺"}
]

function Functionsix(){
    return(
        <div>
            <h1>List of Flowers</h1>
            <ul>
               {items.map((item)=>(
                    <li key = {item.id}>{item.name}</li>
               ))}
            </ul>
        </div>
    )
}
export default Functionsix