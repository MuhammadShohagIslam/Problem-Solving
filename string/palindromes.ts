/*
    *** Valid Palindromes ***
    For string question, palindromes is the crucial pattern.It's also common sub-problems. It's also a string that reads the same forwards and backwards. Another meaning is a palindrome, if after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. example, "abc", "a", ""

    Before start to solve the problem, let's talk about what is the sub-problem.
    When we have to solve along the way to solving the main problem,it called sub problems

    Question: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity. 

    Example 1: string = "race a car"

*/
/*
    1. make a function which take string parameter
    2. then removing all kind of non-alphanumeric letter which string replace method and make lower case string
    3. initialize left and right pointer at start and end of string
    4. loop through string characters while comparing them, then move the pointers closer to the center.
*/
const isValidPalindrome = function (s: string): boolean {
    let sr = s.replace(/[^A-Za-z0-9]/g, "");
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        if (sr[left] !== sr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

/*
    *** Palindrome II ***
    1. make a function which take string parameter
    2. then removing all non-alphanumeric characters with string replace method and to make lowercase with toLowerCase method
    3. initialize left and right pointer at start and end of string.
    4. loop through string of the characters while comparing them
    5. checking left string letter and right string letter is same or not
    if not make function name valid sub palindrome which check rest of the string character is valid or not one is skip and another one remove the last character 
*/
function isValidSubPalindrome(sr: string, left: number, right: number): boolean{
    while (left < right) {
        if (sr[left] !== sr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
};
function isAlmostPalindrome (s: string):boolean {
    let sr = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left: number = 0,
        right: number = sr.length - 1;

    while (left < right) {
        if (sr[left] !== sr[right]) {
            return (
                isValidSubPalindrome(sr, left + 1, right) ||
                isValidSubPalindrome(sr, left, right - 1)
            );
        }
        left++;
        right--;
    }
    return true
};
console.log(isAlmostPalindrome("abc"))
