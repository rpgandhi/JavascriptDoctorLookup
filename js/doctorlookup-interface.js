import { ApplicationModule } from "./../js/doctorlookup.js";
// const ApplicationModule = require('./../js/doctorlookup.js').applicationModule;



//   let displaySymptomData = function(results) {
//   results.forEach(function(result) {
//     $('#symptomList').append('<li>' + result.name + '</li>');
//   });
// };


let displayDoctorData = function(response) {
  for (let i = 0; i <= response.length; i++){
    $('#doctorList').append('<li>' + reponse.name[i] + '</li>');
    console.log("DOCTORNAME" + response.name[i]);
  }
};


$(document).ready(function(){

  let applicationModule = new ApplicationModule();

  $("#searchSymptoms").submit(function(event){
    event.preventDefault();

    let userSymptom = $("#symptom").val();
    console.log(userSymptom);
    applicationModule.getDataSymptoms(userSymptom, displaySymptomData);

  });

  $("#searchDoctors").submit(function(event){
    event.preventDefault();

    let userDoctor = $("#doctor").val();
    console.log(userDoctor);
    applicationModule.getDataDoctors(userDoctor, displayDoctorData);

  });

});
