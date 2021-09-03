import {apiResults, testZip} from '../testData/apiResults';
import {buildZips, calcNumbers, getAvg, getMdn} from "./modelBuildUtils";

export class Zip{
  constructor(listingCollector){
    this.listings = listingCollector.listings;
    this.code = listingCollector.listings[0].zipCode;
    this.total = listingCollector.listings.length;

    this.towns = listingCollector.towns;
    this.counties = listingCollector.counties;
    this.numbers = calcNumbers(listingCollector.numbers);
  }
}