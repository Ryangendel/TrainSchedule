  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC-iG2mG1uuFTh-RjsKevGgYqFh4QsWxjM",
    authDomain: "train-schedule-15d54.firebaseapp.com",
    databaseURL: "https://train-schedule-15d54.firebaseio.com",
    projectId: "train-schedule-15d54",
    storageBucket: "train-schedule-15d54.appspot.com",
    messagingSenderId: "420417811431"
  };
  firebase.initializeApp(config);

  var database=firebase.database();

  var trainName="";
  var destination="";
  var firstTrainTime="";
  var frequency="";
  // var nextArrival="";
  // var minutesAway="";

  $("#add-train-to-schedule").on("click", function(){
    event.preventDefault();

    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#first-train-input").val().trim(); 
    frequency = $("#train-frequency").val().trim();

    var newTrain={
      name:trainName,
      place:destination,
      firstTrain:firstTrainTime,
      freq:frequency, 
    }

    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#train-frequency").val("");

// what is this?
    return false;
  });

database.ref().on("child_added", function (childSnapshot){
  console.log(childSnapshot.val());
var trainName = childSnapshot.val().name;
var destination = childSnapshot.val().place;
var firstTrainTime= childSnapshot.val().firstTrain;
var frequency = childSnapshot.val().freq;

$("#schedule-table>tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainTime + "</td><td>" + frequency + "</td></tr>");

});



  