'use strict'
class Restaurant {
    constructor(interyer) {
        this.name = interyer.name
        this.door = interyer.door
        this.window = interyer.window
    }
    music() {
        console.log('Jazz');
    }
    
    static type = 'You are welcome!';
}

// const restaurant1 = new Restaurant({
//     name: 'Nur',
//     door: 'wood',
//     window: '1x2m'
// })

// console.log(restaurant1.door);
// restaurant1.music();
// console.log(restaurant1);
// console.log(Restaurant.type);

class Elit extends Restaurant {
    constructor(interyer) {
        super(interyer)
        this.art = interyer.art
    }
};

const elit1 = new Elit({
    name: 'Gold',
    door: 'red wood',
    window: '2x3m',
    art: 'Dali'
});
console.log(elit1);
elit1.music();
console.log(Elit.type);