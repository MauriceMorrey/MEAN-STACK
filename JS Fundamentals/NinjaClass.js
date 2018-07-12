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

Ninja.prototype.sayName = function(){
    console.log("My Ninja name is", this.name);
    return this;
}

}

Ninja.prototype.drinkSake = function(){
    this.health +=10;
    console.log("This Ninja's current health is", this.health);
    return this;
}

var NInja1 = new Ninja("Blue");

