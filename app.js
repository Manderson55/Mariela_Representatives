$(document).ready(function(){

    var voterName = "";
    var voterStreetNumber = "";
    var voterStreetName = "";
    var voterCity = "";
    var voterState = "";
    var voterZipCode = "";

 

  $("#submitAddress").on("click", function(event) {


      event.preventDefault(); 

      console.log('inside the onclick'); 
      voterName = $("#name").val().trim();
      console.log (voterName);
      voterStreetNumber = $("#streetNumber").val().trim();
      console.log (voterStreetNumber);
      voterStreetName = $("#streetName").val().trim();
      console.log (voterStreetName);
      voterCity = $("#city").val().trim();
      console.log (voterCity);
  //    voterState = $("select#stateSelect").find("option:selected").val(); //returns undefined
//    voterState = $("#stateSelect option:selected").val(); //returns undefined
 //   voterState = $("#stateSelect option:selected").text(); //returns spaces
      voterState = $("#state").val().trim();
      console.log (voterState);
      voterZipCode = $("#zipCode").val().trim();
      console.log (voterZipCode);

  });

  $("#clearAddress").on("click", function(event) {
        console.log('inside the clear onclick');
        event.preventDefault(); 
        document.getElementById("voterAddress").reset();
  
  });


});

