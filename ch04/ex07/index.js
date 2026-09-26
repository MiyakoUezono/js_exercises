function set42(key) {
  eval(`${key} = 42;`);
}
let pass = 'taro123'
set42("pass")
console.log(pass); 
/*
while(count<100){
  set42(count)
  count++;
}
*/