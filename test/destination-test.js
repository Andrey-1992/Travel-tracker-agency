const chai = require('chai');
const expect = chai.expect;

import Destination from '../src/classes/Destination';

describe('Destination', function() {
  let coolDestination;
  beforeEach(() =>  {
    coolDestination = new Destination({
      'id': 2,
      'destination': 'Stockholm, Sweden',
      'estimatedLodgingCostPerDay': 100,
      'estimatedFlightCostPerPerson': 780,
      'image': 'https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      'alt': 'city with boats on the water during the day time'
    });
  });

  it('should be a function', function() {

    expect(Destination).to.be.a('function');
  });

  it('should be an instance of User', function() {

    expect(coolDestination).to.be.an.instanceof(Destination);
  });

  it('should store the id of the user', function() {

    expect(coolDestination.id).to.equal(2);
  });

  it('should store the name of the user', function() {

    expect(coolDestination.destination).to.equal('Stockholm, Sweden');
  });

  it('should store the address of the user', function() {

    expect(coolDestination.estimatedLodgingCostPerDay).to.deep.equal(100);
  });

  it('should store the email of the user', function() {

    expect(coolDestination.estimatedFlightCostPerPerson).to.deep.equal(780);
  });

  it('should store the stride of the legth step', function() {

    expect(coolDestination.image).to.deep.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  });

  it('should store the daily step goals from the user', function() {

    expect(coolDestination.alt).to.deep.equal('city with boats on the water during the day time');
  });

});
