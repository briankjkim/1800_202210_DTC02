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
                testeventCard.querySelector('img').src = `./images/${eventCode}.jpg`;
                eventCardGroup.appendChild(testeventCard);
            })

        })
}
populateCardsDynamically();



