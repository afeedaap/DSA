function recurssivefact(n){
if(n===1){
    return 1
}
    return n*recurssivefact(n-1)
}
console.log(recurssivefact(6))
