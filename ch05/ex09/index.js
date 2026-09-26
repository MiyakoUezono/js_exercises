export function json(str){
    try{
        return {success: true, data: JSON.parse(str)};
    }
    catch(error){
        return {success: false, error: error.message};
    }
}
/*
console.log(json('{"x": 1, "y": 20}')) //=> { success: true, data: { x: 1, y: 20 } }
console.log(json('{"x": 1, "y": 20}//あいうえお')) //
=> { success: true, data: { x: 1, y: 20 } }
{
  success: false,
  error: 'Unexpected non-whitespace character after JSON at position 17 (line 1 column 18)'
}
*/
//console.log(json('"abc"'))