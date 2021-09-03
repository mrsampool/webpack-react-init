import React from 'react';

// Sub-Components
import {UserInput} from "../components/UserInput/UserInput";
import {Results} from "../components/Results/Results";
import {ZipCollection} from "../models/ZipCollection";
import {apiResults} from "../testData/apiResults";

// Style Sheet
//import './App.css';

export const App = () => {

  const [currCollection, setCurrCollection] = React.useState( new ZipCollection(apiResults) );

  return(
    <div id={'App'}>
      <h1 className='logo'>ZipCost</h1>
      <UserInput/>
      <Results currCollection={currCollection}/>
    </div>
  )
};