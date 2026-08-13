export function slice(str, indexStart, indexEnd) {
  let TODO = "",start,end,s;
  if (indexStart >= str.length) 
    TODO="";
  else
    if (indexStart === undefined || Number.isNaN(indexStart) ){
      start = 0;
    }else if (indexStart < 0) {
      start = Math.max(str.length+Math.floor(indexStart),0);
    }else {start = Math.floor(indexStart)}
    
    if(indexEnd === undefined || indexEnd>=str.length){
      end = str.length;
    }else if(indexEnd <0){
      end = Math.max(indexEnd + str.length, 0);
    }else {end = Math.floor(indexEnd)}
  
    if (end <= start){
      TODO = ""
    }else{
      for (let i = start; i < end; i++){
        s =  str[i];
        TODO += s;
      }}
  return TODO;
}
