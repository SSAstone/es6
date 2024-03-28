const numbers = [1, 3, 5, 7, 9];
const even = numbers.map(n => n + 1);
// console.log(even);

const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers2.filter(n => n % 10 === 0);
// console.log(divisible);
const divisibleFind = numbers2.find(n => n % 10 === 0);
// console.log(divisibleFind);

const numbers3 = [1, 9, 17, 22];
const sum = numbers3.reduce((p, c) => p + c, 0);
// console.log(sum);

let total = 0;
for (let num of numbers3) {
    total += num;
}
// console.log(total);

const people = [
    { name: 'meena', age: 20 },
    { name: 'rina', age: 15 },
    { name: 'meenata', age: 22 },
];
let y = 0;
for (let m of people) {
    // console.log(m.age)
    y += m.age;
}
// console.log(y);

const totalSum = people.reduce((pri, cru) => pri + cru.age, 0);
console.log(totalSum);



const student = {
    name: 'fredie',
    age: 26
};
// console.log(student.age);

const data = {
    location: [
        {
            latitude: '23.2 , 64.4',
            longitude: '45.3, 56.7',
            city: 'oganda',
            country: 'bd'
        }
    ]
};
// console.log(data.location[0].city);

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.geo.lat);
// console.log(user.company.name);
