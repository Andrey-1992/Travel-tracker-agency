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
    this.yearTotalSpent = 0;
  }
  updateTripInfo(trip) {
    this.allTripsRecord.unshift(trip);
  }

  getFirstName() {
    return this.name.split(' ')[0];
  }

  determineTimeOfDay() {
   let time = new Date();
   let hour = time.getHours();

   if(hour < 10) {
     return 'Good Morning, '
   }
   if(hour < 17) {
     return 'Good Afternoon, '
   }
   return 'Good Evening, '
 }

 greetForTraveler() {
   return `${this.determineTimeOfDay()} ${this.getFirstName()}!`
 }

  findTrips() {
    let currentDate = dayjs().format('YYYY/MM/DD');

    this.allTripsRecord.forEach(trip => {
      if (trip.status === "pending" && !this.pendingTripsRecord.includes(trip)) {
        this.pendingTripsRecord.push(trip);
      }

      const tripDate = dayjs(trip.date);

      if (tripDate.isBefore(currentDate, 'day') && !this.pastTripsRecord.includes(trip)) {
        this.pastTripsRecord.push(trip);
      } else if (tripDate.isSame(currentDate, 'day') && !this.upcomingTripsRecord.includes(trip)) {
        this.upcomingTripsRecord.push(trip);
      } else if (tripDate.isAfter(currentDate, 'day') && !this.upcomingTripsRecord.includes(trip)) {
        this.upcomingTripsRecord.push(trip);
      }
    })
  }

  calculateYearTotalSpent(destinations) {
    const currentDate = dayjs().format('YYYY/MM/DD');

    const sumTripsCost = this.allTripsRecord.reduce((acc, trip) => {
      destinations.destinations.forEach(destinationInfo => {

        const tripDate = dayjs(trip.date);
        if (tripDate.isSame(currentDate, 'year')) {
          if (destinationInfo.id === trip.destinationID) {
            let sumCostPerDay = trip.duration * destinationInfo.estimatedLodgingCostPerDay;
            let sumCostPerPerson = trip.travelers * destinationInfo.estimatedFlightCostPerPerson;
            acc += sumCostPerDay + sumCostPerPerson;
          }
        }
      })

      return acc;
    }, 0);

    return sumTripsCost
  }

}

export default Traveler;
