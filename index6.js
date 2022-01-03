//OLD JAVASCRIPT

//asynchronous operation
//PROMISES
console.log('start');
function getData(data,callback) {
    setTimeout(() => {
        console.log('reading from the databsse');
    callback({data : data});
    },2000);
}
getData(5,function(data) {
    console.log(data);
});


console.log('end');


//ES6


const prom =  new Promise( (resolve,reject) => {
    //Here is a async
    setTimeout(() => {
        resolve({user:'Ed',pass:'345bfhfkjj'});
},2000);
});
prom.then(data => {
    console.log(data);
});


const prom1 =  new Promise( (resolve,reject) => {
    //Here is a async
    setTimeout(() => {
        resolve(200);
},2000);
});
prom1.then(data => {
    console.log(data);
});


// Use of Reject 


const prom3 =  new Promise( (resolve,reject) => {
    //Here is a async
    setTimeout(() => {
        reject(new Error('Something went wrong'));
},2000);
});
prom3.then(data => {
    console.log(data);
})
.catch(err => console.log(err));