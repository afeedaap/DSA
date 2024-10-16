function recurssivefib(n){
    if(n<2){
        return n
    }
        return recurssivefib(n-1)+recurssivefib(n-2)
    }
    console.log(recurssivefib(1))
    console.log(recurssivefib(2))
    console.log(recurssivefib(3))