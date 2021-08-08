const domUpdates = {
  displayTravelerInfo(travelerText, travelerDomSection) {
    travelerDomSection.innerText = '';
    travelerDomSection.innerText = travelerText;
  }
}

export default domUpdates;
