let eventCode = localStorage.getItem("eventCode");
var currentUser;

function displayCards(eventCode) {
    let eventCardTemplate = document.getElementById("eventsCardTemplate");
    console.log("hello");


    db.collection(eventCode).get().then((doc) => {
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
            // testeventCard.querySelector('a').onclick = () => setEventData(eventCode);
            testeventCard.querySelector('#add').onclick = () => addQueue(eventCode);
            testeventCard.querySelector('#remove').onclick = () => removeQueue(eventCode);
            testeventCard.querySelector('img').src = `./images/${eventCode}.jpg`;
            // eventCardGroup.appendChild(testeventCard);
        })}

displayCards(eventCode);