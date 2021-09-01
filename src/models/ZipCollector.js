export class ZipCollector{
  constructor(listing){
    this.listings = [listing];
    this.towns = new Set();
    this.counties = new Set();
    this.towns.add(listing.city);
    this.counties.add(listing.county);
  }

  addListing(listing){
    this.listings.push(listing);
    this.towns.add(listing.city);
    this.counties.add(listing.county);
  }
}