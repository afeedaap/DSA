function shortest(str){
    // let words = str.split(' ');
    let words = str.trim().split(/\s+/);
    let shortestword=words[0]
    for(let i=1;i<words.length;i++){
        if(words[i].length<shortestword.length){
            shortestword=words[i]
        }
    }
    return shortestword

}
let str="iam live in  india"
console.log(shortest(str));