const set=new Set([1,2,3,4,5,6,6])
set.add(7,6)
console.log(set.has(43))
set.delete(3)
console.log(set.size);
set.clear()
console.log(set);//no vlaue in the console
for(let item of set){
    console.log(item);
}
