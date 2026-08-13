{
    let s1 = Symbol("propname")
    let s2 = Symbol("propname")
    let o = {}
    o[s1] = 1;
    o[s2] =2;

    console.log(o) //{ Symbol(propname): 1, Symbol(propname): 2 }
}

{
    let s3 = Symbol.for("propname")
    let s4 = Symbol.for("propname")
    let o = {}
    o[s3] = 1;
    o[s4] =2;

    console.log(o) //{ Symbol(propname): 2 }
}

