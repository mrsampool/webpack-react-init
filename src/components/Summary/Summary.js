//React
import React from 'react';

//Utilities
import {formatHead, formatNum } from "../../utilities/dataUtilities";

//Stylesheet
//import './Summary.css';

export const Summary = (props) =>{
  let {code, amount, prices, sizes, costs} = props.zip;
  return(
    <div className='Summary d-flex flex-column justify-content-around'>
      <div className='d-flex justify-content-between'>
        <span className='codeHeader'>{code}</span>
        <span> {amount} Listing{amount > 1 ? 's' : ''}</span>
      </div>
      <SummaryRow header='Price' nums={prices}/>
      <SummaryRow header='Size' nums={sizes}/>
      <SummaryRow header='Cost' nums={costs}/>
    </div>
  )
};

export const SummaryRow = (props) => {
  let {header, nums} = props;
  return(
    <div className="SummaryRow d-flex">
      <SummaryCell header={header} type={'avg'} nums={nums}/>
      <SummaryCell header={header} type={'mdn'} nums={nums}/>
    </div>
  )
}

export const SummaryCell = (props) => {

  let {header, type, nums} = props;
  let num = nums[type];
  return(
    <span className={`${type}${header} SummaryCell d-flex flex-column align-items-center`}>
      <span className='head'>{formatHead(type, header)}</span>
      <span className='num'>{formatNum(num, header)}</span>
    </span>
  )
}