function akanName() {
  var dd = parseInt(document.getElementById("dd").value); 
  var mm = parseInt(document.getElementById("mm").value);
  var yy = parseInt(document.getElementById("yy").value);
  var femaleGender = document.getElementById("femaleGender");
  var maleGender = document.getElementById("maleGender");
  var date = new Date(yy + "-" + mm + "-" + dd); 
  var dayBorn = date.getDay();

  var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"]; // array of male names
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; // array of female names
  var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // array of days

  if (dd < 1 || dd > 31) {
    alert("Enter a valid day!"); // month validation
  }
  if (mm < 1 || mm > 12) {
    alert("Enter valid month");
  }

  if (yy.toString().length !== 4) { // year validation
    alert("Enter a valid year");
  } else if (maleGender.checked) {
    alert(
      "Hello Sir, your day of birth is " + // output
        daysOfTheWeek[dayBorn] +
        ", and your Akan name is " +
        maleNames[dayBorn]
    );
  } else {
    alert(
      "Hello Lady, your day of birth is " + // output
        daysOfTheWeek[dayBorn] +
        ", and your Akan name is " +
        femaleNames[dayBorn] 
    );
  }
}
