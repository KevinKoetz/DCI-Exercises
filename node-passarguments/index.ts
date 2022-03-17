import stars from "./stars";

let numStars = Number.parseInt(process.argv[2])
if(Number.isNaN(numStars)) {
    numStars = 10;
}
const header = process.argv[3]

stars(numStars, header)
