import Glide from '@glidejs/glide';
const domUpdates = {
  displayTravelerInfo(travelerText, travelerDomSection) {
    travelerDomSection.innerText = '';
    travelerDomSection.innerText = travelerText;
  },

  displayTripsCardsInfo(tripData, tripDomSection, agencyDestinationsRepo) {
    tripDomSection.innerHTML = '';

    if (tripData.length) {
      tripData.forEach(tripInfo => {
        let findDest ;
        agencyDestinationsRepo.destinations.forEach(dest => {
          if (dest.id === tripInfo.destinationID) {
            findDest = dest;
          }
        })

        tripDomSection.innerHTML +=
        `
        <div class="trips-cards">

          <button aria-label="Before" class="before-arrow">
          <i class="fas fa-chevron-left"></i>
          </button>

          <div class="carousel-list">
            <div class="carousel-item">
              <img src="${findDest.image}" alt="${findDest.alt}">
              <h4 class="card-headers">${findDest.destination}</h4>
              <h4 class="card-headers">Trip Details:</h4>
              <p class="card-text">Start date: ${tripInfo.date}</p>
              <p class="card-text">Travelers: # ${tripInfo.travelers}</p>
              <p class="card-text">Duration: # ${tripInfo.duration}</p>
              <p class="card-text">Status: ${tripInfo.status}</p>
              <h4 class="card-headers">Trip Cost:</h4>
              <p class="card-text">Cost Per Day: $ ${findDest.estimatedLodgingCostPerDay}</p>
              <p class="card-text">Cost Per Traveler: $ ${findDest.estimatedFlightCostPerPerson}</p>
            </div>
          </div>

          <button aria-label="After" class="after-arrow">
          <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <div role="tablist" class="carousel-indicators"></div>
        `
      })

    } else {
      return tripDomSection.insertAdjacentHTML('afterbegin',
      `<p class="no-trips-msg">You do not have any future or pending trips !</p>`)
    }
  }
}

export default domUpdates;
