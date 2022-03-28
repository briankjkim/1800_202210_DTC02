function insertName() {
    // to check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // let me to know who is the user that logged in to get the UID
            currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
            currentUser.get().then(userDoc => {
                //get the user name
                var user_Name = userDoc.data().name;
                console.log(user_Name);
                $("#name-goes-here").text(user_Name); //jquery
                // document.getElementByID("name-goes-here").innetText=user_Name;
            })
        }

    })
}
insertName();


//--------------------------------------------------------------------------
// This is a function that we call only ONE time, to populate the database.
// It can be invoked one-time by typing "writeQueues();" at the inspector console.
// "queues" collection with a few hard-coded documents.
// Instead of hard-coding it, you can also read from csv, or json file.
//--------------------------------------------------------------------------


function writeQueues() {
    //define a variable for the collection you want to create in Firestore to populate data
    var queuesRef = db.collection("queues");

    queuesRef.add({
        code: "A01",
        name: "Vancouver Olympic Cauldron",
        city: "Vancouver",
        number_of_people_in_queue: 10,
        estimated_wait_time: "10 minutes",
        status: "Open"
    });
    queuesRef.add({
        code: "A02",
        name: "Olympic Village Museum",
        city: "Vancouver",
        number_of_people_in_queue: 15,
        estimated_wait_time: "10 minutes",
        status: "Open"

    });
    queuesRef.add({
        code: "A03",
        name: "Stanley Park",
        city: "Vancouver",
        number_of_people_in_queue: 5,
        estimated_wait_time: "10 minutes",
        status: "Open"
    });
}




//---------------------------------------------------------------------
// This is a function that is called when everytime the page loads
// to read from the queues collection, go through each card,
// and dynamically creates a bootstrap card to display each queue.
//---------------------------------------------------------------------
function populateCardsDynamically() {

    let queueCardTemplate = document.getElementById("queueCardTemplate");  //card template
    let queueCardGroup = document.getElementById("queueCardGroup");   //where to append card

    db.collection("queues").get()
        .then(allQueues => {
            allQueues.forEach(doc => {
                var queueID = doc.data().code; //gets the event attraction unique ID
                var queueName = doc.data().name; //gets the name of event/attraction unique ID 
                var queueCity = doc.data().city; //gets the city event/attraction is located in
                var queueNumberofPeopleinQueue = doc.data().number_of_people_in_queue; //gets the current number of people in queue
                var queueEstimatedWaitTime = doc.data().estimated_wait_time; //gets the estimated wait time for that specific queue
                var queueStatus = doc.data().status; //gets the status of lineup of the event/attraction 
                let testQueueCard = queueCardTemplate.content.cloneNode(true);
                testQueueCard.querySelector('.card-title').innerHTML = queueName;
                testQueueCard.querySelector('.card-ID').innerHTML = queueID;
                testQueueCard.querySelector('.card-city').innerHTML = queueCity;
                testQueueCard.querySelector('.card-number_of_people_in_queue').innerHTML = queueNumberofPeopleinQueue;
                testQueueCard.querySelector('.card-estimated_wait_time').innerHTML = queueEstimatedWaitTime;
                testQueueCard.querySelector('.card-status').innerHTML = queueStatus;
                testQueueCard.querySelector('a').onclick = () => setQueueData(queueID);

                //next 2 lines are new for demo#11
                //this line sets the id attribute for the <i> tag in the format of "save-queueID" 
                //so later we know which hike to bookmark based on which queue was clicked
                testQueueCard.querySelector('i').id = 'save-' + queueID;
                // this line will call a function to save the hikes to the user's document             
                testQueueCard.querySelector('i').onclick = () => saveBookmark(queueID);
                testQueueCard.querySelector('.read-more').href = "eachQueue.html?queueName=" + queueName + "&id=" + queueID;

                testQueueCard.querySelector('img').src = `./images/${queueID}.jpg`;
                queueCardGroup.appendChild(testQueueCard);
            })
        })
}

populateCardsDynamically();
//--------------------------------------------------------------
// This function saves the current hikeID into the localStorage
//--------------------------------------------------------------
function setQueueData(id) {
    localStorage.setItem('queueID', id);
}