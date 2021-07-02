// Class definition
class Home {
    // properties
    windows = 0;
    doors = 0;
    started = false;

    // runs when it creates a new instance
    constructor(){
        this.started = true;
        console.log('Starting a new Home')
    }

    // methods
    print(){
        console.log(`Windows: ${this.windows} - Doors: ${this.doors}`)
    }
}

// Class instances (objects)
const marioHouse = new Home()
marioHouse.windows =  10;
marioHouse.doors = 3;
marioHouse.print()

const tristonHouse = new Home()
tristonHouse.windows =  7;
tristonHouse.doors = 6;
tristonHouse.print()

console.log(marioHouse, tristonHouse)

/**
 * Object doing the same a the class
 */
const marioObj = {
    windows: 10,
    doors: 3,
    print: ()=>{
        console.log(`Windows: ${this.windows} - Doors: ${this.doors}`)
    }
}

const tristonObj = {
    windows: 10,
    doors: 3,
    print: ()=>{
        console.log(`Windows: ${this.windows} - Doors: ${this.doors}`)
    }
}

console.log(Set,(typeof (new Set())), Home)