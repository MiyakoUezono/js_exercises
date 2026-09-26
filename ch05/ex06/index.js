for(let i = 0; i<2; i++){
    try{
        console.log("start")
        console.log(n)
        console.log("---")
    }
    catch(e){
        console.log(e)
        break;
    }
    finally{
        console.log("end")
    }
}

/*
実行結果
start
ReferenceError: n is not defined
    at file:///C:/Users/r00528099/study-js-exercises-public-main/exercises/ch05/ex06/index.js:4:21
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:643:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
end
※breakの前にend(finally)が実行される


参考：finallyをなくして、catchの後にconsole.log("end")を入れた場合、forループからbreakしてしまい、endが表示されない
*/
