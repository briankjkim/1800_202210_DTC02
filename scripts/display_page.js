function writeEvents() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("events");

    hikesRef.add({
        code: "EVENT1",
        name: "Vancouver Olympic Cauldron",
        current_queue: "0",
        status: "Open",
        wait_time: "0 Minute",
        details: "Description goes here"
    });
    hikesRef.add({
        code: "EVENT2",
        name: "Olympic Village Museum",
        current_queue: "0",
        status: "Open",
        wait_time: "0 Minute",
        details: "Description goes here"
    });
    hikesRef.add({
        code: "EVENT3",
        name: "Stanley Park",
        current_queue: "0",
        status: "Open",
        wait_time: "0 Minute",
        details: "Description goes here"
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("eventCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name; // get value of the "name" key
                var details = doc.data().details; // get value of the "details" key
                var wait_time = doc.data().wait_time;
                var status = doc.data().status;
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = "./images/" + doc.data().code + ".jpg";
                newcard.querySelector('.card-info').innerHTML = wait_time + "<br>" + status;

                //give unique ids to all elements for future use
                newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

displayCards("events");


