import React from 'react';
import { apiResults } from '../testData/apiResults';
import { processListings } from '../utilities/dataUtilities';
//import './App.css';
import { Summary } from '../components/Summary/Summary';
import {UserInput} from "../components/UserInput/UserInput";

export const App = () => {
  return(
    <div id={'App'}>
      <h1 className='logo'>ZipCost</h1>
      <UserInput/>
      <div id={'Results'} className='d-flex flex-wrap'>
        { processListings(apiResults).map(zip => <Summary zip={zip}/> ) }
      </div>
    </div>
  )
};