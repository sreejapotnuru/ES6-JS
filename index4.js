//NEW ARRAY FUNCTIONS  


//OLD JAVASCRIPT 








// ES6 

const slist=['milk','butter','cow'];


//foreach

slist.forEach((product) => {
    console.log(product + "nice");
});

//index of each item
slist.forEach((product,index) => {
    console.log(`the index is ${index} and the product + "nice"`);
});


//map

// we can make a copy of the list 


const nlist=slist.map(item => {
    return item + "new";
});

console.log(nlist);

// we can remove return and brackets 
const nlist1=slist.map(item => item + "new");
console.log(nlist1);


//filter 


//filters the list what we want from the list 


const filterlist = slist.filter(item => {
    return item == 'milk';
});

console.log(filterlist);

// we can get rid of the paranthesis here too

const filterlist1 = slist.filter(item =>  item != 'milk');

console.log(filterlist1);
