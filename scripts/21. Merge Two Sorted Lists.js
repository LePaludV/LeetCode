/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
*/
/*
Si l'élément de tête de L1 est superieur a celui de L2 alors on prend le premier element de L1 et on appel
recursivement avec L1 privé de son 1er element
si une des deux liste vide on ajout le reste de l'autre (si reste il y a) 
*/
/*
var mergeTwoLists = function(list1, list2) {
    //console.log(list1);
    //Deux cas de base 
    if(list1.length===0){
        return list2
    }
    else if(list2.length===0){
        return list1
    }
    //Cas récursif
    if(list1[0]<list2[0]){
        return [list1.shift()].concat(mergeTwoLists(list1, list2))
    }
    else{
        return [list2.shift()].concat(mergeTwoLists(list1, list2))
    }
    
    
    
};

PAS DES ARRAY
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(list1, list2) {

    if (list1===null && list2===null) return null  
    console.log(list2.next,list2.val);
    console.log(list1.next,list1.val);
    console.log("________")
    //Deux cas de base 
    if (list1===null && list2!==null) return list2  
    else if (list1!==null && list2===null) return list1
    //Cas récursif
    if(list1.val<list2.val){
        return {val:list1.val, next:mergeTwoLists(list1.next, list2)}
    }
    else{
        return {val:list2.val, next: mergeTwoLists(list1, list2.next)}
    }
    
    
    
};
/*list1 = [1,2,4]
list2 = [1,3,4]
console.log(mergeTwoLists(list1, list2))

list1 = []
list2 = []
console.log(mergeTwoLists(list1, list2))

list1 = []
list2 = [0]
console.log(mergeTwoLists(list1, list2))*/



