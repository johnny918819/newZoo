class Animal {
    constructor(public name: string, public species: string, public numberOfLegs: number, public sound: string) {
    }
}
class Bird extends Animal {
    constructor(name: string, species: string, numberOfLegs: number, sound: string, public canFly: boolean) {
        super(name, species, numberOfLegs, sound);
    }
}
class Monkey extends Animal {
    public flingingPoo() {
        return "Splat";
    }
    constructor(name: string, species: string, numberOfLegs: number, sound: string) {
        super(name, species, numberOfLegs, sound);
    }
}
class Cat extends Animal {
    constructor(name: string, species: string, numberOfLegs: number, sound: string, public jumpHeight: number) {
        super(name, species, numberOfLegs, sound);
    }
}

let emu = new Bird(`Funky Feathers`, `Avian`, 2, `Bawk?`, false);
let turkey = new Bird(`The Gobbler`, `Avian`, 2, `Gobble, Gobble`, true);
let chicken = new Bird(`Pecky`, `Avian`, 2, `Bwawk?`, false);

let gorilla = new Monkey(`Hamarabe`, `Primate`, 2, `Ooo Ahh`);
let chimpanzee = new Monkey(`George`, `Primate`, 2, `Ahh Ooo`);
let spiderMonkey = new Monkey(`Hannibal`, `Primate`, 2, `Aaa Aaa!`);

let panther = new Cat(`Shadow`, `Feline`, 2, `Rar`, 12);
let cougar = new Cat(`Spike`, `Feline`, 2, `Scream`, 10);
let tiger = new Cat(`Stripes`, `Feline`, 2, `Chuff`, 16);



