//React
import React from 'react'; 

// Data Models
import {ZipCollection} from "../../models/ZipCollection";

//Sub-Components
import {Summary} from "../Summary/Summary";

// Sample Data
import {apiResults} from "../../testData/apiResults";

//Stylesheet
import './Results.css'

let zipCollection = new ZipCollection(apiResults);

export const Results = (props) =>{
  return(
    // TODO: Add Overview Summary
    <div id={'Results'} className='d-flex flex-wrap'>
      <Summary collection={props.currCollection}/>
      { zipCollection.zips.map(zip => <Summary zip={zip} key={zip.code}/> ) }
    </div>
  )
};