import Glide from '@glidejs/glide';
const domUpdates = {
  displayTravelerInfo(travelerText, travelerDomSection) {
    travelerDomSection.innerText = '';
    travelerDomSection.innerText = travelerText;
  },

  displayTripsCardsInfo(tripData, destinationData, tripDomSection) {
    // tripDomSection.innerHTML = '';
    new Glide(document.querySelector('.glide')).mount()
    if (tripData.length) {
      return tripData.forEach(tripInfo => {
        destinationData.forEach(destinationInfo => {

          // tripDomSection.insertAdjacentHTML('afterbegin',
          // `
          // <div class="trips-cards">
          //   <button aria-label="Before" class="before-arrow">
          //   <i class="fas fa-chevron-left"></i>
          //   </button>
          //
          //   <div class="carousel-list">
          //     <div class="carousel-item">
          //       <img src="${destinationInfo.image}" alt="${destinationInfo.alt}" width="150" height="150">
          //       <h4>${destinationInfo.destination}</h4>
          //       <h3>Trip Details:</h3>
          //       <p>Start date: ${tripInfo.date}</p>
          //       <p>Travelers: # ${tripInfo.travelers}</p>
          //       <p>Duration: # ${tripInfo.duration}</p>
          //       <p>Status: ${tripInfo.status}</p>
          //       <h3>Trip Cost:</h3>
          //       <p>Cost Per Day: $ ${destinationInfo.estimatedLodgingCostPerDay}</p>
          //       <p>Cost Per Traveler: $ ${destinationInfo.estimatedFlightCostPerPerson}</p>
          //     </div>
          //   </div>
          //
          //   <button aria-label="After" class="after-arrow">
          //   <i class="fas fa-chevron-right"></i>
          //   </button>
          // </div>
          // <div role="tablist" class="carousel-indicators"></div>
          // `)

          tripDomSection.innerHTML =
          `
                <div class="carousel-list">
                  <div class="carousel-item">
                    <img src="${destinationInfo.image}" alt="${destinationInfo.alt}" width="150" height="150">
                    <h4>${destinationInfo.destination}</h4>
                    <h3>Trip Details:</h3>
                    <p>Start date: ${tripInfo.date}</p>
                    <p>Travelers: # ${tripInfo.travelers}</p>
                    <p>Duration: # ${tripInfo.duration}</p>
                    <p>Status: ${tripInfo.status}</p>
                    <h3>Trip Cost:</h3>
                    <p>Cost Per Day: $ ${destinationInfo.estimatedLodgingCostPerDay}</p>
                    <p>Cost Per Traveler: $ ${destinationInfo.estimatedFlightCostPerPerson}</p>
                  </div>
                </div>
          `
        })
      })

      // new Glide('.glide')
      // .mount()
      // let carouselSection = document.querySelector('.carousel-list');
      //
      // let glinder = new Glider(carouselSection, {
      //   slidesToShow: 1,
      //   slidesToScroll: 2,
      //   draggable: true,
      //   dots: '.carousel-indicators',
      //   arrows: {
      //     prev: '.before-arrow',
      //     next: '.after-arrow'
      //   }
      // })

    } else {
      return tripDomSection.insertAdjacentHTML('afterbegin',
      `<p>You do not have any future or pending trips !</p>`)
    }

    // new Glider(document.querySelector('.carousel-list'), {
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   // draggable: true,
    //   dots: '.dots',
    //   arrows: {
    //     prev: '.glider-prev',
    //     next: '.glider-next'
    //   }
    // })

  }
}

export default domUpdates;
