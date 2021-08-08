// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');
// --------------------------------------------------------------->>

import Traveler from './classes/Traveler';
import Trip from './classes/Trip';
import Agency from './classes/Agency';
import Destination from './classes/Destination';
import fetchCalls from './fetchCalls';
import domUpdates from './domUpdates';
import dayjs from 'dayjs';
