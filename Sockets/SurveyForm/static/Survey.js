// Make connection
var socket = io.connect("http://localhost:4000");

//Query DOM
//  var Information = document.getElementById("Info"),
// var LuckyNumber = document.getElementById("LuckyNumber"),
var LuckyNumber = document.getElementById("LuckyNumber"),
    button = document.getElementById("Submit"),
    myLocation = document.getElementById("location"),
    language = document.getElementById("language"),   
    comment = document.getElementById("commentarea"), 
    myName = document.getElementById("name"),
    output = document.getElementById("output");

                   

//Emit Events
button.addEventListener("click", function(){
    socket.emit("posting_form", {
        // Information: Info.value,
        // LuckyNumber: LuckyNumber.value,
        myName: myName.value,
        myLocation: myLocation.value,
        language: language.value,
        comment: comment.value, 
    });                     
    
    // socket.emit("random_number", {
    //     message: "Random number generated"
    // });

    // Info.value = "",
    // LuckyNumber.value = "";
})

//Listen for Events
socket.on("updated_message", function(data){
    output.innerHTML += "<p>" + "You emitted the following information to the server: { name: " + data.myName + ", location: "+ data.myLocation + ", language: "+ data.language + ", comment: "+ data.comment +  "}"+"</p>";
});

socket.on("random_number", function(data){
    LuckyNumber.innerHTML += "<p>" + "Your lucky number emitted by the server is: " + data.LuckyNumber +"</p>";
})