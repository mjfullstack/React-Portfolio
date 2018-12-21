import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import MyAppsList from './components/MyAppsList'


function App() {
  return (
    <Wrapper>
      <Title>Portfolio List</Title>
      <MyAppsList />
    </Wrapper>
  );
}

export default App;
