
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


