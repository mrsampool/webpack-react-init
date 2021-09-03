import {ListingCollector} from "./ListingCollector";
import {Zip} from "./Zip";

export function buildZips(listings){
  let listingCollectors = {};
  let zipObjs = [];
  let zipcodeList = [];
  let towns = new Set();
  let counties = new Set();
  let numbers = {
    prices: [],
    sizes: [],
    costs: [],
  }

  listings.forEach( listing => {

    listing.cost = listing.price / listing.squareFootage;
    numbers.prices.push(listing.price);
    numbers.sizes.push(listing.squareFootage);
    numbers.costs.push(listing.cost);

    if (!listingCollectors[listing.zipCode]){
      listingCollectors[listing.zipCode] = new ListingCollector(listing);
      zipcodeList.push(listing.zipCode);
    } else {
      listingCollectors[listing.zipCode].addListing(listing);
    }
  })
  Object.keys(listingCollectors).forEach( zipcode => {
    let listingCollector = listingCollectors[zipcode];
    listingCollector.towns.forEach( town =>{
      towns.add(town);
    });
    listingCollector.counties.forEach( county =>{
      counties.add(county);
    });
    zipObjs.push( new Zip(listingCollector) );
  })
  return {
    zipObjs,
    zipcodeList,
    towns,
    counties,
    numbers,
  };
}

export function calcNumbers(listingNumbers){
  let numbers = {};
  let listingPrices = listingNumbers.price;
  let listingSizes = listingNumbers.size;
  let listingCosts = listingNumbers.cost;

  numbers.prices = {
    avg: getAvg('price', listingPrices),
    mdn: getMdn('price', listingPrices)
  }
  numbers.sizes = {
    avg: getAvg('squareFootage', listingSizes),
    mdn: getMdn('squareFootage', listingSizes)
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