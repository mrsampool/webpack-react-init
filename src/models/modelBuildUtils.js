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

    towns.add(listing.city);
    counties.add(listing.county);

    if (!listingCollectors[listing.zipCode]){
      listingCollectors[listing.zipCode] = new ListingCollector(listing);
      zipcodeList.push(listing.zipCode);
    } else {
      listingCollectors[listing.zipCode].addListing(listing);
    }

  });
  Object.keys(listingCollectors).forEach( zipcode => {
    zipObjs.push( new Zip(listingCollectors[zipcode]) );
  });
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
  let listingPrices = listingNumbers.prices;
  let listingSizes = listingNumbers.sizes;
  let listingCosts = listingNumbers.costs;

  numbers.prices = {
    avg: getAvg(listingPrices),
    mdn: getMdn(listingPrices)
  }
  numbers.sizes = {
    avg: getAvg(listingSizes),
    mdn: getMdn(listingSizes)
  }
  numbers.costs = {
    avg: getAvg(listingCosts),
    mdn: getMdn(listingCosts),
  }
  return numbers;
}
export function getAvg(listingsArr){
  let listingCount = 0;
  let listingSum = 0;
  listingsArr.forEach( listing => {
    if (typeof listing === 'number'){
      listingSum += listing;
      listingCount ++;
    }
  });
  return listingSum / listingCount;
}
export function getMdn(listingsArr){
  let range = listingsArr.sort( (a,b) =>{
    return a > b ? 1 : -1;
  });
  if ( range.length % 2 ){
    let middleIndex = Math.floor(range.length / 2);
    return range[middleIndex];
  }
  let middleIndex = range.length - 2;
  let middles = [
    range[middleIndex - 1],
    range[range.length / 2],
  ];
  return getAvg(middles);
}