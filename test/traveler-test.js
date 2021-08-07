const chai = require('chai');
const expect = chai.expect;

import Traveler from '../src/classes/Traveler';
import travelers from '../src/data/traveler-data';

describe('Traveler', function() {
  let coolTraveler;
  beforeEach(() =>  {
    coolTraveler = new Traveler(travelers.travelers[1])
  });

  it('should be a function', function() {

    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of User', function() {

    expect(coolTraveler).to.be.an.instanceof(Traveler);
  });

  it('should store the id of the user', function() {

    expect(coolTraveler.id).to.equal(2);
  });

  it('should store the name of the user', function() {

    expect(coolTraveler.name).to.equal('Rachael Vaughten');
  });

  it('should store the address of the user', function() {

    expect(coolTraveler.travelerType).to.be.an('string');
  });

});
