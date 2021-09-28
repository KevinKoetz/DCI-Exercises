/*
09
* String in a string
 * 
 * check if a string B is contained in another string A
 * the characters of string B should appear in the same order but it's ok 
 * if there are other characters between them 
 * e.g. string B is sos and string A is saaaoooddds
 * in this case sos is contained in saaaoooddds
 * first character is 's' then 'o' and finally 's'. Between first 's' and 'o' are containeed
 * 'aaa' which is ok. In a similar way, after first 'o' and last 's' are contained 'ooddd'
 * which is ok
 * string B for this exercise is 'hackerrank'
 * and should return YES in these cases: 'hereiamstackerrank' and 'hhaacckkekraraannk'
 * and NO in these cases: 'hackerworld'and 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'
 * also check these cases:
 * hackerworld, hhaacckkekraaannk, knarrekcah, hackeronek -> NO
 * rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt, abcdefghijklmnopqrstuvwxyz -> NO
 * crackerhackerknar, hhhackkerbanker, rhackerank -> NO
 * hereiamstackerrank, hackerrank, hhhhaaaaackkkkerrrrrrrrank -> YES
*/

function stringBInA(strA, strB){
    let i = 0;
    for(const char of strA) {
        if(char === strB[i]) i++;
        if(i === strB.length) return true
    }
    return false
}

console.log(stringBInA("hkackkerkrkank","hackerran",));