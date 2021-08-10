const fetchCalls = {

  getData(endPoint) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch((error) => this.displayErrorMessage(error));
  },

  postNewData(endPoint, body) {
    return fetch(`http://localhost:3001/api/v1/${endPoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
      .then((res) => this.checkForErrors(res))
      .catch((error) => this.displayErrorMessage(error))
  },

  checkForErrors(res) {
    if (!res.ok) {
      throw new Error("Please make sure all Fields are filled out");
    }
    return res.json();
  },

  displayErrorMessage(error) {
    const postErrorField = document.querySelector('.post-error-field');

    postErrorField.innerText = ` '${err}' - Please check error !.`
  }


};

export default fetchCalls;
