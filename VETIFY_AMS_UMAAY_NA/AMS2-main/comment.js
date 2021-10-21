function storeData() {
 
  var inputMessage = document.getElementById("statusMessage").value;
  
  
 

 
    db.collection("clinics").doc('clinics').set({
      statusMessage: inputMessage
     })
     .then(function() {
         console.log("Success");
     })
     .catch(function(error) {
        console.error("Error writing doc", error);
     });
}


