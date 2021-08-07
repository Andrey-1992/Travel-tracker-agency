class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.allTripsRecord = [];
  }
  getFirstName() {
    return this.name.split(' ')[0].toUpperCase();
  }
  
  updateTripInfo(trip) {
    this.allTripsRecord.unshift(trip);
  }
}

export default Traveler;
