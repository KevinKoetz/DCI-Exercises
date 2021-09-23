function anagram(s1,s2) {   
    //Count the occourence of each different letter in s1 and store them in an object.
    let letterCount = Array.from(s1).reduce((prev, curr)=>{
        prev[curr] === undefined ? prev[curr] = 1 : prev[curr]++;
        return prev;
    }, {}) 
    console.log(letterCount);
    //Count the occourence of each different letter in s2 by substracting them from the respective key of the object created above
    let difference = Array.from(s2).reduce((prev, curr)=>{
        prev[curr] === undefined ? prev[curr] = -1 : prev[curr]--;
        return prev;
    }, letterCount) 
    console.log(difference);
    //Compare if s2 and s1 contain the same amount of each letter counted. All keys in this object should be 0 if this is the case.
    for (const key in difference) {
        //0 is a falsy value, so we should never enter this if statement if all are 0.
        if(difference[key]) return false;
    }
    return true;
}

console.log(anagram("",""));
console.log(anagram("dadd","dda8d"));