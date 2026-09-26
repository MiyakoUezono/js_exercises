 export const obj ={
    toEscapesepuence_if(str){
        if(/\\/.test(str)){
            str = str.replace(/\\/g,"\\\\") //以下の置換結果に含まれる\も置換されてしまうため、初めに\\を変換しておく
        }
        if(/\0/.test(str)){
            str = str.replace(/\0/g,"\\0") // /パターン/g(文字列内すべての一致箇所を対象にする)
        }
        if(/\u0008/.test(str)){
            str = str.replace(/\u0008/g,"\\b") //正規表現の中の\bは単語境界を指すため、/\u0008/とした
        }
        if(/\t/.test(str)){
            str = str.replace(/\t/g,"\\t")
        }
        if(/\n/.test(str)){
            str = str.replace(/\n/g,"\\n")
        }
        if(/\v/.test(str)){
            str = str.replace(/\v/g,"\\v")
        }
        if(/\f/.test(str)){
            str = str.replace(/\f/g,"\\f")
        }
        if(/\r/.test(str)){
            str = str.replace(/\r/g,"\\r")
        }
        if(/"/.test(str)){
            str = str.replace(/"/g,'\\"')
        }
        if(/'/.test(str)){
            str = str.replace(/'/g,"\\'")
        }
        return str;
    },

    toEscapesepuence_switch(str){ 
        switch (/\\/.test(str)) {
            case true:
                str = str.replace(/\\/g,"\\\\");
                break;
            default:
                break;
        }
        switch(/\0/.test(str)){
            case true:
                str = str.replace(/\0/g,"\\0") 
                break;
            default:
                break;
        }
        switch(/\u0008/.test(str)){
            case true:
                str = str.replace(/\u0008/g,"\\b") 
                break;
            default:
                break;
        }
        switch(/\t/.test(str)){
            case true:
                str = str.replace(/\t/g,"\\t") 
                break;
            default:
                break;
        }
        switch(/\n/.test(str)){
            case true:
                str = str.replace(/\n/g,"\\n");
                break;
            default:
                break;
        }
        switch(/\v/.test(str)){
            case true:
                str = str.replace(/\v/g,"\\v");
                break;
            default:
                break;
        }
        switch(/\f/.test(str)){
            case true:
                str = str.replace(/\f/g,"\\f");
                break;
            default:
                break;
        }
        switch(/\r/.test(str)){
            case true:
                str = str.replace(/\r/g,"\\r");
                break;
            default:
                break;
        }
        switch(/"/.test(str)){
            case true:
                str = str.replace(/"/g,'\\"');
                break;
            default:
                break;
        }
        switch(/'/.test(str)){
            case true:
                str = str.replace(/'/g,"\\'");
                break;
            default:
                break;
        }
        return str;
    }
}


/*
・制御文字が含まれているか否か、判定方法が分からずAIに質問した。
　正規表現により特定のルール、パターンに当てはまる文字列を探す（test()メソッドを使う）ことができるとの回答が得られた
・/という文字そのものをstrに入れたいため、/を二つ重ねて書いた

Q. メソッドは、クラスまたはオブジェクトに属している関数だが、どのオブジェクトに属しておくべきか？
*/