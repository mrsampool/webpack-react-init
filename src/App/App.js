import React from 'react';
import { testData } from '../../testData';
import { processListings } from '../utilities/processListings';
import './App.css';
import { Summary } from '../components/Summary/Summary';

export const App = () => {
  return(
    <div>
      <h1 className='logo'>ZipCost</h1>
      <div className='d-flex flex-wrap'>
        { processListings(testData).map( zip => <Summary zip={zip}/> ) }
      </div>
    </div>
  )
};