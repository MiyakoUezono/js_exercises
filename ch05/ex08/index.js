let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);

/*
予想：5
finallyは必ず実行されるため、breakがcountinueに上書きされるため
実行結果：5
*/