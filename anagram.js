function isAnnagram(s,t){
    /*step:1 Check length of s and t */ 
    if(s.length !== t.length) return false;

    //step2: Count Characters in string s
    const charCount={}; //Object to store frequently

    for(let char of s){
        if(charCount[char]){
            charCount[char] +=1;
        }
        else{
            charCount[char]=1;
        }
    }

    // step 3: Compare with string t
    for(let char of t){
        if (!charCount[char]) {
            // char not found or frequency mismatch
            return false;
        }
        charCount[char] -= 1;
    }
    // step 4: All characters matched
    return true;

}
console.log(`s=listen  t=silent, is ${isAnnagram("listen", "silent")}`);
console.log(`s=rat t=car,is ${isAnnagram("rat","car")}`);