
export const apiResultsMin = {
  listings: [
    // Price: 390000
    // squareFootage: 1568,
    // Cost: 248.724489795918367 / sqFt
    // Zip: 80027
    // City: Louisville
    // County: Boulder County
    {
      bathrooms: 3,
      bedrooms: 3,
      price: 390000,
      rawAddress: '267 Pheasant Run, Louisville, Colorado 80027',
      squareFootage: 1568,
      county: 'Boulder County',
      propertyType: 'Condo',
      addressLine1: '267 Pheasant Run',
      city: 'Louisville',
      state: 'CO',
      zipCode: '80027',
      formattedAddress: '267 Pheasant Run, Louisville, CO 80027',
      lastSeen: '2021-07-31T07:53:26.614Z',
      listedDate: '2021-06-05T07:39:18.574Z',
      status: 'Active',
      removedDate: null,
      daysOnMarket: 57,
      createdDate: '2021-06-05T07:39:18.574Z',
      id: '267-Pheasant-Run,-Louisville,-CO-80027',
      latitude: 39.98762,
      longitude: -105.143337
    },

    // price: 466900,
    // squareFootage: 1133,
    // Cost: 412.091791703442189 / sqFt
    // Zip: 80027
    // City: Boulder
    // County: Boulder County
    {
      bathrooms: 2,
      bedrooms: 2,
      price: 466900,
      rawAddress: '1312 Snowberry Ln Unit 5-201, Louisville, Colorado 80027',
      squareFootage: 1133,
      county: 'Boulder County',
      propertyType: 'Condo',
      addressLine1: '1312 Snowberry Ln',
      addressLine2: 'Unit 5-201',
      city: 'Boulder',
      state: 'CO',
      zipCode: '80027',
      formattedAddress: '1312 Snowberry Ln, Unit 5-201, Louisville, CO 80027',
      lastSeen: '2021-07-27T09:46:55.031Z',
      listedDate: '2020-09-16T09:13:23.443Z',
      status: 'Active',
      removedDate: null,
      daysOnMarket: 315,
      createdDate: '2020-09-16T09:13:23.443Z',
      id: '1312-Snowberry-Ln,-Unit-5-201,-Louisville,-CO-80027',
      latitude: 39.991703,
      longitude: -105.126766
    },

    // price: 449900,
    // squareFootage: 1135,
    // Cost: 396.387665198237885 / sqFt
    // Zip: 80027
    // City: Denver
    // County: Colfax County
    {
      bathrooms: 2,
      bedrooms: 2,
      price: 449900,
      rawAddress: '1312 Snowberry Ln Unit 5-204, Louisville, Colorado 80027',
      squareFootage: 1135,
      county: 'Colfax County',
      propertyType: 'Condo',
      addressLine1: '1312 Snowberry Ln',
      addressLine2: 'Unit 5-204',
      city: 'Denver',
      state: 'CO',
      zipCode: '80027',
      formattedAddress: '1312 Snowberry Ln, Unit 5-204, Louisville, CO 80027',
      lastSeen: '2021-07-27T09:46:55.028Z',
      listedDate: '2020-09-16T09:13:23.443Z',
      status: 'Active',
      removedDate: null,
      daysOnMarket: 315,
      createdDate: '2020-09-16T09:13:23.443Z',
      id: '1312-Snowberry-Ln,-Unit-5-204,-Louisville,-CO-80027',
      latitude: 39.991703,
      longitude: -105.126766
    },

    // price: price: 204999,
    // squareFootage: 913
    // Cost: 224.533406352683461 / sqFt
    // Zip: 80112
    // City: Louisville
    // County: Boulder County
    {
      bathrooms: 1,
      bedrooms: 2,
      price: 204999,
      rawAddress: '1612 Cottonwood Dr Unit 11W, Louisville, Colorado 80112',
      squareFootage: 913,
      county: 'Boulder County',
      propertyType: 'Condo',
      addressLine1: '1612 Cottonwood Dr',
      addressLine2: 'Unit 11W',
      city: 'Louisville',
      state: 'CO',
      zipCode: '80112',
      formattedAddress: '1612 Cottonwood Dr, Unit 11W, Louisville, CO 80112',
      lastSeen: '2021-07-12T05:59:36.181Z',
      listedDate: '2021-06-18T05:59:09.308Z',
      status: 'Active',
      removedDate: null,
      daysOnMarket: 25,
      createdDate: '2021-06-18T05:59:09.308Z',
      id: '1612-Cottonwood-Dr,-Unit-11W,-Louisville,-CO-80112',
      latitude: 39.986338,
      longitude: -105.1388
    },
  ],
  expectedCollection: {
    zipcodeList: ['80112', '80027'],
    towns: ['Louisville','Boulder','Denver'],
    counties: ['Boulder County', 'Colfax County'],
    total: 4,
    prices: {
      mdn: 419950,
      avg: 377949.75,
    },
    sizes: {
      mdn: 1134,
      avg: 1187.25
    },
    costs: {
      mdn: 322.556077497078126,
      avg: 320.434338262570476
    },
  },
  expectedZips: {
    80112: {
      prices: {
        avg: 204999,
        mdn: 204999
      },
      sizes: {
        mdn: 913,
        avg: 913
      },
      costs: {
        mdn: 224.533406352683461,
        avg: 224.533406352683461
      },
      towns: ['Louisville'],
      counties: ['Boulder County']
    },
    80027: {
      prices: {
        mdn: 449900,
        avg: 435600
      },
      sizes: {
        mdn: 1135,
        avg: 1278.666666666666667
      },
      costs: {
        mdn: 396.387665198237885,
        avg: 352.401315565866147
      },
      towns: ['Louisville','Boulder','Denver'],
      counties: ['Boulder County', 'Colfax County']
    }
  }
}