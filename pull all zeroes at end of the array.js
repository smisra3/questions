const arr = [0, 0, 0, 1, 2, 3, 0, 0, 0, 12, 34, 0, 0, 1];

const putZeroesToEnd = arr => {
    let count = 0;
    arr.forEach((element, index, array) => element ? arr[count++] = array[index] : false);
    for (let index = count; index < arr.length; index++) {
        arr[index] = 0;
    }
};

putZeroesToEnd(arr);
console.log(arr);
