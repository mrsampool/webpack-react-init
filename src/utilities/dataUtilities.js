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

export function formatHead(type, header){
  return `${type.charAt(0).toUpperCase() + type.slice(1)} ${header}`;
}
export function formatNum(num, header){
  let prefix = function(){
    if ( header === 'Price' || header === 'Cost'){
      return '$';
    }
  }();
  let suffix = function(){
    if (header === 'Price'){
      return 'k';
    } else if (header === 'Size'){
      return ' ft²';
    } else if (header === 'Cost'){
      return ' /ft²'
    }
  }();

  if (header === 'Price'){
    num /= 1000;
  }

  return `${prefix ? prefix : ''}${num.toFixed(1)}${suffix ? suffix : ''}`;
}
