const numbers = [2, 3, 4, 5];
const doubl = num => num * 2;
const makeDouble = numbers.map(doubl);
// console.log(makeDouble);
const makeSquer = numbers.map( num => num * num );
// console.log(makeSquer);

const number = [23, 3, 45, 12];
const vag = number.map(x => x / 3);
// console.log(vag);

const  friends = ['tom hlad', 'tom bland', 'tom kaland'];
const friendLetters = friends.map( f => f.length );
// console.log(friendLetters);

const products = [
    {id:01, name:'laptop', price: 75000},
    {id:02, name:'mobile', price: 5000},
    {id:03, name:'fold-laptop', price: 175000},
    {id:04, name:'cam-laptop', price: 7000},
];

// const item = products.map(p => console.log(p));
const items = products.map(p => p.name);
const itemsp = products.map(p => p.price);

console.log(items);
console.log(itemsp);

