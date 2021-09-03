import {ListingCollector} from "./ListingCollector";
import {Zip} from "./Zip";
import {buildZips, calcNumbers, getAvg, getMdn} from "./modelBuildUtils";

export class ZipCollection{
  constructor(rawListings) {
    this.listings = rawListings;
    this.total = rawListings.length;

    let zipData = buildZips(rawListings);
    this.zips = zipData.zipObjs;
    this.zipcodeList = zipData.zipcodeList;
    this.towns = zipData.towns;
    this.counties = zipData.counties;
    this.numbers = calcNumbers(zipData.numbers);
  }
}