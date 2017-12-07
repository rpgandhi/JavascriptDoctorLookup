import { ApplicationModule } from "./../js/doctorlookup.js";
// const ApplicationModule = require('./../js/doctorlookup.js').applicationModule;


$(document).ready(function(){
  const applicationModule = new ApplicationModule();

  let displaySymptomData = function(results) {
  results.forEach(function(result) {
    $('#symptomList').append('<li>' + result.name + '</li>');
  });
};

let displayDoctorData = function(results) {
  results.forEach(function(result) {
    $('#doctorList').append('<li>' + result.name + '</li>');
  });
};


  $("#searchSymptoms").click(function(event){
    event.preventDefault();
    let userSymptom = $("#symptom").val();
    applicationModule.getDataSymptoms(userSymptom, displaySymptomData);

  });

  $("#searchDoctor").click(function(event){
    event.preventDefault();
    let userDoctor = $("#doctor").val();
    applicationModule.getDataDoctors(userDoctor, displayDoctorData);

  });

});
