const users = [{ id: 0012, name: 'abule', job: 'doctor' }];
// console.log(users);
console.log(users[0].name);


const user = {
    id: 001,
    name: 'korim',
    address: {
        street: {
            first: '23/A koakata',
            second: 'thard flor',
            third: 'right'
        },
        city: 'dada'
    }
};
const userFlor = user.address.stret?.second;
console.log(userFlor);