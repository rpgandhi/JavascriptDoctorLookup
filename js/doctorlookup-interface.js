import { ApplicationModule } from "./../js/doctorlookup.js";


let displaySymptomData = function(response) {
  if (response.data.length > 0){
    $("#symptomList").show();
    for (let i = 0; i <= response.data.length; i++){
      let index = response.data[i];
      let profiles = index.profile;
      $('#symptomList').append(`<br><li>${profiles.first_name} ${profiles.last_name}</li>`);
      console.log("SYMPTOMNAME" + response.data[i].profile.first_name);
    }
  } else {
  $('#noResultsSymptoms').append("There are no results that match your search");
  }
}

let displayDoctorData = function(response) {
  if (response.data.length > 0){
  $('#doctorDisplay').show();
  $("#doctorList").show();

  for (let i = 0; i <= response.data.length; i++){
    let index = response.data[i];
    let profile = index.profile;
    $('#doctorList').append(`<li><strong>${profile.first_name} ${profile.last_name}</strong></li>`);
    for (let h = 0; h < index.practices.length; h++) {
      let practice = index.practices[h];
      let address = practice.visit_address;
      let site = practice.website;
      $("#doctorList").append(`<li class="address">${address.street}</li>`);
      $("#doctorList").append(`<li class="city">${address.city}, ${address.state}</li>`);
      $("#doctorList").append(`<li class="phone">${practice.phones[0].number}</li>`);
      if(site === undefined) {
        $("#doctorList").append(`<li class="website">No website data</li>`);
      } else {
        $("#doctorList").append(`<li href="${site}">${site}</li>`);
      }
      if(practice.accepts_new_patients === true) {
        $("#doctorList").append(`<li>Accepting new patients</li><br>`);
      } else {
        $("#doctorList").append(`<li>NOT accepting new patients<br></li><br>`);
      }
    }
  }
  } else {
  $('#noResultsDoctor').append("There are no results that match your search.");
  }
}

// let error = function(error){
//   $('#errorMessage').show();
//   $("#errorMessage").append(`${error.meta.message}`);
// };

$(document).ready(function(){
  $('#symptomList').hide();
  $('#doctorDisplay').hide();
  $('#doctorList').hide();
  $('#errorMessage').hide();

  let applicationModule = new ApplicationModule();

  $("#searchSymptoms").submit(function(event){
    event.preventDefault();

    let userSymptom = $("#symptom").val();
    applicationModule.getDataSymptoms(userSymptom, displaySymptomData);

  });

  $("#searchDoctors").submit(function(event){
    event.preventDefault();

    let userDoctor = $("#doctor").val();
    applicationModule.getDataDoctors(userDoctor, displayDoctorData);

  });

});
