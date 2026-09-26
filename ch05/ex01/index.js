function func(){
    const c = 2;
    if(c===2){
        const c = 3;
        console.log("c =",c); //c=3
    }
    return c;
}

console.log(func()) //2