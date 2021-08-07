const chai = require('chai');
const expect = chai.expect;

import Destination from '../src/classes/Destination';
import Trip from '../src/classes/Trip';
import Traveler from '../src/classes/Traveler';
import Agency from '../src/classes/Agency';
import trips from '../src/data/trip-data';
import travelers from '../src/data/traveler-data';
import destinations from '../src/data/destination-data';

describe('Destination', () => {
  let destinationTest, travelerTest, tripTest, agencyTest;

  beforeEach(() =>  {
    agencyTest = new Agency();

    travelers.travelers.forEach(traveler => {
      travelerTest = new Traveler(traveler)
      agencyTest.travelers.push(travelerTest);
    })

    trips.trips.forEach(trip => {
      tripTest = new Trip(trip, agencyTest)
      agencyTest.trips.push(tripTest);
    })

    destinations.destinations.forEach(destination => {
      destinationTest = new Destination(destination, agencyTest)
      agencyTest.destinations.push(destinationTest);
    })

  });

  it('should be a function', () => {

    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {

    expect(destinationTest).to.be.an.instanceof(Destination);
  });

  it('should store the id of the destination', () => {

    expect(destinationTest.id).to.be.an('number');
  });

  it('should store name of the destination', () => {

    expect(destinationTest.destination).to.be.an('string');
  });

  it('should store the estimated cost per day', () => {

    expect(destinationTest.estimatedLodgingCostPerDay).to.be.an('number');
  });

  it('should store the estimated cost per person', () => {

    expect(destinationTest.estimatedFlightCostPerPerson).to.be.an('number');
  });

  it('should store the image url', () => {

    expect(destinationTest.image).to.be.an('string');
  });

  it('should store the image alterned text', () => {

    expect(destinationTest.alt).to.be.an('string');
  });

});
