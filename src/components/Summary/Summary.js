//React
import React from 'react';

//Stylesheet
//import './Summary.css';

// TODO: Implement Overview capability

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

//Utilities
export function formatHead(type, header){
  return `${type.charAt(0).toUpperCase() + type.slice(1)} ${header}`;
}
export function formatNum(num, header){
  let prefix = function(){
    if ( header === 'Price' || header === 'Cost'){
      return '$';
    }
  }();
  let suffix = function(){
    if (header === 'Price'){
      return 'k';
    } else if (header === 'Size'){
      return ' ft²';
    } else if (header === 'Cost'){
      return ' /ft²'
    }
  }();

  if (header === 'Price'){
    num /= 1000;
  }

  return `${prefix ? prefix : ''}${num.toFixed(1)}${suffix ? suffix : ''}`;
}
