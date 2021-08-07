class Destination {
  constructor(destinationInfo, agencyData) {
    this.id = destinationInfo.id;
    this.destination = destinationInfo.destination;
    this.estimatedLodgingCostPerDay = destinationInfo.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = destinationInfo.estimatedFlightCostPerPerson;
    this.image = destinationInfo.image;
    this.alt = destinationInfo.alt;
  }
  matchDestination(agencyData) {
    agencyData.travelers.find((traveler) =>
    traveler.id === this.userID).updateTripInfo(this);
  }
}

export default Destination;
