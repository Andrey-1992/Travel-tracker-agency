class Agency {
  constructor() {
    this.travelers = [];
    this.trips =  [];
    this.destinations = [];
  }
  addPendingTrip(newTrip) {
    this.trips.push(newTrip)
  }
}

export default Agency;
