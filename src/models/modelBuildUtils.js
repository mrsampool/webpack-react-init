import {ListingCollector} from "./ListingCollector";
import {Zip} from "./Zip";

export function buildZips(listings){
  let zipCollectors = {};
  let zipObjs = [];
  let zipcodeList = [];

  listings.forEach( listing => {
    if (!zipCollectors[listing.zipCode]){
      zipCollectors[listing.zipCode] = new ListingCollector(listing);
      zipcodeList.push(listing.zipCode);
    } else {
      zipCollectors[listing.zipCode].addListing(listing);
    }
  })
  Object.keys(zipCollectors).forEach( zipcode => {
    zipObjs.push( new Zip(zipCollectors[zipcode]) );
  })
  return [zipObjs, zipcodeList];
}

export function calcNumbers(obj, listings){
  let numbers = {};
  numbers.prices = {
    avg: getAvg('price', listings),
    mdn: getMdn('price', listings)
  }
  numbers.sizes = {
    avg: getAvg('squareFootage', listings),
    mdn: getMdn('squareFootage', listings)
  }
  numbers.costs = {
    avg: numbers.prices.avg / numbers.sizes.avg,
    mdn: numbers.prices.mdn / numbers.sizes.mdn,
  }
  return numbers;
}
export function getAvg(value, listingsArr){
  let listingCount = 0;
  let listingSum = 0;
  listingsArr.forEach( listing => {
    if (typeof listing[value] === 'number'){
      listingSum += listing[value];
      listingCount ++;
    }
  });
  return (listingSum / listingCount);
}
export function getMdn(value, listingsArr){
  let range = listingsArr.sort( (a,b) => a[value] > b[value] ? 1 : -1);
  return range[Math.floor(range.length / 2)][value];
}