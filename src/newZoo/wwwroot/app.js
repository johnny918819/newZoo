var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, species, numberOfLegs, sound) {
        this.name = name;
        this.species = species;
        this.numberOfLegs = numberOfLegs;
        this.sound = sound;
    }
    return Animal;
}());
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird(name, species, numberOfLegs, sound, canFly) {
        var _this = _super.call(this, name, species, numberOfLegs, sound) || this;
        _this.canFly = canFly;
        return _this;
    }
    return Bird;
}(Animal));
var Monkey = (function (_super) {
    __extends(Monkey, _super);
    function Monkey(name, species, numberOfLegs, sound) {
        return _super.call(this, name, species, numberOfLegs, sound) || this;
    }
    Monkey.prototype.flingingPoo = function () {
        return "Splat";
    };
    return Monkey;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, species, numberOfLegs, sound, jumpHeight) {
        var _this = _super.call(this, name, species, numberOfLegs, sound) || this;
        _this.jumpHeight = jumpHeight;
        return _this;
    }
    return Cat;
}(Animal));
var emu = new Bird("Funky Feathers", "Avian", 2, "Bawk?", false);
var turkey = new Bird("The Gobbler", "Avian", 2, "Gobble, Gobble", true);
var chicken = new Bird("Pecky", "Avian", 2, "Bwawk?", false);
var gorilla = new Monkey("Hamarabe", "Primate", 2, "Ooo Ahh");
var chimpanzee = new Monkey("George", "Primate", 2, "Ahh Ooo");
var spiderMonkey = new Monkey("Hannibal", "Primate", 2, "Aaa Aaa!");
var panther = new Cat("Shadow", "Feline", 2, "Rar", 12);
var cougar = new Cat("Spike", "Feline", 2, "Scream", 10);
var tiger = new Cat("Stripes", "Feline", 2, "Chuff", 16);
