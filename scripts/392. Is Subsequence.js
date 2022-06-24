/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

/*
Soit s une subsequence de t
Tant que s n'est pas vide on parcours t pour chercher s[0]
quand on trouve s[0] dans t on enlève supprime s[0] 
et on recommence pour le nouveau s[0] en reprenant au même endroit de t
*/

var isSubsequence = function(s, t) {
    let i=0
    while(s && i<t.length){
        //console.log(t[i],s);
        if(s[0]===t[i]){
            s=s.slice(1)
        }
        i++
    }
    return !s
};

s = "abc"
t = "ahbgdc"
console.log(isSubsequence(s,t))