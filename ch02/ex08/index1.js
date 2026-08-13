import * as acorn from "acorn";
let code =`
    let a
    a
    =
    3`
const ast = acorn.parse(code, {ecmaVersion: 8});
const output = JSON.stringify(ast,null,2);
console.log(output);

//fs.writeFile(,output)