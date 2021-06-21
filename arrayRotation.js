const leftRotate = (arr, d, n) => {
    for (i = 0; i < d; i++) {
        let temp = arr[0];
        for (let j = 0; j < n - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[n - 1] = temp;
    }
}
let array = [1, 2, 3, 4, 5];
let n = 5;
let d = 4;
leftRotate(array, d, n);
console.log(array)

