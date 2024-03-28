const add = (x, y, z) => { 
    x * y * z;
};
const ans = add(1, 2, 3);
// console.log(ans);

const line = `
I am a web developer.
I love rto code.
I love to eat biryani.
`
// console.log(line);

const deAdd = (a, b = 0) => a + b;
const ans2 = deAdd(100);
// console.log(ans2);



const friendAdd = (friended) => {
    let box = [];
    for(num of friended) {
        // let number = num.length;
        // console.log(number);
        if(num.length % 2 == 0) {
            box.push(num);           
        };
    };
    return box;
    
}; 
const friends = ['abul', 'kachel', 'macl', 'jseal', 'dsael'];
const friend = friendAdd(friends);
console.log(friend);




const square = (numbers) => {
    let x = 0;
    for(number of numbers) {
        const num = number * number;
        // console.log(num);
        x += num;
        // console.log(x);
    };
    let avg = x / numbers.length;
    return avg;
};
const numIs = [2, 4, 5, 6];
const answer = square(numIs);
// console.log(answer);


const array = (a, b) => {
    const max = [...a, ...b];
    return Math.max(...max);

}
const arr1 = [12, 23, 54, 43];
const arr2 = [54, 12, 34];
// console.log(array(arr1, arr2));

