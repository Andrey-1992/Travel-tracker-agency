import Glide from '@glidejs/glide';
const domUpdates = {
  displayTravelerInfo(travelerText, travelerDomSection) {
    travelerDomSection.innerText = '';
    travelerDomSection.innerText = travelerText;
  },

  displayTripsCardsInfo(tripData, destinationData, tripDomSection, agencyDestinationsRepo) {
    tripDomSection.innerHTML = '';
    console.log(agencyDestinationsRepo.destinations);

    // let glider = new Glide(tripDomSection)
    // new Glide(document.querySelector('.glide')).mount()
    // let glider = new Glide(document.querySelector('.carousel-list'))
    // console.log(glider)

    if (tripData.length) {
      tripData.forEach(tripInfo => {
        // destinationData.forEach(destinationInfo => {
        let findDest ;
        agencyDestinationsRepo.destinations.forEach(dest => {

          if (dest.id === tripInfo.destinationID) {
            findDest = dest;
          }
        })

          //// Glide & Grid Code --------------------------->>
          tripDomSection.insertAdjacentHTML('afterbegin',
          `
          <div class="trips-cards">

            <button aria-label="Before" class="before-arrow">
            <i class="fas fa-chevron-left"></i>
            </button>

            <div class="carousel-list">
              <div class="carousel-item">
                <img src="${findDest.image}" alt="${findDest.alt}" width="150" height="150">
                <h4>${findDest.destination}</h4>
                <h3>Trip Details:</h3>
                <p>Start date: ${tripInfo.date}</p>
                <p>Travelers: # ${tripInfo.travelers}</p>
                <p>Duration: # ${tripInfo.duration}</p>
                <p>Status: ${tripInfo.status}</p>
                <h3>Trip Cost:</h3>
                <p>Cost Per Day: $ ${findDest.estimatedLodgingCostPerDay}</p>
                <p>Cost Per Traveler: $ ${findDest.estimatedFlightCostPerPerson}</p>
              </div>
            </div>

            <button aria-label="After" class="after-arrow">
            <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <div role="tablist" class="carousel-indicators"></div>
          `)
          ////// ------------------------------------------>

          //// GLIDE VERSION CODE --------------------->
          // tripDomSection.insertAdjacentHTML('afterbegin',
          // `
          //
          //     <li class="glide__slide">
          //       <div class="carousel-item">
          //         <img src="${destinationInfo.image}" alt="${destinationInfo.alt}" width="150" height="150">
          //         <h4>${destinationInfo.destination}</h4>
          //         <h3>Trip Details:</h3>
          //         <p>Start date: ${tripInfo.date}</p>
          //         <p>Travelers: # ${tripInfo.travelers}</p>
          //         <p>Duration: # ${tripInfo.duration}</p>
          //         <p>Status: ${tripInfo.status}</p>
          //         <h3>Trip Cost:</h3>
          //         <p>Cost Per Day: $ ${destinationInfo.estimatedLodgingCostPerDay}</p>
          //         <p>Cost Per Traveler: $ ${destinationInfo.estimatedFlightCostPerPerson}</p>
          //       </div>
          //     </li>
          //
          // `
          // )
          //// =----------------------------------------->



        // }) ------>


      })

    } else {
      return tripDomSection.insertAdjacentHTML('afterbegin',
      `<p class="no-trips-msg">You do not have any future or pending trips !</p>`)
    }

  }
}

export default domUpdates;
