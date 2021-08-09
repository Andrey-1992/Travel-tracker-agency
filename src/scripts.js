// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');
// --------------------------------------------------------------->>

///--------------- Import Section -----------------------------//
import Glide from '@glidejs/glide'
import Traveler from './classes/Traveler';
import Trip from './classes/Trip';
import Agency from './classes/Agency';
import Destination from './classes/Destination';
import fetchCalls from './fetchCalls';
import domUpdates from './domUpdates';
import dayjs from 'dayjs';




///--------------- Queries Section -----------------------------///
const logOutBtn = document.getElementById('logOutBtn');
const pastTripsBtn = document.getElementById('pastTripsBtn');
const upcomingTripsBtn = document.getElementById('upcomingTripsBtn');
const pendingTripsBtn = document.getElementById('pendingTripsBtn');
const submitFormBtn = document.getElementById('submitFormBtn');


const travelerGreeting = document.getElementById('travelerGreeting');
const totalSpentInfo = document.getElementById('totalSpentInfo');
const planningCost = document.getElementById('planningCost');

const travelerInfoSectionView = document.getElementById('travelerGreeting');
const tripsViewInfoSection = document.getElementById('tripsViewInfoSection');
const pastTripsView = document.getElementById('pastTripsView');
const upcomingTripsView = document.getElementById('upcomingTripsView');
const pendingTripsView = document.getElementById('pendingTripsView');

const planningDate = document.getElementById('planningDate');
const planningNoDays = document.getElementById('planningNoDays');
const planningNoTravelers = document.getElementById('planningNoTravelers');
const destinationDropdown = document.getElementById('destinationDropdown');
// console.log(pendingTripsBtn);

const glideTest = document.querySelector('.glide__slides');




///--------------- Event Listeners -----------------------------///
window.addEventListener("load", fetchAgencyData());
pastTripsBtn.addEventListener('click', showPastTripsView);
upcomingTripsBtn.addEventListener('click', showUpcomingTripsView);
pendingTripsBtn.addEventListener('click', showPendingTripsView);
// logOutBtn.addEventListener('click', returnLogView);
submitFormBtn.addEventListener('click', submitTripForm);




///--------------- Functions -----------------------------///
let agencyRepo = new Agency();
let currentDate = dayjs().format('YYYY/MM/DD');
let currentTraveler;
// let tripIdNum = 200;
// console.log(agencyRepo)
// console.log(currentDate)

