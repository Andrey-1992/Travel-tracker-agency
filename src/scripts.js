// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');
// --------------------------------------------------------------->>

///--------------- Import Section -----------------------------///
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




///--------------- Event Listeners -----------------------------///
window.addEventListener("load", fetchAgencyData());
pastTripsBtn.addEventListener('click', showPastTripsView);
upcomingTripsBtn.addEventListener('click', showUpcomingTripsView);
pendingTripsBtn.addEventListener('click', showPendingTripsView);
// logOutBtn.addEventListener('click', returnLogView);
// submitFormBtn.addEventListener('click', submitTripForm);




///--------------- Functions -----------------------------///
let agencyRepo = new Agency();
let currentDate = dayjs().format('YYYY/MM/DD');
let currentTraveler;
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
  currentTraveler = agencyRepo.travelers[5];
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
  domUpdates.displayTripsCardsInfo(travelerPastTripsInfo, travelerPastDestinationInfo, pastTripsView);

  let travelerUpcomingTripsInfo = currentTraveler.upcomingTripsRecord;
  let travelerUpcomingDestinationInfo = currentTraveler.upcomingDestinationsRecord;
  domUpdates.displayTripsCardsInfo(travelerUpcomingTripsInfo, travelerUpcomingDestinationInfo, upcomingTripsView);

  let travelerPendingTripsInfo = currentTraveler.pendingTripsRecord;
  let travelerPendingDestinationInfo = currentTraveler.pendingDestinationsRecord;
  domUpdates.displayTripsCardsInfo(travelerPendingTripsInfo, travelerPendingDestinationInfo, pendingTripsView);

  // console.log('traveler PAST destinations:', currentTraveler.pastDestinationsRecord)
  // console.log('traveler PAST trips:', travelerPastTripsInfo)
  // console.log('traveler UPCOMING trips:', travelerUpcomingTripsInfo)
  // console.log('traveler PENDING trips:', travelerPendingTripsInfo)
}
