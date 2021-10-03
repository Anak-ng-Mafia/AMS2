<script> 
    const vetclinics = document.querySelector('#dashboard')
    var db = firebase.firestore();
                                                                            
function renderVeterinary(doc){


}

db.collection('Users').get().then((snapshot) => {
 snapshot.docs.forEach(doc => {

  let li = document.createElement('tr');
  let FullName = document.createElement('th');
  let PhoneNumber = document.createElement('th');
  let UserEmail = document.createElement('th');
  let Username = document.createElement('th');


  li.setAttribute('data-id', doc.id);
  FullName.textContent = doc.data().FullName;
  PhoneNumber.textContent = doc.data().PhoneNumber;
  UserEmail.textContent = doc.data().UserEmail;
  Username.textContent = doc.data().Username;

  li.appendChild(FullName);
  li.appendChild(PhoneNumber);
  li.appendChild(UserEmail);
  li.appendChild(Username);


  vetclinics.appendChild(li);


})
})
</script>