function calculateBMI(mass, height ){
    return mass / (height**2);
}

let john = {
    name: "John",
    height: 1.68,
    mass: 67,
    BMI: null
}

let mark = {
    name: "Mark",
    height: 1.98,
    mass: 90,
    BMI: null
}

john.BMI = calculateBMI(john.mass, john.height)
mark.BMI = calculateBMI(mark.mass, mark.height)

let markHasHigherBMI = mark.BMI > john.BMI

console.log(`It is ${markHasHigherBMI} that Mark has a higher BMI than John`)

if (markHasHigherBMI) {
    console.log(`Mark`)
} else {
    console.log(`John`)
}