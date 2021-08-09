const domUpdates = {
  displayTravelerInfo(travelerText, travelerDomSection) {
    travelerDomSection.innerText = '';
    travelerDomSection.innerText = travelerText;
  },

  displayTripsCardsInfo(tripData, destinationData, tripDomSection) {
    tripDomSection.innerHTML = '';
    console.log(tripData)
    console.log(tripDomSection)
    if (tripData.length) {
      return tripData.forEach(tripInfo => {
        destinationData.forEach(destinationInfo => {
          tripDomSection.insertAdjacentHTML('afterbegin',
          `
          <div class="presentBookingInfo">
          <img src="${destinationInfo.image}" alt="${destinationInfo.alt}" width="150" height="150">
          <p>${destinationInfo.destination}</p>
          <h3>Trip Details:</h3>
          <p>Start date: ${tripInfo.date}</p>
          <p>Travelers: # ${tripInfo.travelers}</p>
          <p>Duration: # ${tripInfo.duration}</p>
          <p>Status: ${tripInfo.status}</p>
          <h3>Trip Cost:</h3>
          <p>Cost Per Day: $ ${destinationInfo.estimatedLodgingCostPerDay}</p>
          <p>Cost Per Traveler: $ ${destinationInfo.estimatedFlightCostPerPerson}</p>
          </div>`)
          })
      })
    } else {
      return tripDomSection.insertAdjacentHTML('afterbegin',
      `<p>You do not have any future or pending trips !</p>`)
    }
  }
}

export default domUpdates;
