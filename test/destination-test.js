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
  let coolDestination;
  // let destinationTest, travelerTest, tripTest, agencyTest;
  beforeEach(() =>  {
    coolDestination = new Destination(destinations.destinations[1])
    //
    // agencyTest = new Agency();
    //
    // travelers.travelers.forEach(traveler => {
    //   travelerTest = new Traveler(traveler)
    //   agencyTest.travelers.push(travelerTest);
    //   console.log(agencyTest.travelers)
    // })
    //
    // trips.trips.forEach(trip => {
    //   tripTest = new Trip(trip, agencyTest)
    //   agencyTest.trips.push(tripTest);
    // })
    //
    // destinations.destinations.forEach(destination => {
    //   destinationTest = new Trip(destination, agencyTest)
    //   agencyTest.destinations.push(tripTest);
    // })

  });

  it('should be a function', () => {

    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {

    expect(coolDestination).to.be.an.instanceof(Destination);
  });

  it('should store the id of the destination', () => {

    expect(coolDestination.id).to.be.an('number');
  });

  it('should store name of the destination', () => {

    expect(coolDestination.destination).to.be.an('string');
  });

  it('should store the estimated cost per day', () => {

    expect(coolDestination.estimatedLodgingCostPerDay).to.be.an('number');
  });

  it('should store the estimated cost per person', () => {

    expect(coolDestination.estimatedFlightCostPerPerson).to.be.an('number');
  });

  it('should store the image url', () => {

    expect(coolDestination.image).to.be.an('string');
  });

  it('should store the image alterned text', () => {

    expect(coolDestination.alt).to.be.an('string');
  });

});
