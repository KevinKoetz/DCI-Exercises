export default (numStars = 10, header = "hi") => {
    const stars = new Array(numStars).fill("*").join("")
    console.log(`${stars}\n${header}\n${stars}`);

}