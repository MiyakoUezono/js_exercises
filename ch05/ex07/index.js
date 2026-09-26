function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());

/*
予想：false (return文実行後にfinallyが実行されるため)
実行結果：false
*/