/*
    Longest Substring Without Repeating Characters
*/
function lengthOfLongestSubstring(s:string): number {
    if (s.length < 0) {
        return s.length;
    }
    const seen = new Map();
    let left = 0;
    let longest = 0;

    for(let right = 0; right < s.length; right++){
       const currentChar = s[right];
       const previousSeenChar = seen.get(currentChar);
       if(previousSeenChar >= left){
           left =+ 1;
       }
       seen.set(currentChar, right);
       longest = Math.max(longest, right - left + 1)
    }

    return longest;
};
console.log(lengthOfLongestSubstring("abcabcbbb"));

// longest nice substring
function longestNiceSubstring(s:string) {
    let sLowercase = s.toLowerCase()
    let sObject:any = {};
    let longestNiceSubstringArray = [];
    for(let right = 0; right < sLowercase.length; right++){
        const currectChar = sLowercase[right];
        if(!sObject[currectChar]){
            sObject[sLowercase[right]] = [right]
        }else{
          sObject[sLowercase[right]].push(right)
        }
    }
    console.log(sObject)
};
console.log(longestNiceSubstring("YazaAay"))
