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
           left = previousSeenChar + 1;
       }
       seen.set(currentChar, right);
       longest = Math.max(longest, right - left + 1)
    }

    return longest;
};
console.log(lengthOfLongestSubstring("abcabcbbb"));
