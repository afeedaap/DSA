const map = new Map([['a', 10], ['b', 20]]); 
map.set('c',20)// add key-values
map.delete('c')//delete 
console.log(map.has('b'));//check b key existing or not
console.log(map.size);
map.clear()//finaly clear key-value pair from map
for (const[key,value] of map){
    console.log(`${key}:${value}`);
}