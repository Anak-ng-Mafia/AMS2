

const vetclinics = document.querySelector('#vet-clinics')


function renderVeterinary(doc){

    let li = document.createElement('li');
    let FullName = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    FullName.textContent = doc.data().FullName;

    li.appendChild(FullName);

    vetclinics.appendChild(li);

}

db.collection('Admin').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
       renderVeterinary(doc);

})
})