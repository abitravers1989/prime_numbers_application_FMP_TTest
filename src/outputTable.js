const Table = require('easy-table')

var OutputTable = function (){

 };

OutputTable.prototype.formattTable = function (multiplicationTable2DArray) {
  console.log(Table.print(multiplicationTable2DArray))
};

module.exports.OutputTable = OutputTable;


// const input2DArray = [ [ '-' , 2, 3, 5 ],
// [ 2, 4, 6, 8 ],
// [ 3, 6, 9, 12 ],
// [ 5, 10, 15, 20 ] ];
//
// ot = new OutputTable
// ot.formattTable(input2DArray);
