const arr = [1, 2, 3, 4, 5];
const X = 10;
let hashArr = [];

const storeAllPair = arr => X => {
    var t = [];
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
            hashArr[arr[i] + arr[j]] = { i: arr[i], j: arr[j] };
    console.log(hashArr)
    for (let i = 0; i < hashArr.length; i++) {
        for (let j = i + 1; j < hashArr.length; j++) {
            if ((i + j) === X && (i !== j) && hashArr[i] !== undefined && hashArr[j] !== undefined) {
                console.log("Numbers are : " + hashArr[i].i + " " + hashArr[j].i + " " + hashArr[i].j + " " + hashArr[j].j);
            }
        }
    }
};

storeAllPair(arr)(X);

//duplicate answer issue not solved.