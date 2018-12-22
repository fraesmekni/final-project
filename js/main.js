// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsvWnl17HAKjhQgyuJKUM1eAgcUEnQNlU",
    authDomain: "agriculture-2ea7f.firebaseapp.com",
    databaseURL: "https://agriculture-2ea7f.firebaseio.com",
    projectId: "agriculture-2ea7f",
    storageBucket: "agriculture-2ea7f.appspot.com",
    messagingSenderId: "1094762054350"
  };
  firebase.initializeApp(config);
  //reference messages collection

 
//listen for submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
 //submit form
function submitForm(e){
    e.preventDefault();

   //get values 
var name=getInputVal('name');
var track=getInputVal('track');
var message=getInputVal('message');
var contactForm=getInputVal('contactForm');
//save maessage
saveMessage(nanme,track,message);
}



//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
//function save the information into the firebase 
function saveMessage(name,track,message){
    newMessageRef=messagesRef.psh();
    newMessageRef.set({
        name:name,
        track:track,
        message:message,

    });
}





