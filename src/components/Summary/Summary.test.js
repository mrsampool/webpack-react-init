/**
 * @jest-environment jsdom
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

// Components
import {Summary} from "./Summary";

// Utilities
import {expectElementsByClassName} from "../../utilities/testUtilities";


// Set Up / Tear Down
let container;
beforeEach(() => {
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
  }
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Summary zip={testZip}/>,
      container
    );
  });
});
afterEach(() => {
  if (container) {
    /*
    document.body.removeChild(container);
    container = null;
     */
  }
});

describe("Summary component", () => {
  it('renders without crashing', () => {});

  // PRICE //
  // Avg
  it('displays an average price', () => {
    expectElementsByClassName('avgPrice');
  });
  it('average price is correct', () => {});
  // Mdn
  it('displays a median price', () => {
    expectElementsByClassName('mdnPrice');
  });
  it('median price is correct', () => {});

  // SIZE //
  // Avg
  it('displays an average size', () => {
    expectElementsByClassName('avgSize');
  });
  it('average size is correct', () => {
  });
  // Mdn
  it('displays a median size', () => {
    expectElementsByClassName('mdnSize');
  });
  it('median size is correct', () => {});

  // COST //
  // Avg
  it('displays an average cost', () => {
    expectElementsByClassName('avgCost');
  });
  it('average cost is correct', () => {});
  //Mdn
  it('displays a median cost', () => {
    expectElementsByClassName('mdnCost');
  });
  it('median cost is correct', () => {});
});



