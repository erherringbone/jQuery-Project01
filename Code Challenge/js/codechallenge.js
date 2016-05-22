var array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6);

var count = 0;
var total = array.reduce(function(a,b) {
  return a + b;
});


console.log (total);
console.log (array);

$ ( "span" ).text("$6,500");


var array2 = [1, 2, 3, 4, 5], sum = 0;
$.each(array2, function (){sum += parseFloat(this) || 0;
});
console.log (array2);
console.log (sum);
