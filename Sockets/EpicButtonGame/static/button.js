// Make connection
var socket = io.connect("http://localhost:4000");

//Query DOM

var press = document.getElementById("pressing"),
    push = document.getElementById("pushing"),
    reset = document.getElementById("resetting");


//Emit Events
push.addEventListener("click", function(e){
    e.preventDefault();
    socket.emit("pushing_button", {
        // message: "Sending button click to client from server" 
    });                
});

reset.addEventListener("click", function(e){
    e.preventDefault();
    socket.emit("resetting_count", {
        // message: "Sending reset click to server from client" 
    });                     
});

//Listen for Events
socket.on('update_count', function(data){
    console.log(data);
    press.innerHTML = "<h4>"+ "The push button has been pressed " + data.count + " time(s)." + "</h4>";
});
  
socket.on('reset_count', function(data){
    press.innerHTML = "<h4>"+ "The push button has been pressed " + data.count + " time(s)." + "</h4>";
})
    