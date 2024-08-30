import { createRoot } from "react-dom/client";
import './style.css';

//3
function App() {
    return (
        <div>
            <Card></Card>
        </div>
    )
}

//2
function Card() {
    return (
        <div className="card">
            <Avatar></Avatar>
        <div className="data">
            <Intro></Intro>
            <SkillList></SkillList>
        </div>
        </div>
    );
}


//1
function Avatar() {
    return <img className="avatar" src="rose.jpg" alt="ROSE"></img>
}

//4
function Intro() {
    return (
        <div>
            <h1>ROSE</h1>
            <p>
                Red roses are the most popular type of rose. The red rose has been the symbol of love and passion for centuries.
                Red roses are native to Asia, Europe, and North America, and have been cultivated for thousands of years.
                The color red is associated with strong emotions such as love, passion, and desire, which is why red roses are often given as a romantic gesture.
                Red roses are high in vitamin C, which is believed to boost the immune system and promote healthy skin.
            </p>
        </div>
    );
}

let skillandColor = [
    {skill:"react",color:"green"},
    {skill:"javascript",color:"red"},
    {skill:"python",color:"blue"},
    {skill:"css",color:"orange"}
]

// function SkillList(){
//     return(
//         <div className="skill-list">
//             {
//                 skillandColor.map((el)=>(
//                     <Skill Skill ={el.skill} color={el.color}/>
//                 ))
//             }
//             <Skill skill="React" color="red"/>
//             <Skill skill="Javascript" color="green"/>
//             <Skill skill="HTML" color="pink"/>
//             <Skill skill="CSS" color="orange"/>
//             <Skill skill="SQL" color="blue"/>
//         </div>
//     )
// }

// function Skill(props){
//     return(
//         <div className="skill" style={{backgroundColor:props.color}}>
//             <span>{props.skill}</span>
//         </div>
//     )
// }

function SkillList(){
    return(
        <div className="skill-list">
            {
                skillandColor.map((el)=>(
                    <Skill skill={el.skill} color={el.color}/>
                ))
            }
            {/* <Skill skill="React" color="red"/>
            <Skill skill="Javascript" color="green"/>
            <Skill skill="HTML" color="pink"/>
            <Skill skill="CSS" color="orange"/>
            <Skill skill="SQL" color="blue"/> */}
        </div>
    );
}

function Skill(props){
    return(
        <div className="skill" style={{backgroundColor:props.color}}>
            <span>{props.skill}</span>
        </div>
    );
}

export default App
