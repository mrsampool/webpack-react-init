import React from 'react';

// Sub-Components
import {UserInput} from "../components/UserInput/UserInput";
import {Results} from "../components/Results/Results";

// Style Sheet
//import './App.css';

export const App = () => {
  return(
    <div id={'App'}>
      <h1 className='logo'>ZipCost</h1>
      <UserInput/>
      <Results/>
    </div>
  )
};