function preventDefault() {
  event.preventDefault()
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showPastTripsView() {
  preventDefault();
  show(pastTripsView);
  hide(upcomingTripsView);
  hide(pendingTripsView);
}

function showUpcomingTripsView() {
  preventDefault();
  show(upcomingTripsView);
  hide(pastTripsView);
  hide(pendingTripsView);
}

function showPendingTripsView() {
  preventDefault();
  show(pendingTripsView);
  hide(upcomingTripsView);
  hide(pastTripsView);
}

function fetchAgencyData() {
  const travelerInfo = fetchCalls.getData('travelers');
  const tripsInfo = fetchCalls.getData('trips');
  const destinationsInfo = fetchCalls.getData('destinations');

  Promise.all([travelerInfo, tripsInfo, destinationsInfo])
    .then(data => initializedData(data[0], data[1], data[2]))
    .catch(err => console.error(err))
}

function initializedData(travelerData, tripsData, destinationsData) {
  Promise.resolve(intializeTravelerData(travelerData))
  .then(storeAgencyData(tripsData, destinationsData))
  .then(updatePageInfo());
}

function intializeTravelerData(travelerData) {
  travelerData.travelers.forEach(traveler => {
    let travelerInfo = new Traveler(traveler)
    agencyRepo.travelers.push(travelerInfo);
  })
}

function storeAgencyData (tripsData, destinationsData) {
  tripsData.trips.forEach(trip => {
    let tripInfo = new Trip(trip, agencyRepo)
    agencyRepo.trips.push(tripInfo);
  })

  destinationsData.destinations.forEach(destination => {
    let destinationInfo = new Destination(destination, agencyRepo)
    agencyRepo.destinations.push(destinationInfo);
  })
}

function updatePageInfo() {
  // Here is where I pass the value of the log in, and select that user !
  currentTraveler = agencyRepo.travelers[47];
  console.log(currentTraveler)
  updateTravelerInfo(currentTraveler);
}

function updateTravelerInfo(currentTraveler) {
  currentTraveler.findTrips();
  currentTraveler.matchDestinationsAndTrips(agencyRepo);

  const greetTraveler = currentTraveler.greetForTraveler();
  domUpdates.displayTravelerInfo(greetTraveler, travelerGreeting);

  const travelerTotalSpent =`This year you had spent a total of: $ ${currentTraveler.calculateYearTotalSpent(agencyRepo)}`;
  domUpdates.displayTravelerInfo(travelerTotalSpent, totalSpentInfo);


  let travelerPastTripsInfo = currentTraveler.pastTripsRecord;
  let travelerPastDestinationInfo = currentTraveler.pastDestinationsRecord;
  domUpdates.displayTripsCardsInfo(travelerPastTripsInfo, travelerPastDestinationInfo, pastTripsView, agencyRepo);
  // Glide dom Update version
  // domUpdates.displayTripsCardsInfo(travelerPastTripsInfo, travelerPastDestinationInfo, glideTest);

  let travelerUpcomingTripsInfo = currentTraveler.upcomingTripsRecord;
  let travelerUpcomingDestinationInfo = currentTraveler.upcomingDestinationsRecord;
  domUpdates.displayTripsCardsInfo(travelerUpcomingTripsInfo, travelerUpcomingDestinationInfo, upcomingTripsView, agencyRepo);
  // Glide dom Update version
  // domUpdates.displayTripsCardsInfo(travelerUpcomingTripsInfo, travelerUpcomingDestinationInfo, glideTest);

  let travelerPendingTripsInfo = currentTraveler.pendingTripsRecord;
  let travelerPendingDestinationInfo = currentTraveler.pendingDestinationsRecord;
  domUpdates.displayTripsCardsInfo(travelerPendingTripsInfo, travelerPendingDestinationInfo, pendingTripsView, agencyRepo);
  // Glide dom Update version
  // domUpdates.displayTripsCardsInfo(travelerPendingTripsInfo, travelerPendingDestinationInfo, glideTest);


  // Some GLIDE code ideas --------------------------------------->
  // new Glide(document.querySelector('.glide')).mount()
  // new Glide(document.querySelector('.glide'), {
    //   type: select.value,
    //   focusAt: 'center',
    //   perView: 3
    // })
  // let glider = new Glide(document.querySelector('.carousel-list'))
  // console.log(glider)
  //---------------------------------------------------------------->

}

function submitTripForm() {

  preventDefault();

  calculateTripCost();

  let destinationInfo = findDestinationInfo();
  // console.log(destinationInfo);

  let tripId = agencyRepo.trips.length + 1;
  // console.log(typeof tripId);

  const dateInput = dayjs(planningDate.value).format('YYYY/MM/DD');
  // console.log('dateInput:', dateInput);

  const noDaysInput = parseInt(planningNoDays.value);
  // console.log('noDaysInput:', noDaysInput);

  const noTravelersInput = parseInt(planningNoTravelers.value);
  // console.log('noTravelersInput:', noTravelersInput);


  let postTripObj = {
    id: tripId,
    userID: currentTraveler.id,
    destinationID: destinationInfo.id,
    travelers: noTravelersInput,
    date: dateInput,
    duration: noDaysInput,
    status: 'pending',
    suggestedActivities: []
  }
  console.log(postTripObj);

  fetchCalls.postNewData('trips', postTripObj);
}


function findDestinationInfo() {
  let destinationInfo ;
  const destinationInput = destinationDropdown.value;
  console.log('destinationInput:', destinationInput);
  let findDestinationId = agencyRepo.destinations.forEach(dest => {
    if (dest.destination === destinationInput) {
      destinationInfo = dest;
    }
  })
  return destinationInfo;
}


function calculateTripCost() {
  let destinationInfo = findDestinationInfo();
  let noDaysInput = parseInt(planningNoDays.value);
  let noTravelersInput = parseInt(planningNoTravelers.value);

  let sumCostPerDay = noDaysInput * destinationInfo.estimatedLodgingCostPerDay;
  let sumCostPerPerson = noTravelersInput * destinationInfo.estimatedFlightCostPerPerson;
  let tripAvg = sumCostPerDay + sumCostPerPerson;
  console.log('tripAvg:', tripAvg);
  let tripPercentageAvg = tripAvg * .10;
  console.log('tripPercentageAvg:', tripPercentageAvg);
  let totalTripAvg = tripAvg + tripPercentageAvg;
  console.log('totalTripAvg:', totalTripAvg);
  const totalTripAvgDom = `Estimated Cost: $ ${totalTripAvg}`

  domUpdates.displayTravelerInfo(totalTripAvgDom, planningCost);
  fetchAgencyData();
}
