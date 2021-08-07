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

  updateDestinationsInfo(destination) {
    this.allDestinationsRecord.unshift(destination);
  }

  findTrips(destinationsData) {
    // let customerBookings = destinationsData.filter(booking => booking.userID === this.id);
    // let today = dayjs()
    // // .format('YYYY/MM/DD');
    // // console.log('currentDate', today)
    //
    // customerBookings.forEach(booking => {
    //   let bookingDate = dayjs(booking.date);
    //   // console.log('testDayJs', bookingDate);
    //   if(bookingDate.isBefore(today, 'day') && (!this.pastBookings.includes(booking))) {
    //     this.pastBookings.push(booking);
    //     // console.log('past', this.pastBookings)
    //   } else if (bookingDate.isAfter(today, 'day') && (!this.futureBookings.includes(booking))){
    //     this.futureBookings.push(booking);
    //     // console.log('ft', this.futureBookings)
    //   } else if (bookingDate.isSame(today, 'day') && (!this.presentBookings.includes(booking))) {
    //     this.presentBookings.push(booking);
    //     // console.log('present', this.presentBookings)
    //   }
    // })
  }
}

export default Traveler;
