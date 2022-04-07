function writeSupport() {
    console.log("in")
    let Subject = document.getElementById("subject").value;
    let Season = document.getElementById("season").value;
    let Type = document.getElementById("type_of_support").value;
    let Description = document.getElementById("description").value;


    console.log(Subject, Season, Type, Description,);


    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var currentUser = db.collection("users").doc(user.uid)
            var userID = user.uid;
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var userEmail = userDoc.data().email;
                    db.collection("Support_requests").add({
                        userID: userID,
                        subject: Subject,
                        type_of_support: Type,
                        season: Season,
                        description: Description,



                    }).then(() => {
                        window.location.href = "thanks_for_contacting_us.html";
                    })
                })

        } else {
            // No user is signed in.
        }
    });

}
