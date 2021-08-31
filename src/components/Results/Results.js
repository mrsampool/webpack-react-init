//React
import React from 'react'; 

//Stylesheet
import './Results.css'
import {processListings} from "../../utilities/dataUtilities";
import {apiResults} from "../../testData/apiResults";
import {Summary} from "../Summary/Summary";

export const Results = (props) =>{
  return(
    <div id={'Results'} className='d-flex flex-wrap'>
      { processListings(apiResults).map(zip => <Summary zip={zip} key={zip.code}/> ) }
    </div>
  )
};