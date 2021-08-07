class Trip {
  constructor(tripInfo, agencyData) {
    this.id = tripInfo.id;
    this.userID = tripInfo.userID;
    this.destinationID = tripInfo.destinationID;
    this.travelers = tripInfo.travelers;
    this.date = tripInfo.date;
    this.duration = tripInfo.duration;
    this.status = tripInfo.status;
    this.suggestedActivities = tripInfo.suggestedActivities;
    this.matchTrip(agencyData);
  }
  matchTrip(agencyData) {
    agencyData.travelers.find((traveler) =>
    traveler.id === this.userID).updateTripInfo(this);
  }
}

export default Trip;
