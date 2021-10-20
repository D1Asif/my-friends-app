import { useEffect, useState } from 'react';
import './App.css';
import Friend from './components/Friend/Friend';
import Data from "./data.json";



function App() {
  const [friends, setFriends] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setFriends(Data);
  }, [])
  
  const handleAddFriend = (friend) => {
    let newFriends = [];
    newFriends = [...cart, friend];
    setCart(newFriends);
  }
  console.log(cart);

  const totalSalary = cart.reduce((total, item) => total + item.salary, 0);
  

  return (
    <div className="App">
      <h1>My Friend App</h1>
      <h3>Total Friends: {cart.length}</h3>
      <h3>Total salary of my friends: {totalSalary}</h3>
      {
        friends.map(datum => <Friend friend={datum} handleAddFriend={handleAddFriend}></Friend>)
      }
      
    </div>
  );
}

export default App;
