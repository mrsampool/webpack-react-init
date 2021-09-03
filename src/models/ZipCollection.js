import {ListingCollector} from "./ListingCollector";
import {Zip} from "./Zip";
import {buildZips, calcNumbers, getAvg, getMdn} from "./modelBuildUtils";

export class ZipCollection{
  constructor(rawListings) {
    this.listings = rawListings;
    this.total = rawListings.length;

    let zipData = buildZips(rawListings);
    this.zips = zipData[0];
    this.zipcodeList = zipData[1];

    this.numbers = calcNumbers(this, this.listings);
  }
}