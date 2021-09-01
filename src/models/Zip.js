import { apiResults } from '../testData/apiResults';

export class Zip{
  constructor(zipCollector){
    this.listings = zipCollector.listings;
    this.code = zipCollector.listings[0].zipCode;
    this.amount = zipCollector.listings.length;
    this.towns = zipCollector.towns;
    this.counties = zipCollector.counties;
    this.prices = {
      avg: getAvg('price', this.listings),
      mdn: getMdn('price', this.listings)
    }
    this.sizes = {
      avg: getAvg('squareFootage', this.listings),
      mdn: getMdn('squareFootage', this.listings)
    }
    this.costs = {
      avg: this.prices.avg / this.sizes.avg,
      mdn: this.prices.mdn / this.sizes.mdn,
    }
  }
}

function getAvg(value, listingsArr){
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
function getMdn(value, listingsArr){
  let range = listingsArr.sort( (a,b) => a[value] > b[value] ? 1 : -1);
  return range[Math.floor(range.length / 2)][value];
}