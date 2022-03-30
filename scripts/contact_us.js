function writeReview() {
    console.log("in")
    let Subject = document.getElementById("subject").value;
    let Level = document.getElementById("level").value;
    let Season = document.getElementById("season").value;
    let Description = document.getElementById("description").value;
    let Rating = document.querySelector('input[name="rating"]:checked').value;
    console.log(Subject, Level, Season, Description, Rating);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("Reviews").add({
                        code: hikeID,
                        userID: userID,
                        subject: Subject,
                        level: Level,
                        season: Season,
                        description: Description,
                        rating: Rating,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        window.location.href = "thanks.html"; //new line added
                    })
                })

        } else {
            // No user is signed in.
        }
    });

}