function VerifyUserButton() {

  
    swal({
        title: "Verify User",
        text: "Do you really want to verify the user ''"+VerifiedUser+"''?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
      
    var url_string = window.location.href;
    var url = new URL(url_string);
  

    db.collection("Admin").doc(id).update({
      Status: "Verified",
    }).then((doc) => {
      swal("User has been verified!", {
        icon: "success",
    });
});
  } else {

  }
});
}