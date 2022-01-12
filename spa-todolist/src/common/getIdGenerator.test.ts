import getIdGenerator from "./getIdGenerator";

describe("generateId should", () => {
    const generateId = getIdGenerator()
    test("return consecutive increasing numbers, starting from 0 each time it is called",() => {
        expect(generateId()).toBe(0)
        expect(generateId()).toBe(1)
        expect(generateId()).toBe(2)
        expect(generateId()).toBe(3)
    })

    test("return the overwrite value when called with one and then increace from there",() => {
        expect(generateId(20)).toBe(20)
        expect(generateId()).toBe(21)
        expect(generateId()).toBe(22)
        expect(generateId()).toBe(23)
    })
})