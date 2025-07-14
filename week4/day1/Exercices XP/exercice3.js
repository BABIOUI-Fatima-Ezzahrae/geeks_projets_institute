const isString = (y) => {
    if (typeof(y) === 'string') {
        return true;
    }else{
        return false;
    }
}

console.log(isString('hello world'));
console.log(isString([1, 2, 3]));
