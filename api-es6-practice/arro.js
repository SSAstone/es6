const arro = (x, y) => {
    const num = x + y / 2;
    if(num % 2 === 0) {
        return 'true';
    }
    else if(num % 2 === 1) {
        return 'false';
    }
    else {
        return 'number is floot'
    }
}
const result = arro(3, 3);
console.log(result);