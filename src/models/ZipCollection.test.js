// Data Models
import {ZipCollection} from "./ZipCollection";
import {Zip} from './Zip';

// Test Data
import {apiResultsMin} from "../testData/apiResultsMin";

// Utilities
import {testNumbers} from "./modelTestUtils";

// Setup
let actual = new ZipCollection(apiResultsMin.listings);
let expected = apiResultsMin.expectedCollection;

describe('ZipCollection', ()=> {

  it('has a "listings" array of Zip objects', () => {
    actual.zips.forEach(element => {
      expect(element instanceof Zip).toBe(true);
    })
  });

  it('has a "zipcodeList" array of all zipcodes', () => {
    expect(actual.zipcodeList.length).toEqual(expected.zipcodeList.length);
    expected.zipcodeList.forEach(code => {
      expect(actual.zipcodeList.includes(code)).toBe(true);
    });
  });

  it('has a "towns" array of all towns & cities', () => {
    expect(actual.towns.length).toEqual(expected.towns.length);
    expected.towns.forEach(town => {
      expect(actual.towns.includes(town)).toBe(true);
    });
  });

  it('has a "counties" array of all zipcodes', () => {
    expect(actual.counties.length).toEqual(expected.counties.length);
    expected.counties.forEach(county => {
      expect(actual.counties.includes(county)).toBe(true);
    });
  });

  testNumbers(actual, expected);
/*
  ['prices', 'sizes', 'costs'].forEach(metric => {
    ['avg', 'mdn'].forEach(measurement => {
      it(`has a correct ${measurement} ${metric} property`, () => {
        expect(actual[metric][measurement]).toEqual(expected[metric][measurement]);
      })
    })
  })

 */

});