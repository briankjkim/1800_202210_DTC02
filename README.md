## 1800-DTC-Team 2 Queueing Application

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application to ...

Hi, my name is Kristopher and this is a test sentence. Nice to meet you!

Hi, my name is Brian. I'm excited about the project because it's fun!
	
Hi, my name is Arghavan. I'm here to share the conflict with you.

## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Google Firebase
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
    about_app.html           # displays the about_app page
    contact_us.html          # displays the contact_us page
    display_page.html        # displays display_page, which shows the events available
    main.html                # displays the main page
    support.html             # displays support page
    thanks_for_contacting_us.html # displays the thank you message after user fills contact_us
    thanks.html              # displays thanks.html page which is shown after user sends a review
    userprofile.html         # displays userprofile.html
               
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /EVENT1.jpg              # Images of events retrieved from Google and Unsplash
    /EVENT2.jpg              # 
    /EVENT3.jpg              #
    /EVENT4.jpg              #
    /EVENT5.jpg              #
    /EVENT6.jpg              #
    /EVENT7.jpg              #
    /EVENT8.jpg              #
├── scripts                  # Folder for scripts
    /authentication.js       # firebase authentication script
    /contact_us.js           # contains the script for support_request
    /display_page_new.js     # current js file for display_page.html
    /display_page.js         # js page used to populate events in the firestore database
    /firebaseAPI_DTC02.js    # contains information for firebase authentication and links
    /skeleton.js             # automatically loads nav and footer for all pages
    /userprofile.js          # contains the scripts for userprofile.html page
├── styles                   # Folder for styles
    /style.css               # Contains css information of the app

Firebase hosting files: 
├── .firebaserc...
    .firebase.json
    /public                  # Contains the files that are deployed by Firebase


```
