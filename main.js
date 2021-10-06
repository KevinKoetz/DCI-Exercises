const l = (...paras) => console.log(...paras);

const line = (()=>{
    let num = 1;

    return () => {
        l(`_________________${num++}_________________`)
    }
})()
/*1.The following function returns true if the parameter age is greater than 18.
Otherwise returns false:*/
line()
const isAdult = age => age > 18;
l(isAdult(17)) 
l(isAdult(19)) 

/* 2.Write a function min(a,b) which returns the least of two numbers a and b.

For instance:

    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1 */
line()
const min = (a,b) => a < b ? a : b;

l(min(2,4))
l(min(16,5))

/* 3.Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1 */
line()
const pow = (n,e) => n ** e
l(pow(3,3))