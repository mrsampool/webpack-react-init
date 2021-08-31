/**
 * @jest-environment jsdom
 */

// React
import React from 'react';
import {render} from '@testing-library/react';

// Components
import {App} from './App';

describe("App", () => {

  const {container} = render( <App/> );

  it('Renders without crashing', ()=>{
    //const {container} = render( <App/> );
    let element = container.querySelector('#App');
    expect(element).toBeTruthy();
  });

  ['#UserInput', '#Results'].forEach( component =>{
    //const {container} = render( <App/> );
    let App = container.querySelector('#App');

    it(`Renders ${component}`, ()=>{
      let element = App.querySelector(component);
      expect(element).toBeTruthy();
    });
  });

});
