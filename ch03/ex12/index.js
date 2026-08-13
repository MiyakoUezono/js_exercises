class Conversion{
    constructor(x){
        this.x = x
    }
    valueOf(){
        return this.x
    }
    toString(){
        return typeof this.x
        }
}

let obj = new Conversion({x:1,y:2});
console.log(obj.toString())
console.log(obj.valueOf())
