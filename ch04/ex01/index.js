export function add(x,y){
    return({re:x.re+y.re, im:x.im+y.im})
}

export function sub(x,y){
    return({re:x.re-y.re, im:x.im-y.im})
}

export function mul(x,y){
    return({re:x.re*y.re - x.im*y.im, im:x.re*y.im+x.im*y.re})
}

export function div(x,y){
    return({re:(x.re*y.re+x.im*y.im)/(y.re**2 + y.im**2), im:(-x.re*y.im+x.im*y.re)/(y.re**2 + y.im**2)})
}


/*
console.log(add({re:Infinity, im:2},{re:3, im:4}))
*/