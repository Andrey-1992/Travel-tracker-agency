const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/classes/Trip';
import Traveler from '../src/classes/Traveler';
import Agency from '../src/classes/Agency';
import trips from '../src/data/trip-data';
import travelers from '../src/data/traveler-data';
import destinations from '../src/data/destination-data';

describe('Trip', () => {
  let travelerTest, tripTest, agencyTest;
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
  });

  it('should be a function', () => {

    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {

    expect(tripTest).to.be.an.instanceof(Trip);
  });

  it('should store the id of the trip', () => {

    expect(tripTest.id).to.be.an('number');
  });

  it('should store the id of the traveler', () => {

    expect(tripTest.userID).to.be.an('number');
  });

  it('should store the id of the destination', () => {

    expect(tripTest.destinationID).to.be.an('number');
  });

  it('should store how many travelers are in the trip', () => {

    expect(tripTest.travelers).to.be.an('number');
  });

  it('should store the date of the trip', () => {

    expect(tripTest.date).to.be.an('string');
  });

  it('should store the duration of the trip', () => {

    expect(tripTest.duration).to.be.an('number');
  });

  it('should store the status of the trip', () => {

    expect(tripTest.status).to.be.an('string');
  });

  it('should store the suggested activities for the trip', () => {

    expect(tripTest.suggestedActivities).to.be.an('array');
  });

});
