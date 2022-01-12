import isITaskArray from "./isITaskArray";


describe("isITaskArray should", () => {
    test("return false if called with a non Array Argument", () => {
        expect(isITaskArray("string")).toStrictEqual(false)
        expect(isITaskArray(5)).toStrictEqual(false)
        expect(isITaskArray({})).toStrictEqual(false)
        expect(isITaskArray(null)).toStrictEqual(false)
        expect(isITaskArray(()=>{})).toStrictEqual(false)
        expect(isITaskArray(true)).toStrictEqual(false)
    })

    test("return false if called with an Array that containst a non-ITask type element", () => {
        expect(isITaskArray(["no object"])).toStrictEqual(false)
        expect(isITaskArray([null])).toStrictEqual(false)
        expect(isITaskArray([{}])).toStrictEqual(false)
        expect(isITaskArray([{text: "Hello", done: true}, 5])).toStrictEqual(false)
        expect(isITaskArray([{text: "Hello", done: true},{}])).toStrictEqual(false)
        expect(isITaskArray([{text: "Bar"}])).toStrictEqual(false)
        expect(isITaskArray([{done: false}])).toStrictEqual(false)
        expect(isITaskArray([{id: false}])).toStrictEqual(false)
        expect(isITaskArray([{text:"Test",done:false,id:null},{text:"Test2",done:false,id:null}])).toStrictEqual(false)
        expect(isITaskArray([{text:true,done:false,id:2}])).toStrictEqual(false)
        expect(isITaskArray([{text:"Test",done:"false",id:2}])).toStrictEqual(false)
    })

    test("return true if called with an empty Array", () => {
        expect(isITaskArray([])).toStrictEqual(true)
    })

    test("return true if called with an Array containing only Objects implementing ITask", () => {
        expect(isITaskArray([{text: "Hello", done: true, id:1}])).toStrictEqual(true)
        expect(isITaskArray([{text: "Hello", done: true, id:1},{text: "Yep", done: false, id: 2}])).toStrictEqual(true)
    })
})
