//Take single string and push any words into array and characters between spaces
function StringToWords(str){
    let idx = 0, word = "", newArr = [];
    while(idx<str.length){
        if(str[idx] == " "){
            idx+=1;
            continue;
        }
        word += str[idx];
        if(str[idx+1] == " " || idx == str.length-1){
            newArr.push(word);
            word = "";
            idx+=1;
        }
        idx+=1;
    }
    return newArr;
}
console.log(StringToWords("  She  is a brick house!!"));


//Censors given banned words arr from given string. String transferred to new String Algo checks for banned words in the process. Censors each character of banned word with "*"
function BannedWords(str, bannedArr){
    let idx = 0, word = "", newStr = "", start =0, end =0, strRegex = /[^a-zA-Z]/;
    while(idx < str.length){
        if(str[idx].match(strRegex)){
            newStr += str[idx]
            idx++;
            start = idx;
            continue;
        }
        end = idx;
        word += str[idx];
        // console.log(idx, str.length, word);
        if(idx+1 == str.length || str[idx+1].match(strRegex)){
            let bidx = 0;
            while(bidx < bannedArr.length){
                if(word == bannedArr[bidx]){
                    console.log(word);
                    for(let i = start; i<= end; i++){
                        newStr += "*"
                    }
                    word = "";
                    console.log(newStr);
                    break;
                }
                bidx++;
            }
            start = idx+1;
            newStr += word;
            word = "";
        }
        idx++;
    }
    return newStr;
}
console.log(BannedWords("What the  $$fuck and shit!", ["fuck", "shit"]));

