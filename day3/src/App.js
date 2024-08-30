import React,{ useState } from "react";

function App2() {
    return (
        <div>
            <Counter />
        </div>
    )

}

// function Counter(){
//     const[count,setCount] = useState(0)
//     const[step,setStep] = useState(1)

//     const handleClickIncrement=()=>{
//             setCount(count+1)
//     }

//     const handleClickDecrement=()=>{
//         setCount(count-1)
// }


//     return(
//         <div>
//             {/* <button onClick={()=>setCount(count+1)}>increment</button>
//             <span>count: {count}</span>
//             <button onClick={()=>setCount(count-1)}>decrement</button> */}

//             <button onClick={handleClickIncrement}>+</button>
//             <span>count: {count}</span>
//             <button onClick={handleClickDecrement}>-</button>



//         </div>

//     )
// }






































function Counter(){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)


    return(
        <div>
            <button onClick={()=>setCount(count+1)}>➕</button>
            <span>Count: {count}</span>
            <button onClick={()=>setCount(count-1)}>➖</button>
         <div>
            
            <button onClick={()=>setStep(count+step)}>➕</button>
            <span>step: {step}</span>
            <button onClick={()=>setStep(count-step)}>➖</button>
         </div>

        </div>
     
    )
}
export default App2