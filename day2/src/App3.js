import { createRoot } from "react-dom/client";
import "./style.css";

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
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

//1
function Avatar() {
    return <img className="avatar" src="sunflower.jpg" alt="SUNFLOWER"></img>
}

//4
function Intro() {
    return (
        <div>
            <h1>SUNFLOWER</h1>
            <p>
                Sunflowers is one of the most well known flowers, it is specifically known for its ability to show movement based on the sun’s movement.  Sunflowers bloom at sunrise and keep blooming for a long time and beautifying the garden. Its flowers also give a good glow to the vase. Although the flowers are odourless, their colour is so bright that even two twigs in the vase look attractive.
            </p>
        </div>
    );
}

let skillandColor = [
    {skill:"React",color:"brown"},
    {skill:"Javascript",color:"red"},
    {skill:"Python",color:"blue"},
    {skill:"HTML",color:"orange"},
    {skill:"CSS",color:"violet"},

]

function SkillList(){
    return(
        <div className="skill-list">
            {
                skillandColor.map((el)=>(
                    <Skill skill={el.skill} color={el.color}/>
                ))
            }
            {/* <Skill skill="Javascript" color= "red"/>
            <Skill skill="Python" color= "orange"/>
            <Skill skill="HTML" color= "blue"/>
            <Skill skill="CSS" color= "violet"/>
            <Skill skill="react" color= "green"/> */}
        </div>    
    )
}

function Skill(props){
    return(
        <div className="skill" style={{backgroundColor:props.color}}>
            <span>{props.skill}</span>
        </div>
    )
}

export default App;
