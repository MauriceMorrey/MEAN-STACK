class Ninja {
    constructor(name){
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
    }
    showStats(){
      console.log(this.name, " has ", this.strength, " strength, and ", this.speed, " speed. Their health is currently at: ", this.health)
      return this;
    }
    sayName(){
      console.log("Hello, my name is: ", this.name, " and I am a Ninja ")
      return this;
    }
    drinkSake(){
      this.health += 10;
      return this;
    }
  };

  class Sensei extends Ninja{
    constructor(name){
      super(name);
      this.name = name;
      this.health = 200;
      this.strength = 10;
      this.speed = 10;
      this.wisdom = 10;
    }
    speakWisdom(){
      super.drinkSake();
      console.log("Man who sleep with itchy bum, wake up with smelly finger.");
      return this;
    }
  }

var superSensei = new Sensei("Master Splinter");
const Ninja3 = new Ninja("Green");
