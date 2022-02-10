import axios from "axios";

interface Arguments {
    city: string;
    forecast: boolean;
    fahrenheit: boolean;
}

const args = parseArgs(process.argv.slice(2));

const


function parseArgs(args: string[]): Arguments {
    const forecast = args.includes("--forecast")
    const fahrenheit = args.includes("--fahrenheit")
    const city = args[2]
    return {city, fahrenheit, forecast}
}
