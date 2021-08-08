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

const planningDate = document.getElementById('planningDate');
const planningNoDays = document.getElementById('planningNoDays');
const planningNoTravelers = document.getElementById('planningNoTravelers');
const destinationDropdown = document.getElementById('destinationDropdown');
// console.log(pendingTripsBtn);




///--------------- Event Listeners -----------------------------///
// logOutBtn.addEventListener('click', returnLogView);
// pastTripsBtn.addEventListener('click', showPastTripsView);
// upcomingTripsBtn.addEventListener('click', showUpcomingTripsView);
// pendingTripsBtn.addEventListener('click', showPendingTripsView);
// submitFormBtn.addEventListener('click', submitTripForm);




///--------------- Functions -----------------------------///
let agencyRepo = new Agency();
let currentDate = dayjs().format('YYYY/MM/DD');
// console.log(agencyRepo)
// console.log(currentDate)

function fetchAgencyData() {
  const travelerInfo = fetchCalls.getData('travelers');
  const tripsInfo = fetchCalls.getData('trips');
  const destinationsInfo = fetchCalls.getData('destinations');

  Promise.all([travelerInfo, tripsInfo, destinationsInfo])
    .then(data => initializedData(data[0], data[1], data[2]))
    .catch(err => console.error(err))
}
