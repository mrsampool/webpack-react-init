// Data Models
import {ZipCollection} from "./ZipCollection";
import {Zip} from './Zip';

// Test Data
import {apiResultsMin} from "../testData/apiResultsMin";

// Utilities
import {testNumbers, testTowns, testCounties} from "./modelTestUtils";

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

  testNumbers(actual.numbers, expected);
  testTowns(actual, expected);
  testCounties(actual, expected);

});