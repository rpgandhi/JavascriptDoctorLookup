var apiKey = require('./../.env').apiKey;

export class ApplicationModule {
  constructor(){}


getDataSymptoms(userSymptom, displaySymptomData) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(response) {
      displaySymptomData(response);
    })
    .fail(function() {

    });
  }


getDataDoctors(userDoctor, displayDoctorData) {

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userDoctor}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
    console.log(response.meta);
      displayDoctorData(response);
    })
    .fail(function(response) {
      alert("something went wrong");

    });
  }
}
