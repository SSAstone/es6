const numbers = [2, 3, 6, 43, 15, 50, 45, 32, 23];
const bigNum = numbers.filter(n => n < 30);
console.log(bigNum);
const products = [
    {id:01, name:'laptop', price: 75000},
    {id:02, name:'mobile', price: 5000},
    {id:03, name:'fold-laptop', price: 175000},
    {id:04, name:'cam-laptop', price: 7000},
];
const advais = products.filter(p => p.price < 20000);
console.log(advais);

const singel = numbers.find(n => n < 30);
console.log(singel);
const one = products.find(p => p.price < 20000);
console.log(one);