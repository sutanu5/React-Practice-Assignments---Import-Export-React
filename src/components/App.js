import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading.js';
import InputQuery from './InputQuery.js';
import SubmitButton from './SubmitButton.js';
import SubHeading from './SubHeading.js';
const App = () => {
  return (
    <div id="main">
   
      <Heading/>
      <InputQuery />
      <SubmitButton/>
      <SubHeading/>
    </div>
  );
}

export default App;
