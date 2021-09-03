export function testNumbers(actual, expected){
  ['prices', 'sizes', 'costs'].forEach(metric => {
    ['avg', 'mdn'].forEach(measurement => {
      it(`has a correct ${measurement} ${metric} property`, () => {
        expect(actual[metric][measurement]).toEqual(expected[metric][measurement]);
      })
    })
  });
}

export function testTowns(actual, expected){
  it('has a "towns" set of all towns & cities', () => {
    expect(actual.towns.size).toEqual(expected.towns.length);
    expected.towns.forEach(town => {
      expect(actual.towns.has(town)).toBe(true);
    });
  });
}

export function testCounties(actual, expected){
  it('has a "counties" set of all zipcodes', () => {
    expect(actual.counties.size).toEqual(expected.counties.length);
    expected.counties.forEach(county => {
      expect(actual.counties.has(county)).toBe(true);
    });
  });
}