/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.
*/

/*
On prend le string s et on doit trouver t en remplacent les caractères.  
*/


var isIsomorphic = function (s, t) {
  /*  On crée deux dictionnaires : 
  un qui a pour clé les char de s et comme valeur les char t 
  et un qui a pour clé les char de t et comme valeur les char s
  ce qui va permettre de savoir si un char est lié a un autre. 

  On parcourt en même temps s et t, 
  si s[i] est déjà dans le dict il doit correspondre a t[i] er inversement, sinon on les défini dans les dict
  */
  L_s_t={}
  L_t_s={}
  for(let i=0;i<s.length;i++){
    let charS=s[i]
    let charT=t[i]
    if( L_s_t[charT]===undefined && L_t_s[charS]===undefined){
      L_s_t[charT]=charS
      L_t_s[charS]=charT

    }
    else if(L_s_t[charT]!== charS && L_t_s[charS]!==charT){
      return false
    }
    
  }
  return true
}

console.log(isIsomorphic("badc", "baba"));//false
console.log(isIsomorphic("egcd", "adfd")); //false
console.log(isIsomorphic("egg", "add"));//true
console.log(isIsomorphic("a", "a"));//true
console.log(isIsomorphic("ab", "ac"));//true
console.log(isIsomorphic("paper", "title"));//true
console.log(isIsomorphic("abab", "baba"));// true
