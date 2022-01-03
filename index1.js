//OLD WAY


var user = {
    name :'ed',
    age:25,
    sayName :function()
    {
        console.log('my name is '+this.name);
        var that=this;
        var fullname=function() {
            console.log("my name is "+that.name + "age is "  +that.age);
        };
        fullname();
    }
};
user.sayName();



// ES6 


const user1 = {
    name:'ed',
    age:25,
    sayName1:function(){
        console.log(`my name is ${this.name}`);
        const fullName = () => {
            console.log(`my name is ${this.name} and age is ${this.age}`);

        };
        fullName();
    }
};
user1.sayName1();