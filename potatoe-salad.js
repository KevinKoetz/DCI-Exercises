//1. Get potatoes
let potatoes = getPotatoes(10); //function getPotatoes returns us 10 Potatoes
//2. Wash the potatoes
let washedPotatoes = washPotatoes(potatoes) //function washPotatoes expects our potatoes and returns them as washed Potatoes
//3. Boil the potatoes
let boiledPotatoes = boilPotatoes(washedPotatoes) //function boilPotatoes expects our washedPotatoes and returns them as boiled Potatoes
//4. Chop the potatoes
let choppedPotatoes = chopPotatoes(boiledPotatoes) //function chopPotatoes expects our boiledPotatoes and returns them as choppedPotatoes
//5. Get a bowl
let bowl = getBowl() //function returns one Bowl
//6. Put potatoes inside the bowl
bowl.add(choppedPotatoes) //Methos add() of our bowl will add the potatoes to our bowl
//7. Add flavors (like salt, mayo, onions...)
let flavors= ["salt","mayo", "onions"]
bowl.add(flavors) //adding flavors to the bowl
//8. Serve potato salad.
console.log(bowl.inside);


function getPotatoes(num) {
    let potatoes = [];

    for (let counter = 1; counter <= num ; counter++) {
        let potatoe = { //Create a new potatoe
            name: `Potatoe${counter}`,
            isClean: false,
            isBoiled: false
        }
        potatoes.push(potatoe); //add the potatoe to the array
    }
    return potatoes;
}


function washPotatoes(potatoes) {
    let washedPotatoes = [];

    for(let counter = 0; counter < potatoes.length; counter++){
        let potatoe = potatoes[counter] 
        potatoe.isClean = true;
        washedPotatoes.push(potatoe);
    }

    //above for loop is equivalent to:
    /*
    for(const potatoe of potatoes){
        potatoe.isClean = true;
        washedPotatoes.push(potatoe);
    }*/


    return washedPotatoes;
}

function boilPotatoes(washedPotatoes){
    let boiledPotatoes = [];

    for(let index = 0; index < washedPotatoes.length; index++){
        let potatoe = washedPotatoes[index];
        potatoe.isBoiled = true;
        boiledPotatoes.push(potatoe);
    }

    return boiledPotatoes;
}

function chopPotatoes(boiledPotatoes) {
    let choppedPotatoes = [];

    
    for(let index = 0; index < boiledPotatoes.length; index++){
        
        let potatoe = boiledPotatoes[index];
        potatoe.isChopped = true; //even though isChopped is not yet a atribute of potatoe is can be added like that
        choppedPotatoes.push(potatoe);
        
    }

    return choppedPotatoes;
}

function getBowl() {
    let bowl = {
        name: "Nicest Bowl",
        inside: [],
        add: function(element){
            this.inside.push(element);
        }
    }
    return bowl;
}