function writeReview() {
    console.log("in")
    let Subject = document.getElementById("subject").value;
    let Season = document.getElementById("season").value;
    let Level = document.getElementById("level").value;
    let Description = document.getElementById("description").value;
    let Flooded = document.querySelector('input[name="flooded"]:checked').value;
   
    console.log(Subject, Season, Level, Description, Flooded);


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("Reviews").add({
                        userID: userID,
                        subject: Subject,
                        level: Level,
                        season: Season,
                        description: Description,
                        flooded: Flooded,
                       

                    }).then(() => {
                        window.location.href = "thanks.html";
                    })
                })

        } else {
            // No user is signed in.
        }
    });

}
