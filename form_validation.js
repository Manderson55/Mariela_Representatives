$(document).ready(function() {

  $("#submitAddress").validate({
      // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
            name: "required",
            streetNumber: "required",
            streetName: "required",
            city: "required",
            state: "required",
            zipCode: "required"
     
        },
        //validation error messages
        messages: {
            name: "Please enter your firstname",
            streetNumber: "Please enter your Street Number",
            streetName: "Please enter your Street Name",      
            city: "Please enter your City",
            state: "Please enter your State",
            zipCode: "Please enter your Zip COde",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
          form.submit();
        }
   });


});