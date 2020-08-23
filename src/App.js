import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const products = [
    {name: "Asfon", price: "$1200" },
    {name: "AsCom", price: "$2000"},
    {name:"E-Com", price:"$3000"}
  ]
  const businessman = [
    "Al Nahian Ark",
    "Bill Gates",
    "Mark Zuckerberg",
    "Jeff Bezos",
    "Elon Musk",
    "Larry Elison",
    "Larry Page"
  ]

  return (
    <div className="App">
      <header className="App-header">

        

        <ul>
          {
            businessman.map(richestPerson => <li>{richestPerson}</li>)
          }
        </ul>

          <Counter></Counter>

          <Users></Users>


        {
          products.map(pd => <Product product={pd}></Product> )
        }
  
    






      </header>
    </div>

    

  );
        function Users(){
          const [users, setUsers] = useState([]);
          useEffect(() =>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
          }, [])
          return(
            <div>
              <h3>Dynamic Users {users.length}</h3>
             <ul>
               {
                 users.map(user => <li>{user.name} </li>)
               }
             </ul>
              </div>
          )
        }


  function Counter(){

    const [count, setCount] = useState(0);
    const handleIncrease = () => {
     const newCount = count + 1;
      setCount(newCount)
    }
    const handleDecrease = () => {
      const newCount = count - 1;
      setCount(newCount)
    }
    return(
      <div>
        <h1>Count :{count} </h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}> Decrease</button>
        </div>
    )
  }
  
  function Product(props) {
    const productStyle= {
      backgroundColor: "gray",
      margin : "10px",
      float : "left",
      padding : "10px",
      width : "400px",
      height : "400px",
      border : "1px solid red",
      borderRadius : "5px",
      color: "black",
    }
    console.log(props);
    return (
      <div style={productStyle}> 
        <h1>{props.product.name}</h1>
    <h3>Price {props.product.price}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button style={{backgroundColor:"black", color:"white", width:"100px", height:"40px", border:"1px solid black", borderRadius:"5px"}}>Buy Now!</button>
      </div>
    )
  }
}
 

export default App;
