//CONSTRUCTOR FUNCTIONS AND CLASSES


//OLD JAVASCRIPT 


function Person(name,age,hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
}

Person.prototype.sayName = function() {
    console.log("My name is " +this.name);
};

//var Ed = new Person("Ed",25,"Not nice");


//console.log(Ed);
//Ed.sayName();

function Ed(occupation,hobbbys,name,age,hairColor) {
    Person.call(this,name,age,hairColor);
    this.occupation = occupation;
    this.hobbbys = hobbbys;
}

Ed.prototype = Object.create(Person.prototype);
const person = new Ed("Dev","dancing","edwin",25,"notnice");

console.log(person);

person.sayName();


//ES6 


class ShoppingList {
    constructor(items, nr) {
        this.items = items;
        this.nr = nr;
    }
    sayList() {
        console.log(this.items);
    }
}

const myList = new ShoppingList(["Milk","Choco"],2);
//console.log(myList);

//myList.sayList();

class Product extends ShoppingList{
    constructor(items,nr,amount,cost) {
        super(items,nr);
        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(['redbull','chocolate','hdj'],3,2,20);

console.log(product);

product.sayList();