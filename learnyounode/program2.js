var list = process.argv;
var sum = 0;
for (var i = 2; i<list.length; i++) {
    sum += Number(list[i]);
}
console.log(sum);
