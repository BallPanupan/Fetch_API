var array;

fetch('https://app.dropoffer.com/v1/api/contacts/savedproperties/4483193000000435376')
  .then(function (response) {
    return response.json() 
  })
  .then(function (response) {
    // console.log("status : ", response.status); 
    // console.log("ZIP : ", response.data['Zip']);
    // console.log("Owner : ", response.data['Owner'].name);

    document.getElementById("status").innerHTML = response.status;
    document.getElementById("ZIP").innerHTML = response.data['Zip'];
    document.getElementById("Owner").innerHTML = response.data['Owner'].name;
  })


function myFunction() {
  var h = document.getElementById("number_x");
  h.insertAdjacentHTML("afterend", "<p>My new paragraph</p>");
}


function test_loop(){
  for (let index = 0; index < 15; index++) {
    var messe = "<p>number of " + index + "</p>";
    var h = document.getElementById("number_x");
    h.insertAdjacentHTML("afterend", messe);
  }
}
