export function eq(a, b) {
  let type_a = typeof a
  let type_b = typeof b
  if (type_a === type_b) {
    if(a === b) return true;
  }
  else if(a === undefined || a === null){
    if(b === undefined || b === null){
      return true;
    }
    else{
      return false
    }
  }
  else if(b === undefined || b === null){
    return false
  }
  else if(a instanceof Date === true || b instanceof Date === true){
    if(a.toString() === b.toString()){
      return true
    }
    else{
      return false
    }
  }
  else if(Number(a) === Number(b)){
    return true
  }
  else if(a.valueOf() === b.valueOf()){
    return true
  }
  else if(a.valueOf() === Number(b) || b.valueOf() === Number(a)){
    return true
  }
  else if(a.toString() === b.toString()){
    return true
  }
 return false;
}



export function lte(a, b) {
  let type_a = typeof a
  let type_b = typeof b
  if (type_a === type_b) {
    if(a < b || a === b) return true;
  }
  else if(a === undefined || b === undefined){
    if(b === null || a === null){
      return true;
    }
    else{
      return false
    }
  }
  else if(a === NaN || b === NaN){
    return false
  }
  else if(Number(a) !== undefined || Number(b) !== undefined){
    if(Number(a) === Number(b) || Number(a) < Number(b)){
      return true
    }
    else return false
  }
  else if(a.valueOf() !== undefined || b.valueOf() !== undefined){
    if(a.valueOf() === b.valueOf() || a.valueOf() < b.valueOf()){
    return true
    }
    else false
  }
  else if(a.toString() !== undefined || b.toString() !== undefined){
    if(a.toString() === b.toString() || a.toString() < b.toString()){
      console.log('Error')
      return true
    }
    else return false
  }
  else if(Number(a.valueOf()) === Number(b.valueOf()) || Number(a.valueOf()) < Number(b.valueOf())){
    return true
  }
 return false;
}