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
    let tripInfo = this;
    // maybe this variable is not nessesary and in the stament coulb be used only this.userID, and still passing "this" as an argument for the updateTripInfo() that belongs to the traveler class.
    agencyData.travelers.find((traveler) =>
    traveler.id === tripInfo.userID).updateTripInfo(this);
  }
}

export default Trip;
