// Functions
import {processListings} from "./dataUtilities";

// Test Data
import {apiResultsMin} from "../testData/apiResults";
import {apiResultsMinExpected as expected} from "../testData/apiResults";

// Data Models
import {Zip} from "../models/Zip";

let testZips = processListings(apiResultsMin);

describe('Process Listings', ()=> {
  it('returns Zip objects', () => {
    testZips.forEach(element => {
      expect(element instanceof Zip).toBe(true);
    })
  });
  it('groups listings by zipcode', () => {
    expect(testZips.length).toBe(2);
    ['80027', '80112'].forEach(zipcode => {
      expect(testZips.some(zipObj => zipObj.code === zipcode)).toBe(true);
    })
  });
  it('Zip objects have correct price properties', () => {
    testZips.forEach(zipObj => {
      expect(zipObj.prices.avg).toEqual(expected[zipObj.code].prices.avg);
      expect(zipObj.prices.mdn).toEqual(expected[zipObj.code].prices.mdn);
    })
  });
  it('Zip objects have correct size properties', () => {
    testZips.forEach(zipObj => {
      expect(zipObj.sizes.avg).toEqual(expected[zipObj.code].sizes.avg);
      expect(zipObj.sizes.mdn).toEqual(expected[zipObj.code].sizes.mdn);
    })
  });
  it('Zip objects have correct cost properties', () => {
    testZips.forEach(zipObj => {
      expect(zipObj.costs.avg).toEqual(expected[zipObj.code].costs.avg);
      expect(zipObj.costs.mdn).toEqual(expected[zipObj.code].costs.mdn);
    })
  });
  it('Zip objects have correct cities property', () => {
    testZips.forEach(zipObj => {
      expected[zipObj.code].towns.forEach(town => {
        expect(zipObj.towns.has(town)).toBe(true);
      })
    });
  })
  it('Zip objects have correct counties property', () => {
    testZips.forEach(zipObj => {
      expected[zipObj.code].counties.forEach(county => {
        expect(zipObj.counties.has(county)).toBe(true);
      })
    });
  });
});
