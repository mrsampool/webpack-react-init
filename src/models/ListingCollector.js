export class ListingCollector {
  constructor(listing){
    this.listings = [listing];
    this.towns = new Set();
    this.counties = new Set();
    this.towns.add(listing.city);
    this.counties.add(listing.county);
    this.numbers = {
      prices: [],
      sizes: [],
      costs: [],
    }
    this.numbers.prices.push(listing.price);
    this.numbers.sizes.push(listing.squareFootage);
    this.numbers.costs.push(listing.cost);
  }

  addListing(listing){
    this.listings.push(listing);
    this.towns.add(listing.city);
    this.counties.add(listing.county);
    this.numbers.prices.push(listing.price);
    this.numbers.sizes.push(listing.squareFootage);
    this.numbers.costs.push(listing.cost);
  }
}