function Event1(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
console.log(concert.getDetails())

// this is the best way to add any methods if you are inheriting the Object
Event.prototype.cancelEvent = function() {
    return 'Event Cancelled'
}

Concert.prototype.getDetails = function() {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}
const concert2 = new Concert("Happy days", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Lush Vibes", "Wembley", "2024-03-08", "Si Twig")

console.log(concert2.getDetails())
console.log(concert3.getDetails())

/**********/

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

Event.prototype.getDetails = function() {
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}


function Conference(name, location, date, keynoteSpeaker) {
    Event.call(this, name, location, date)
    this.keynoteSpeaker = keynoteSpeaker
}

Conference.prototype = Object.create(Event.prototype)
Conference.prototype.constructor = Conference

Conference.prototype.getDetails = function() {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Keynote Speaker: ${this.keynoteSpeaker}`
}
/*
Challenge:
    1. Set up a constructor for 'Conference' which 
       should take in 'keynoteSpeaker' as a parameter. 
    2. 'Conference' should inherit from 'Event'.
    3. 'Conference' should have its own method 'getDetails'
       which calls Event's getDetails method and returns a string 
       with name, location, date, and keynote speaker.  
    4. When you set up an instance of Conference and call 
       getDetails you should log out: 
       Event: 10 Nights of JS, Location: Scrimba HQ, Date: 2025-09-29 Keynote Speaker: Ashley Smith
       📝 The new method should be on the prototype. 
*/

const conference = new Conference("10 Nights of JS", "Scrimba HQ", "2025-09-29", "Ashley Smith")
console.log(conference.getDetails())


//* Get and Set, Challenge 

class Holiday {    
    /*
    Challenge:
        1. Make 'price' a private field.
        2. Create a getter for price which appends a $ sign 
           to the front and displays it to a max of 2 decimal 
           places. 
        3. Create a setter for price which updates price with a 
           new price.
        4. Test! 
    */
        #destination
        #price
        constructor(destination, price) {
            this.#destination = destination
            this.#price = price
        }
    
        get destination() {
            return this.#destination
        }
        
        get price() {
            return `$${(this.#price).toFixed(2)}`
        }
    
        set destination(newDestination) {
            if (typeof newDestination !== 'string' || newDestination.length <= 0){
                throw new Error('Destination not valid')
            }
            this.#destination = newDestination
        }
        
        set price(newPrice) {
            if (typeof newPrice !== 'number' || newPrice <= 0){
                throw new Error('The amount is not correct')
            }
            this.#price = newPrice
        }
    }
    
    const safari = new Holiday('Kenya', 1000)
    console.log(safari.price)
    safari.price = 700
    console.log(safari.price)



class Character {
    static countCharacters = 0
    #health = 100
    constructor(name, health){
        this.name = name
        this.#health = health
        this.isAlice = true
        Character.incrementCount()
    }

    
    static incrementCount() {
        Character.countCharacters++
    }

    static getCount() {
        return Character.countCharacters
    }

    get health() {
        return this.#health
    }

    set health(newHealth) {
        if (newHealth < 0){
            throw new Error("The health is less than zero");            
        }
        this.#health = newHealth
    }
    
    takeDamage(damage) {
        this.#health -= damage
    }
    
    get isAlive() {
        return this.#health > 0;
      }
      
    getStatus() {
        return `${this.name} - Health: ${this.health}, Status: ${this.isAlive ? 'Alive' : 'Dead'}`
    }
        
}

const hero = new Character('Ahmed', 100)
const hero1 = new Character('Mosa', 100)
const hero2 = new Character('Mosa', 100)
const hero3 = new Character('Mosa', 100)
console.log(hero)
console.log(Character.getCount())
Character.incrementCount()
console.log(Character.getCount())
console.log(hero.health)
hero.health = 5
console.log(hero.health)
hero.takeDamage(5)
console.log(hero.health)
console.log(hero.getStatus())


class Hero extends Character{
    constructor(name, health){
        super(name, health)
        this.inventory = []
    }
    pickUpItem(item){
        this.inventory.push(item)
    }
    getItems() {
        return this.inventory.join(', ')
    }

}

const mano = new Hero('Mano', 100)
console.log(mano)
mano.pickUpItem('Sowrd')
mano.pickUpItem('Gun')
console.log(mano)
console.log(mano.getItems())
console.log(mano.getStatus())


  /************************************* */

  class Character {
    static #count = 0; // Private static property to track instances
    #health; // Private instance property
  
    constructor(name) {
      this.name = name;
      this.#health = 100; // Initialize health to 100
      Character.incrementCount();
    }
  
    // Health getter/setter with validation
    get health() {
      return this.#health;
    }
  
    set health(value) {
      this.#health = Math.max(0, value); // Prevent health from going below 0
    }
  
    // Alive status getter
    get isAlive() {
      return this.#health > 0;
    }
  
    // Damage method
    takeDamage(amount) {
      this.health = this.#health - amount; // Use setter for validation
    }
  
    // Status report method
    getStatus() {
      return `${this.name} - Health: ${this.health}, Status: ${this.isAlive ? 'Alive' : 'Dead'}`;
    }
  
    // Static methods
    static incrementCount() {
      Character.count++;
    }
  
    static getCount() {
      return Character.count;
    }
  }

// Create characters
const hero = new Character("Aragorn");
const villain = new Character("Sauron");

console.log(Character.getCount()); // 2

hero.takeDamage(30);
console.log(hero.health); // 70
console.log(hero.isAlive); // true
console.log(hero.getStatus()); // "Aragorn - Health: 70, Status: Alive"

villain.takeDamage(150);
console.log(villain.health); // 0
console.log(villain.isAlive); // false
console.log(villain.getStatus()); // "Sauron - Health: 0, Status: Dead"