const chai = require('chai');
const expect = chai.expect;

import Destination from '../src/classes/Destination';
import destinations from '../src/data/destination-data';

describe('Destination', () => {
  let coolDestination;
  beforeEach(() =>  {
    coolDestination = new Destination(destinations.destinations[1])
  });

  it('should be a function', () => {

    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {

    expect(coolDestination).to.be.an.instanceof(Destination);
  });

  it('should store the id of the destination', () => {

    expect(coolDestination.id).to.equal(2);
  });

  it('should store name of the destination', () => {

    expect(coolDestination.destination).to.equal('Stockholm, Sweden');
  });

  it('should store the estimated cost per day', () => {

    expect(coolDestination.estimatedLodgingCostPerDay).to.deep.equal(100);
  });

  it('should store the estimated cost per person', () => {

    expect(coolDestination.estimatedFlightCostPerPerson).to.deep.equal(780);
  });

  it('should store the image url', () => {

    expect(coolDestination.image).to.deep.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  });

  it('should store the image alterned text', () => {

    expect(coolDestination.alt).to.deep.equal('city with boats on the water during the day time');
  });

});
