import dayjs from 'dayjs';

class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.allTripsRecord = [];
    this.pastTripsRecord = [];
    this.upcomingTripsRecord = [];
    this.pendingTripsRecord = [];
    this.allDestinationsRecord = [];
  }
  getFirstName() {
    return this.name.split(' ')[0].toUpperCase();
  }

  updateTripInfo(trip) {
    this.allTripsRecord.unshift(trip);
  }

  // updateDestinationsInfo(destination) {
  //   this.allDestinationsRecord.unshift(destination);
  // }

  findTrips() {
    let currentDate = dayjs().format('YYYY/MM/DD');

    this.allTripsRecord.forEach(trip => {
      const tripDate = dayjs(trip.date);

      if (trip.status === "pending" && !this.pendingTripsRecord.includes(trip)) {
        this.pendingTripsRecord.push(trip);
      }
      
      if (tripDate.isBefore(currentDate, 'day') && !this.pastTripsRecord.includes(trip)) {
        this.pastTripsRecord.push(trip);
      } else if (tripDate.isSame(currentDate, 'day') && !this.upcomingTripsRecord.includes(trip)) {
        this.upcomingTripsRecord.push(trip);
      } else if (tripDate.isAfter(currentDate, 'day') && !this.upcomingTripsRecord.includes(trip)) {
        this.upcomingTripsRecord.push(trip);
      }
    });

  }
}

export default Traveler;
