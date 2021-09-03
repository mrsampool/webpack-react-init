/**
 * @jest-environment jsdom
 */

// React
import React from 'react';
import {render} from '@testing-library/react';

// Components
import {Summary} from "./Summary";

// Data & Utilities
import {formatNum} from './Summary';
import {testZip} from "../../testData/apiResults";
import {testZipCollection} from "../../testData/apiResults";

describe("Overview Summary component", () => {

  it('renders without crashing', () => {
    const {container} = render( <Summary collection={testZipCollection}/> );
    expect(container.querySelector('Summary')).toBeTruthy();
  });

  ['Price', 'Size', 'Cost',]
  .forEach( category =>{
    const {container} = render( <Summary collection={testZipCollection}/> );

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

describe("Zip Summary component", () => {

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
