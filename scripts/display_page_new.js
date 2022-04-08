var currentUser //put this right after you start script tag before writing any functions.


function populateCardsDynamically() {
    let eventCardTemplate = document.getElementById("eventCardTemplate");
    let eventCardGroup = document.getElementById("eventCardGroup");

    db.collection("events").get()
        .then(allevents => {
            allevents.forEach(doc => {
                var eventName = doc.data().name;
                var eventCode = doc.data().code;
                var eventStatus = doc.data().status;
                var eventWait_time = doc.data().wait_time;
                var eventCurrent_queue = doc.data().current_queue;
                var eventDetails = doc.data().details;


                let testeventCard = eventCardTemplate.content.cloneNode(true);
                testeventCard.querySelector('.card-title').innerHTML = eventName;
                testeventCard.querySelector('.card-code').innerHTML = eventCode;
                testeventCard.querySelector('.card-status').innerHTML = eventStatus;
                testeventCard.querySelector('.card-wait_time').innerHTML = eventWait_time + "&nbsp Estimated wait time (in minutes)";
                testeventCard.querySelector('.card-current_queue').innerHTML = eventCurrent_queue + "&nbsp People in queue at the moment";
                testeventCard.querySelector('.card-text').innerHTML = eventDetails;
                testeventCard.querySelector('a').onclick = () => setEventData(eventCode);
                testeventCard.querySelector('#add').onclick = () => addQueue(eventCode);
                testeventCard.querySelector('#remove').onclick = () => removeQueue(eventCode);
                testeventCard.querySelector('img').src = `./images/${eventCode}.jpg`;
                eventCardGroup.appendChild(testeventCard);
            })

        })
}
populateCardsDynamically();


function addQueue(eventCode) {
    console.log("inside");
    db.collection("events").where("code", "==", eventCode)
        .get()
        .then(queryevents => {
            //see how many results you have got from the query
            size = queryevents.size;
            // get the documents of query
            events = queryevents.docs;
            if (size = 1) {
                id = events[0].id;
                console.log(id);
                //update method will add to the specified field in database, if that field does not exist, it will create that.
                db.collection("events").doc(id).update({
                    //Firebase documentation has this method for incrementation.
                    current_queue: firebase.firestore.FieldValue.increment(1),
                    wait_time: firebase.firestore.FieldValue.increment(2)
                })

            } else {
                console.log("Query has more than one data")
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function removeQueue(eventCode) {
    console.log("inside");
    db.collection("events").where("code", "==", eventCode)
        .get()
        .then(queryevents => {
            //see how many results you have got from the query
            size = queryevents.size;
            // get the documents of query
            events = queryevents.docs;
            if (size = 1) {
                id = events[0].id;
                console.log(id);
                //update method will add to the specified field in database, if that field does not exist, it will create that.
                db.collection("events").doc(id).update({
                    //Firebase documentation has this method for incrementation.
                    current_queue: firebase.firestore.FieldValue.increment(-1),
                    wait_time: firebase.firestore.FieldValue.increment(-2)
                })

            } else {
                console.log("Query has more than one data")
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}


function setEventData(id){
    localStorage.setItem ('eventCode', id);
}


// Live listener for changes in status
