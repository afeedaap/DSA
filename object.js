const obj={
    name:"afeeda",
    age:28,
    printfullname:function(){
        console.log(this.name)
    }
  
}
// obj.printfullname()
// obj.place="kariyad"
// console.log(obj);
// delete obj.place
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj);
console.log(Object.keys(obj))//return keys array
console.log(Object.values(obj));
console.log(Object.entries(obj));
