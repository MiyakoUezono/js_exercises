export function equivalent (x,y) {
    return Math.round(x / 10**(-10)) === Math.round(y /10**(-10));
}

//console.log(equivalent(0.3-0.2, 0.1));
//console.log(equivalent(0.2-0.1, 0.1));
