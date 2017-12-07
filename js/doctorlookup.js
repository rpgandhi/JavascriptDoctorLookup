var apiKey = require('./../.env').apiKey;

export class ApplicationModule {
  constructor(){}
}
// var ApplicationModule = function() {
//
// };
ApplicationModule.prototype.getDataSymptoms = function(userInput, displaySymptomData) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(results) {
      displaySymptomData(results);
    })
    .fail(function() {
      console.log('something went wrong');
    });
};

ApplicationModule.prototype.getDataDoctors = function(userInput, displayDoctorData) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userDoctor}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(results) {
      displayDoctorData(results);
    })
    .fail(function() {
      console.log('something went wrong');
    });
};

exports.applicationModule = ApplicationModule;
