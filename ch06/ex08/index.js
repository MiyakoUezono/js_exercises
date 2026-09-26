export function restrict(target, template){
    for(let key of Object.getOwnPropertyNames(target)){
        if(Reflect.ownKeys(template).includes(key) === false){
            delete target[key]
        }
    }
    return target
}

export function substract(target, ...sources){
    for(let source of sources){
        for(let key of Reflect.ownKeys(source)){
            if(Object.getOwnPropertyNames(target).includes(key)){
                delete target[key]
            }
        }
    }
    return target
}