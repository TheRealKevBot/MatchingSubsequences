// Given a string s and an array of strings words, 
// return the number of words[i] that is a subsequence of s.

// A subsequence of a string is a new string generated from 
// the original string with some characters (can be none) deleted without changing 
// the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde". 

function numMatchingSubseq(s, words) {
    count = 0  
    words.forEach(word => {
        if (word.length > 1){
            word = word.split('')
            i = 0
            count2 = 0
            string = s
            while (i < word.length) {
                curIndex = string.indexOf(word[i])
                string.includes(word[i]) & curIndex >= 0 ? (string = string.substring(0, curIndex) + string.substring(curIndex + 1)) & count2++ : null
                i++
            }
            word.length === count2 ? count++ : null
        } else {
            s.includes(word) ? count++ : null 
        }
    })
    return count
}; 

console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace"])) // 3
console.log(numMatchingSubseq("dsahjpjauf", ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"])) //2 
console.log(numMatchingSubseq("asdfasdfasdfasdf", ["asdf","ffff","asdfg","fdsa"])) //3
console.log(numMatchingSubseq("fffffffffffffffffffffffff", ["ffff","fafff","asdarwerasda","fffffffffffffffffffffffff"])) //2
console.log(numMatchingSubseq("lolomgrolfcoptr", ["lol","omfg","rolf","omg"])) // 4