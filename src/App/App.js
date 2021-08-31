import React from 'react';
import { apiResults } from '../testData/apiResults';
import { processListings } from '../utilities/dataUtilities';
//import './App.css';
import { Summary } from '../components/Summary/Summary';

export const App = () => {
  return(
    <div>
      <h1 className='logo'>ZipCost</h1>
      <div className='d-flex flex-wrap'>
        { processListings(apiResults).map(zip => <Summary zip={zip}/> ) }
      </div>
    </div>
  )
};