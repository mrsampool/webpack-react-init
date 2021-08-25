// React
import React from 'react';
import ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';

// Components
import App from './App';

// Utilities
import {expectElementById} from "../utilities/testUtilities";

// Set Up / Tear Down
let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <App/>,
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

describe("App", () => {
  it('renders without crashing', () => {});
  it('returns a UserInput component', () => {
    expectElementById('userInput');
  });
  it('returns a Results component', () => {
    expectElementById('results');
  });
});



describe("Overview component", () => {
  it('renders without crashing', () => {});

  // PRICE //
  // Avg
  it('displays an average price', () => {
    expectElementById('avgPrice');
  });
  it('average price is correct', () => {});
  // Mdn
  it('displays a median price', () => {
    expectElementById('mdnPrice');
  });
  it('median price is correct', () => {});

  // SIZE //
  // Avg
  it('displays an average size', () => {
    expectElementById('avgSize');
  });
  it('average size is correct', () => {
  });
  // Mdn
  it('displays a median size', () => {
    expectElementById('mdnSize');
  });
  it('median size is correct', () => {});

  // COST //
  // Avg
  it('displays an average cost', () => {
    expectElementById('avgCost');
  });
  it('average cost is correct', () => {});
  //Mdn
  it('displays a median cost', () => {
    expectElementById('mdnCost');
  });
  it('median cost is correct', () => {});
});



