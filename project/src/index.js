// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizza/focaccia.jpg",
//     soldOut: false,
// },
// {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizza/margherita.jpg",
//     soldOut: false,
// },
// {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizza/spinaci.jpg",
//     soldOut: false,
// },
// {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizza/funghi.jpg",
//     soldOut: false,
// },
// {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizza/salamino.jpg",
//     soldOut: true,
// },
// {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizza/prosciutto.jpg",
//     soldOut: false,
// },
// ];

// function App(){
//   return (
//     <div className='container'>
//       <Header></Header>
//       <Menu></Menu>
//       <Footer></Footer>
//     </div>
//   );
// }

// //Part 3
// // function Menu() {
// //   return (
// //     <div>
// //       <Pizza></Pizza>
// //       <Pizza></Pizza>
// //       <Pizza></Pizza>
// //     </div>
// //   )
// // }

// // function Menu() {

// //   let pizzas = pizzaData

// //   return (

// //     <main className='menu'>
// //       <h2>Our menu</h2>
// //       <>
// //         <p>
// //           Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
// //         </p>
// //         <ul className='pizzas'>
// //           {
// //             pizzas.map((pizza) => (
// //               <Pizza PizzaObj={pizza} key={pizza.name}></Pizza>
// //             ))
// //           }
// //         </ul>
// //       </>
// //     </main>
// //   )
// // }

// // function Pizza({PizzaObj}) {
// //   return (
// //     <li className={`pizza ${PizzaObj.soldOut}?"sold-out":" "`}>
// //       <img src={PizzaObj.photoName} alt={PizzaObj.name}></img>
// //       <div>
// //         <h3>{PizzaObj.name}</h3>
// //         <p>{PizzaObj.ingredients}</p>
// //         <span>{PizzaObj.soldOut ? "SOLD OUT" : PizzaObj.price}</span>
// //       </div>
// //     </li>
// //   );
// // }

// // //ORDER component
// // function Order({closeHour,openHour}){
// //   return (
// //     <div className='order'>
// //       <p>
// //         We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online.
// //       </p>
// //     </div>
// //   )
// // }

// function Menu() {

//   const pizzas = pizzaData;
//   const numPizza = pizzas.length

//   return (
//     //actual component : list rendering
//     <main className='menu'>
//       <ul>
//         {
//           pizzaData.map((pizza)=>(
//             <Pizza pizzaObj = {pizza}></Pizza>
//           ))
//         }
//       </ul>
//     </main>

//          // <div>
//         //     {/* <Pizza name = "Pizza Prosciutto" ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese" price = "18" /> */}
//         //     {/* <Pizza />
//         //     <Pizza />
//         //     <Pizza /> */}
//         // </div>

//   )
// }

// // part 1  
// // Defining a component 
// // Data (states and props) Logic Appearance 
// function Pizza(props) {
//   return (
//      <li>
//           <h1>{props.pizzaObj.name}</h1>
//           <p>{props.pizzaObj.ingredients}</p>
//           <p>{props.pizzaObj.price}</p>
//           <p>{props.pizzaObj.soldOut}</p>
//           <img src={props.pizzaObj.photoName}></img>
//      </li>
//   );
// }

// function Footer() {
//   // how it works behind the scence - 'JSX'
//   // return React.createElement("footer",null,"burger bar 2019-2020")
//   // how to include javascript in jsx
//   const hour = new Date().getHours()
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen)


//   function Order({closeHour,openHour}){
//       return (
//           <div className="order">
//               <p>
//                   We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online.
//               </p>
//           </div>
//       )

//   }

//   return (
//       <footer className="footer">
//           {
//               isOpen ? (
//                   <Order closeHour={closeHour} openHour={openHour} />
//               ) : (
//                   <p>We are happy to welcome you between our open hr {openHour}:00 and {closeHour}:00</p>
//               )
//           }
//       </footer>
//   )
// }

// function Header() {
//   //const style = {color:"red"}
//   let style = {}
//   return (
//       <header className="header">
//           <h1 style={style}>Fast React Pizza Co</h1>
//       </header>
//   )
// }


// // function Header(){
// //   //const style = {color:"red"}
// //   let style = {}
// //   return (
// //     <header className="header">
// //       <h1 style={style}>Fast React Pizza Co</h1>
// //     </header>
// //   )
// // }

