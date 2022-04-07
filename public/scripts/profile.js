var currentUser //put this right after you start script tag before writing any functions.

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userCountry = userDoc.data().country;
                    var userLanguage = userDoc.data().language;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userCountry != null) {
                        document.getElementById("countryInput").value = userCountry;
                    }
                    if (userLanguage != null) {
                        document.getElementById("languageInput").value = userLanguage;
                    }
                })
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    //Save User Data
    userName = document.getElementById('nameInput').value;
    userCountry = document.getElementById('countryInput').value;
    userLanguage = document.getElementById('languageInput').value;

    currentUser.update({
        name: userName,
        country: userCountry,
        language: userLanguage,
    })
    .then(() => {
        console.log("Document successfully updated!");
    })

    document.getElementById('personalInfoFields').disabled = true;
}