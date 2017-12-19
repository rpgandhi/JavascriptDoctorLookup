import { ApplicationModule } from "./../js/doctorlookup.js";
// const ApplicationModule = require('./../js/doctorlookup.js').applicationModule;


let displaySymptomData = function(response) {
  $("#symptomList").show();

  for (let i = 0; i <= response.data.length; i++){
    $('#symptomList').append('<li>' + reponse.data.name[i] + '</li>');
    console.log("SYMPTOMNAME" + response.data.name[i]);
  }
};

let displayDoctorData = function(response) {
  $("#doctorList").show();

  for (let i = 0; i <= response.data.length; i++){
    $('#doctorList').append('<li>' + reponse.data.name[i] + '</li>');
    console.log("DOCTORNAME" + response.data.name[i]);
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
