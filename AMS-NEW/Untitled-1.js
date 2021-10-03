<script> 
    function createCounter(ref, num_vet) {
    var veterinary = db.veterinary();

// Initialize the counter document
     veterinary.set(ref, { num_vet: num_vet });

// Initialize each shard with count=0
     for (let i = 0; i < num_vet; i++) {
     const vetRef = ref.collection('Admin').doc(i.toString());
     veterinary.set(vetRef, { count: 0 });
}

// Commit the write batch
return veterinary.commit();
}

function incrementCounter(db, ref, num_vet) {
// Select a shard of the counter at random
const vet_id = Math.floor(Math.random() * num_vet).toString();
const vet_ref = ref.collection('Admin').doc(vet_id);

// Update count
return vet_ref.update("count", firebase.firestore.FieldValue.increment(1));
}

function getCount(ref) {
// Sum the count of each shard in the subcollection
return ref.collection('Admin').get().then((snapshot) => {
let total_count = 0;
snapshot.forEach((doc) => {
total_count += doc.data().count;
});

return total_count;
});
}