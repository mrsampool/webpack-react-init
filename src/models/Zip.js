import {apiResults, testZip} from '../testData/apiResults';
import {buildZips, calcNumbers, getAvg, getMdn} from "./modelBuildUtils";

export class Zip{
  constructor(zipCollector){
    this.listings = zipCollector.listings;
    this.code = zipCollector.listings[0].zipCode;
    this.amount = zipCollector.listings.length;
    this.towns = zipCollector.towns;
    this.counties = zipCollector.counties;
    this.numbers = calcNumbers(this, this.listings);
  }
}