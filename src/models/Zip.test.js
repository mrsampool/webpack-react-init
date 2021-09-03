// Data Models
import {ZipCollection} from "./ZipCollection";
import {Zip} from './Zip';

// Test Data
import {apiResultsMin} from "../testData/apiResultsMin";

// Utilities
import {testCounties, testNumbers, testTowns} from "./modelTestUtils";

// Setup
let testZipCollection = new ZipCollection(apiResultsMin.listings);
let actual = testZipCollection.zips.find( zip => zip.code === "80027" );
let expected = apiResultsMin.expectedZips[80027];

describe('Zip', ()=> {

  it('is an instance of the Zip class', () => {
    expect(actual instanceof Zip).toBe(true);
  });

  testNumbers(actual.numbers, expected);
  testTowns(actual, expected);
  testCounties(actual, expected);

});