// //Part 2 
// // function Footer(){
// //   // how it works behind the scence - 'JSX'
// //    // return React.createElement("footer",null,"burger bar 2019-2020")
// //    // how to include javascript in jsx
// //    //return <footer>{new Date().toLocaleString()}Burger Bar 2019-2020</footer>
// //    const hour = new Date().getHours()
// //    const openHour = 12;
// //    const closeHour = 22;
// //    const isOpen = hour >= openHour && hour <= closeHour;

// //    return (
// //      <footer className='footer'>
// //        {
// //          isOpen ?(
// //            <Order closeHour={closeHour} openHour={openHour}></Order>
// //          ) : (
// //            <p>We are happy to welcome you between our open hr{openHour}:00 and {closeHour}:00</p>
// //          )
// //        }
// //      </footer>
// //    )
// // }
// //Part1
// //Defining a Component
// //Data (states and props) Logic Apperance
// // function Pizza(){
// //   return (
// //     <div>
// //       <img src='pizza/funghi.jpg' alt='funghi-pizza'></img>
// //       <h2>Pizza funghi</h2>
// //       <p>Tomato Spinach and Cheese</p>
// //     </div>
// //   );
// // }

// //Part 2
// // function Footer(){
// //    // how it works behind the scence - 'JSX'
// //     // return React.createElement("footer",null,"burger bar 2019-2020")
// //     // how to include javascript in jsx
// //     //return <footer>{new Date().toLocaleString()}Burger Bar 2019-2020</footer>
// //     const hour = new Date().getHours()+5
// //     const openHour = 12;
// //     const closeHour = 22;
// //     const isOpen = hour >= openHour && hour <= closeHour;
// //     console.log(isOpen)

// //     function Order({closeHour,openHour}){
// //       return (
// //         <div className='order'>
// //           <p>
// //             We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online. 
// //           </p>
// //         </div>
// //       )
// //     }

// //     return (
// //       <footer className='footer'>
// //         {
// //           isOpen ?(
// //             <Order closeHour={closeHour} openHour={openHour}></Order>
// //           ) : (
// //             <p>We are happy to welcome you between our open hr{openHour}:00 and {closeHour}:00</p>
// //           )
// //         }
// //       </footer>
// //     )
// // }

// // function Header(){
// //   return <h1>Welcome to the Pizza club</h1>
// // }

// // function Header(){
// //   //const style = {color:"red"}
// //   let style = {}
// //   return (
// //     <header className="header">
// //       <h1 style={style}>Fast React Pizza Co</h1>
// //     </header>
// //   )
// // }


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// npx create-react-app my-app
// cd my-app
// npm start

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizza/focaccia.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizza/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizza/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizza/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizza/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizza/prosciutto.jpg",
      soldOut: false,
    },
  ];




console.log('day2')

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

// Part 3

function Menu() {


    const pizzas =  pizzaData;
    const numPizza = pizzas.length

    return (
        // actual component  : list rendering
        <main className="menu">
            <ul>    
                {
                  pizzas.map((pizza)=>(
                    <Pizza pizzaObj = {pizza}/>
                  ))  
                }
            </ul>
        </main>

        // <div>
        //     {/* <Pizza name = "Pizza Prosciutto" ingredients = "Tomato, mozarella, ham, aragula, and burrata cheese" price = "18" /> */}
        //     {/* <Pizza />
        //     <Pizza />
        //     <Pizza /> */}
        // </div>
    )
}
// part 1  
// Defining a component 
// Data (states and props) Logic Appearance 
function Pizza(props) {
    return (
       <li>
            <h1>{props.pizzaObj.name}</h1>
            <p>{props.pizzaObj.ingredients}</p>
            <p>{props.pizzaObj.price}</p>
            <p>{props.pizzaObj.soldOut}</p>
            <img src={props.pizzaObj.photoName}></img>
       </li>
    );
}

// part 2
function Footer() {
    // how it works behind the scence - 'JSX'
    // return React.createElement("footer",null,"burger bar 2019-2020")
    // how to include javascript in jsx
    const hour = new Date().getHours()
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)


    function Order({closeHour,openHour}){
        return (
            <div className="order">
                <p>
                    We are open from {openHour}:00 to {closeHour}:00 Come visit us or order online.
                </p>
            </div>
        )

    }

    return (
        <footer className="footer">
            {
                isOpen ? (
                    <Order closeHour={closeHour} openHour={openHour} />
                ) : (
                    <p>We are happy to welcome you between our open hr {openHour}:00 and {closeHour}:00</p>
                )
            }
        </footer>
    )







}


function Header() {
    //const style = {color:"red"}
    let style = {}
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co</h1>
        </header>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);

