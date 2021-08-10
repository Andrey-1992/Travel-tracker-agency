import dayjs from 'dayjs';

class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.allTripsRecord = [];
    this.pastTripsRecord = [];
    // this.pastDestinationsRecord = [];
    this.upcomingTripsRecord = [];
    // this.upcomingDestinationsRecord = [];
    this.pendingTripsRecord = [];
    // this.pendingDestinationsRecord = [];
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
            let tripAvg = sumCostPerDay + sumCostPerPerson;
            let tripPercentageAvg = tripAvg * .10;
            let totalTripAvg = tripAvg + tripPercentageAvg;
            acc += totalTripAvg;
          }
        }
      })

      return acc;
    }, 0);

    return sumTripsCost
  }

  // matchDestinationsAndTrips(destinations) {
  //   if (this.pastTripsRecord.length) {
  //     this.pastTripsRecord.forEach(tripInfo => {
  //       destinations.destinations.forEach(destinationInfo => {
  //         if (tripInfo.destinationID === destinationInfo.id) {
  //           this.pastDestinationsRecord.push(destinationInfo)
  //         }
  //       })
  //     })
  //   }
  //   if (this.upcomingTripsRecord.length) {
  //     this.upcomingTripsRecord.forEach(tripInfo => {
  //       destinations.destinations.forEach(destinationInfo => {
  //         if (tripInfo.destinationID === destinationInfo.id) {
  //           this.upcomingDestinationsRecord.push(destinationInfo)
  //         }
  //       })
  //     })
  //   }
  //   if (this.pendingTripsRecord.length) {
  //     this.pendingTripsRecord.forEach(tripInfo => {
  //       destinations.destinations.forEach(destinationInfo => {
  //         if (tripInfo.destinationID === destinationInfo.id) {
  //           this.pendingDestinationsRecord.push(destinationInfo)
  //         }
  //       })
  //     })
  //   }
  // }

}

export default Traveler;
