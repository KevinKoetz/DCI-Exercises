const l = (...paras) => console.log(...paras);

const line = (()=>{
    let num = 1;

    return () => {
        l(`_________________${num++}_________________`)
    }
})()