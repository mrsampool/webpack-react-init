/**
 * @jest-environment jsdom
 */

// React
import React from 'react';
import {render} from '@testing-library/react';

// Components
import {Summary} from "./Summary";

//Utilities
import {formatNum} from "../../utilities/dataUtilities";

let testZip = {
  code: '80027',
  amount: 23,
  prices: {
    avg: 400000,
    mdn: 450000
  },
  sizes: {
    avg: 1200,
    mdn: 1700
  },
  costs: {
    avg: 333,
    mdn: 375
  }
};

describe("Summary component", () => {

  it('renders without crashing', () => {});

  ['Price', 'Size', 'Cost',]
  .forEach( category =>{
    const {container} = render( <Summary zip={testZip}/> );

    ['.avg', '.mdn'].forEach( value =>{

      let selector = value + category;
      let element = container.querySelector(selector);

      it(`displays ${selector}`, ()=>{
        expect(element).toBeTruthy();
      });

      it(`${selector} contains correct number`, ()=>{
        let actual = element.querySelector('.num').textContent;
        let expectedNum = testZip[category.toLowerCase() + 's'][value.slice(1)];
        let expectedFormatted = formatNum(expectedNum, category);

        expect(actual).toEqual(expectedFormatted);
      });
    })
  });
});
