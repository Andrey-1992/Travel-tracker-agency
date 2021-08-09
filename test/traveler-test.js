const chai = require('chai');
const expect = chai.expect;

import Traveler from '../src/classes/Traveler';
import Trip from '../src/classes/Trip';
import Agency from '../src/classes/Agency';
import Destination from '../src/classes/Destination';
import trips from '../src/data/trip-data';
import travelers from '../src/data/traveler-data';
import destinations from '../src/data/destination-data';

describe('Traveler', () => {
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

    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {

    expect(travelerTest).to.be.an.instanceof(Traveler);
  });

  it('should store the id of the traveler', () => {

    expect(travelerTest.id).to.be.an("number");
  });

  it('should store the name of the traveler', () => {

    expect(travelerTest.name).to.be.an('string');
  });

  it('should store the type of traveler', () => {

    expect(travelerTest.travelerType).to.be.an('string');
  });

  it('should keep track of all the trips data', () => {

    expect(travelerTest.allTripsRecord).to.be.an('array');
  });

  it('should return the first name of the current traveler', () => {

    expect(travelerTest.getFirstName()).to.be.an('string');
  });

  it('should determine what time of the day we are (Morning || Afternoon || Evening)', () => {

    expect(travelerTest.determineTimeOfDay()).to.be.an('string');
  });

  it('should return a greeting for a user', () => {

    expect(travelerTest.greetForTraveler()).to.be.an('string');
  });

  it('should organize the trips by date based on past / upcoming / pending status', () => {

    travelerTest.findTrips();

    expect(travelerTest.pastTripsRecord.length).to.be.equal(1);
    expect(travelerTest.upcomingTripsRecord.length).to.be.equal(2);
    expect(travelerTest.pendingTripsRecord.length).to.be.equal(1);
  });

  it('should calculate the total spent during this year', () => {

    travelerTest.findTrips();
    travelerTest.calculateYearTotalSpent(agencyTest);

    expect(travelerTest.yearTotalSpent).to.be.an('number');
  });

});
