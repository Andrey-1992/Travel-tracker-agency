const chai = require('chai');
const expect = chai.expect;

import Agency from '../src/classes/Agency';
import travelers from '../src/data/traveler-data';
import trips from '../src/data/trip-data';
import destinations from '../src/data/destination-data';

describe('Agency', () => {
  let coolAgency;
  beforeEach(() =>  {
    coolAgency = new Agency(travelers.travelers, trips.trips, destinations.destinations);
  });

  it('should be a function', () => {

    expect(Agency).to.be.a('function');
  });

  it('should be an instance of Agency', () => {

    expect(coolAgency).to.be.an.instanceof(Agency);
  });

  it('should store all the travelers data', () => {

    expect(coolAgency.travelersData).to.be.an('array');
  });

  it('should store all the trips data', () => {

    expect(coolAgency.tripsData).to.be.an('array');
  });

  it('should store all the destinations data', () => {

    expect(coolAgency.destinationData).to.be.an('array');
  });

});
