const chai = require('chai');
const expect = chai.expect;

import Trip from '../src/classes/Trip';
import trips from '../src/data/trip-data';

describe('Trip', function() {
  let coolTrip;
  beforeEach(() =>  {
    coolTrip = new Trip(trips.trips[0])
  });

  it('should be a function', function() {

    expect(Trip).to.be.a('function');
  });

  it('should be an instance of User', function() {

    expect(coolTrip).to.be.an.instanceof(Trip);
  });

  it('should store the id of the user', function() {

    expect(coolTrip.id).to.equal(1);
  });

  it('should store the name of the user', function() {

    expect(coolTrip.userID).to.equal(44);
  });

  it('should store the address of the user', function() {

    expect(coolTrip.destinationID).to.equal(49);
  });

  it('should store the id of the user', function() {

    expect(coolTrip.travelers).to.equal(1);
  });

  it('should store the name of the user', function() {

    expect(coolTrip.date).to.equal('2022/09/16');
  });

  it('should store the address of the user', function() {

    expect(coolTrip.duration).to.equal(8);
  });

  it('should store the name of the user', function() {

    expect(coolTrip.status).to.equal('approved');
  });

  it('should store the address of the user', function() {

    expect(coolTrip.suggestedActivities).to.be.an('array');
  });

});
