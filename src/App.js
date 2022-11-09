import React from 'react';
import { useState } from 'react';
import { Child } from './Child';
import { AnotherChild } from './AnotherChild';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [isLinkClickedInChild, setIsLinkClickedInChild] = useState(false);
  const handleClick = (value) =>{
    setIsLinkClickedInChild(value);
  }
  alert(isLinkClickedInChild);
  return (
    <>
    <div>
      <h1>This is App Component - Patrent Component - Providing Links to Child and Another Child</h1>
      <Link to="/Child">Click to view our Child Component</Link>
      <br/>
      <Link to="/AnotherChild">Click to view our Another Child Component</Link>
    </div>

      <Routes>
        <Route path="Child" element={ <Child handleClick={handleClick}/> } />
        <Route path="AnotherChild" element={ <AnotherChild isLinkClickedInChild={isLinkClickedInChild} /> } />
      </Routes>
    </>
  );
}

export default App;
