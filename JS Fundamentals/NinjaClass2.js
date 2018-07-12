function Ninja(name){
    // var self = this;
    var speed = 3;
    var strength = 100;
    this.name = name;
    this.health = 3;
    this.showStats = function(){
        console.log("This Ninja's name is", this.name, "with a current health of", this.health, "speed of", speed, "and strength of", strength);
        return this;
    }
    this.kick = function(ninja){
        var damage = strength * 15;
        ninja.health -= damage;
        console.log(ninja.name, " was kicked by ", this.name, " and lost ", damage, "  health ");
        return this;
    }
}

Ninja.prototype.sayName = function(){
    console.log("My Ninja name is", this.name);
    return this;
}


Ninja.prototype.drinkSake = function(){
    this.health +=10;
    console.log("This Ninja's current health is", this.health);
    return this;
}

Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(ninja.name, " was punched by ", this.name, " and lost 5 Health!")
    return this;
}

Ninja.prototype.isNinja = function(ninja){
    return (ninja instanceof Ninja);
}

var NInja1 = new Ninja("Blue");
var NInja2 = new Ninja("Red");

