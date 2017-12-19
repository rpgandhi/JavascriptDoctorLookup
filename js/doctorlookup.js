var apiKey = require('./../.env').apiKey;

export class ApplicationModule {
  constructor(){}


getDataSymptoms(userSymptom, displaySymptomData) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`)
    .then(function(response) {
      displaySymptomData(response);
    })
    .fail(function() {
      console.log('something went wrong');
    });
  }

  // https://api.betterdoctor.com/2016-03-01/doctors?query=johnson&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=65f508702db150e33c63feadd03103e1

  // getDataDoctors(userDoctor, displayDoctorData){
  //   let promise = new Promise(function(resolve, reject){
  //     let request = new XMLHttpRequest();
  //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${userDoctor}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`;
  //     request.onload = function(){
  //       if (this.status === 200) {
  //         resolve(request.response);
  //       }
  //       else {
  //         reject(Error(request.statusText));
  //       }
  //     };
  //       request.open("GET", url, true);
  //       request.send();
  //     });
  //
  //     promise.then(function(response){
  //       let body = JSON.parse(response);
  //     });
  //   }
  // }

getDataDoctors(userDoctor, displayDoctorData) {
  console.log("getdatadoctorsFunctionworking");
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userDoctor}&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
      displayDoctorData(response);
    })
    .fail(function() {

      console.log('something went wrong');
    });
  }
}


// exports.applicationModule = ApplicationModule;

//
// ("https://api.betterdoctor.com/2016-03-01/doctors?query=johnson&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=65f508702db150e33c63feadd03103e1")
//
// ("https://api.betterdoctor.com/2016-03-01/doctors?query=smith&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=65f508702db150e33c63feadd03103e1")
//
// ("https://api.betterdoctor.com/2016-03-01/doctors?query=smith&location=or-portland&sort=best-match-desc&skip=0&limit=10&user_key=65f508702db150e33c63feadd03103e1")
