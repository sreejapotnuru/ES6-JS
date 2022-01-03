//old

var counter = 10;

counter = 5 ; // reassign the variable with the same name

var names = ['eid','sree'];

console.log(counter); // gives 5 as it is reassgined 
 
// we can declare same name in old js which creates confusion 

function myName()
{
    var name = 'adi';
    console.log(name);
}
myName();
//console.log(name); // cannot access name bcoz it is in local scope


var name1 = 'eid';

console.log("hello my name is "+name1);

function getBook(title,author)
{
    return {
        title: title,
        author:author
    };
}

var book=getBook("Harry Potter","JK");
console.log(book);
//ES 6 JS

//const and let are keyword which we use in ES6 JS 
const counter1 = 10;

//counter1 = 5;


const name2= 'sree';

console.log(`hello my name is "hello" is ${name2}`)
// new way of getting output use back ticks and also no need of + symbol 
// to get the value 
// we can use "" quotes n btw backticks 


for (let i=0;i<5;i++)
{
    console.log(i);
}




function getBook1(title,author)
{
    return {
        title,
        author
    };
}

var book=getBook1("Harry Potter","JK");
console.log(book);