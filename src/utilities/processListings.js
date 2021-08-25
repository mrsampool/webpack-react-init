import {Zip} from './ZipModel';

function processZip(zipData){

}

export function processListings(rawListings){

  let listingZips = {};
  let processedZips = [];

  rawListings.forEach( listing => {
    if (!listingZips[listing.zipCode]){
      listingZips[listing.zipCode] = [listing];
    } else {
      listingZips[listing.zipCode].push(listing);
    }
  })

  Object.keys(listingZips).forEach( zipcode => {

    processedZips.push( new Zip(listingZips[zipcode]) );
  })

  return processedZips;
}