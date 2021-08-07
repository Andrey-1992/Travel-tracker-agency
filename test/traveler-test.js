const chai = require('chai');
const expect = chai.expect;

import Traveler from '../src/classes/Traveler';
import Trip from '../src/classes/Trip';
import Agency from '../src/classes/Agency';
import trips from '../src/data/trip-data';
import travelers from '../src/data/traveler-data';
import destinations from '../src/data/destination-data';

describe('Traveler', () => {
  let coolTraveler1, coolTraveler2, coolTraveler3, travelerTest, tripTest, agencyTest;
  beforeEach(() =>  {
    agencyTest = new Agency();
    // coolTraveler1 = new Traveler(travelers.travelers[0]);
    // agencyTest.travelers.push(coolTraveler1);
    // coolTraveler2 = new Traveler(travelers.travelers[1]);
    // agencyTest.travelers.push(coolTraveler2);
    // coolTraveler3 = new Traveler(travelers.travelers[2]);
    // agencyTest.travelers.push(coolTraveler3);


    travelers.travelers.forEach(traveler => {
      travelerTest = new Traveler(traveler)
      agencyTest.travelers.push(travelerTest);
    })

    trips.trips.forEach(trip => {
      tripTest = new Trip(trip, agencyTest)
      agencyTest.trips.push(tripTest);
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

  it('should organize the trips by date based on past / upcoming / pending status', () => {

    travelerTest.findTrips();

    expect(travelerTest.pastTripsRecord.length).to.be.equal(1);
    expect(travelerTest.upcomingTripsRecord.length).to.be.equal(2);
    expect(travelerTest.pendingTripsRecord.length).to.be.equal(1);
  });

});
