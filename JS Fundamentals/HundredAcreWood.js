var tigger = { 
    character: "Tigger", 
    north: winnie,        // assuming that pooh is an object that has already been declared
    // greet: function(){
    //         console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    //         }
};
var winnie = { 
    character: "Winnie the Pooh",
    south: tigger,  
    north: robin,
    west: piglet,  
    east: bees,           
};
var piglet = { 
    character: "Piglet",
    north: owl,
    east: winnie,        
};
var bees = { 
    character: "Bees",
    north: rabbit,
    west: winnie,  
 };
var owl = { 
    character: "Owl",
    south: piglet,
    east: robin,
};
var rabbit = { 
    character: "Rabbit ",
    south: bees,
    east: gopher,
    west: robin,
 };
var robin = { 
    character: "Christopher Robin",
    south: winnie,  
    north: kanga,
    west: owl,  
    east: rabbit, 
};
var gopher = { 
    character: "Gopher",
    west: rabbit, 
};
var kanga = {
    character: "Kanga",
    south: robin,  
    north: eeyore, 
};
var eeyore = { 
    character: "Eeyore",
    south: kanga,
    east: heffalumps,
};
var heffalumps = { 
    character: "Heffalumps",
    west: eeyore,
};

winnie.south = tigger;
tigger.north = winnie;
winnie.west = piglet;
winnie.east = bees;
winnie.north = robin;
winnie.north.west = owl;
winnie.north.east = rabbit;
rabbit.east = gopher;
robin.north = kanga;
kanga.north = eeyore;
kanga.north.east = heffalumps;

var player = {
        location: tigger
    }

var move = function move(direction){
    console.log("You are now in", player.location, "'s home");
}
