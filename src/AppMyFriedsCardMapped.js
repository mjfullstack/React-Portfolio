import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
// ALTERNATE NON-ES6 syntax for TWO items combined ==> imgAlt={item.id+" : "+item.name} 
// ES5 ==> { friends.map(function (item, idx) {
// REACT wants a unique index named "key"
// map always returns an array and REACT knows what to do with it!
// ES6 WITH return ==> { friends.map( (item, idx) => {
//          return <FriendCard name={item.name} 


function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      { friends.map( (item, idx) => (
         <FriendCard name={item.name} 
            key={item.id}
            occupation={item.occupation}
            location={item.location}
            email={item.email}
            imgSrc={item.image} 
            imgAlt={`${item.id}:${item.name}`} 
          /> 
      ))}
    </Wrapper>
  );
}

export default App;
