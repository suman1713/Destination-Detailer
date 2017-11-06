var recent_count = 0;
    var no_of_search=0;
    var search
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC9e6rdvj5qcTUm5eP4p7P2Ur8qQ4q7jf8",
    authDomain: "project-1-recent.firebaseapp.com",
    databaseURL: "https://project-1-recent.firebaseio.com",
    projectId: "project-1-recent",
    storageBucket: "project-1-recent.appspot.com",
    messagingSenderId: "123006230299"
  };
  firebase.initializeApp(config);



    var recent_database = firebase.database();
    


recent_database.ref().limitToLast(10).on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().Searched_location);
      console.log(childSnapshot.val().Search_id);
     

      
      // full list of items to the well
    
        $("#recent-searches").prepend('<button class="btn btn-primary" id="recentsearch_btn" type="button" style="margin:13px;">'+childSnapshot.val().Searched_location+'</button>');
       // recent_count++;

      
      

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });




    $(document).submit(function(){

         var search=$("#input_destination").val().split(",")[0];
        no_of_search++;
        

        localStorage.setItem("searched_place", search);





      // Code for the push into database
      recent_database.ref().push({

        Searched_location: search,
        Search_id: no_of_search,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

      window.location.href = "results.html";
      return false;
    

     
    });

$(document).on('click', '#recentsearch_btn', function(){

  var search=$(this).text().split(",")[0];
  console.log(search);
  localStorage.setItem("searched_place", search);
  window.location.href = "results.html";
      return false;


});       


 

   
    

    

    


