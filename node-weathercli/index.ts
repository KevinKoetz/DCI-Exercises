import axios from "axios";

interface Arguments {
  city: string;
  forecast: boolean;
  fahrenheit: boolean;
}

const args = parseArgs(process.argv.slice(2));
getTemperature(args);

async function getTemperature({ city, forecast, fahrenheit }: Arguments) {
  try {
    const request = `https://api.openweathermap.org/data/2.5/${
      forecast ? "forecast" : "weather"
    }?q=${city}&units=${
      fahrenheit ? "imperial" : "metric"
    }&appid=50d2f26b3059663495c45d59ec33ab4f`;

    const response = await axios.get(request);
    
    if (forecast) {
      console.log(
        `Forecast for ${response.data.city.name}, ${
          response.data.city.country
        }:\n${response.data.list.reduce(
          (str: any, entry: { main: { temp: number }; dt_txt: string }) => {
            str += entry.dt_txt + ": " + entry.main.temp + `${fahrenheit ? "°F" : "°C"}` + "\n";
            return str
          },
          ""
        )}`
      );
    } else {
      console.log(
        `It is now ${response.data.main.temp}${fahrenheit ? "°F" : "°C"} in ${city}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function parseArgs(args: string[]): Arguments {
  const forecast = args.includes("--forecast");
  const fahrenheit = args.includes("--fahrenheit");
  const city = args[0];
  return { city, fahrenheit, forecast };
}
