import {Zip} from '../models/Zip';
import {ZipCollector} from '../models/ZipCollector';

export function processListings(rawListings){

  let zipCollectors = {};
  let processedZips = [];

  rawListings.forEach( listing => {
    if (!zipCollectors[listing.zipCode]){
      zipCollectors[listing.zipCode] = new ZipCollector(listing);
    } else {
      zipCollectors[listing.zipCode].addListing(listing);
    }
  })
  Object.keys(zipCollectors).forEach( zipcode => {
    processedZips.push( new Zip(zipCollectors[zipcode]) );
  })
  return processedZips;
}