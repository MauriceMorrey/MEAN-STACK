// Make connection
var socket = io.connect("http://localhost:4000");

//Query DOM
var button = document.getElementById("button"),
    message = document.getElementById("message"),
    chat = document.getElementById("chat"),
    users = document.getElementById("users");  
       


//Emit Events
button.addEventListener("click", function(){
    socket.emit("send", {
        message: message.value, 
    });   
});  

//Listen for Events
socket.on("new_user", function(user){
    users.innerHTML += "<p><i> Name:" +  user.name +"  Id: <i>"  + user.id +"</p>";
});

socket.on("new_message", function(data){
    chat.innerHTML += "<p><strong>" + data.user + ": </strong>"+ data.message +"</p>";
    // <strong>' + data.handle + ': </strong>'
});

socket.on('prompt',function(id){
    var name
    while(!name){
        name = prompt("new chat, who dis")
    }
    socket.emit('create_user',{name:name,id:id.id})
})

socket.on('delete_user',function(data){
    console.log(data)
    $(`#${data.id}`).remove()
})
