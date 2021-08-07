const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/classes/Trip';
import trips from '../src/data/trip-data';

describe('Trip', () => {
  let coolTrip;
  beforeEach(() =>  {
    coolTrip = new Trip(trips.trips[0])
  });

  it('should be a function', () => {

    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {

    expect(coolTrip).to.be.an.instanceof(Trip);
  });

  it('should store the id of the trip', () => {

    expect(coolTrip.id).to.equal(1);
  });

  it('should store the id of the traveler', () => {

    expect(coolTrip.userID).to.equal(44);
  });

  it('should store the id of the destination', () => {

    expect(coolTrip.destinationID).to.equal(49);
  });

  it('should store how many travelers are in the trip', () => {

    expect(coolTrip.travelers).to.equal(1);
  });

  it('should store the date of the trip', () => {

    expect(coolTrip.date).to.equal('2022/09/16');
  });

  it('should store the duration of the trip', () => {

    expect(coolTrip.duration).to.equal(8);
  });

  it('should store the status of the trip', () => {

    expect(coolTrip.status).to.equal('approved');
  });

  it('should store the suggested activities for the trip', () => {

    expect(coolTrip.suggestedActivities).to.be.an('array');
  });

});
