const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arrayOfArrays.length; i++) {
    const innerArray = arrayOfArrays[i];
    console.log(innerArray([2]));

    for (let a = 0; a < innerArray.length; a++) {
        element = innerArray[a];
        // console.log(element);
    }
}
