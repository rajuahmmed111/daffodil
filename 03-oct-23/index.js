// var items = ['mobile', 'pen', 'laptop', 'fan', 'table']
// for (var i = 0; i < items.length; i++){
//     var item = items[i];
//     console.log(i, item)
// }


var items = [
    ['mobile', 'earPhone', 'laptop', 'soundBox', 'powerBank'],
    ['table', 'marker', 'book', 'pen', 'chair'],
    ['road', 'house', 'school', 'collage', 'university'],
];
for (var i = 0; i < items.length; i++) {
    var cube = items[i];
    for (var j = 0; j < cube.length; j++) {
        console.log(cube[j])
        // display("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
