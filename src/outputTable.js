var Table = require('easy-table')

var data = [ [ null, 2, 3, 5 ],
[ 2, 4, 6, 8 ],
[ 3, 6, 9, 12 ],
[ 5, 10, 15, 20 ] ];

// var t = new Table
//
// data.forEach(function(product){
//    t.cell(data[1][0][2])
//    t.cell(data[2][0][2])
//    t.cell(data[3][0][2])
//    t.newRow();
// })

console.log(Table.print(data))
