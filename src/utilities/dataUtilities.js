import {Zip} from './ZipModel';

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