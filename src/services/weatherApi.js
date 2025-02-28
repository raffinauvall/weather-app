const API_KEY = "82e30c7369bfc5e63ba6bc4df8190953";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    try{
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=id`);
        if(!response.ok) throw new Error("City not found.");
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
        return null;
    }
};

export const fetchForecast = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    );

    if (!response.ok) throw new Error("City not found.");

    const data = await response.json();

    console.log("Raw Forecast Data:", data); 

    const middayForecasts = data.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    );

    console.log("Filtered Midday Forecasts:", middayForecasts); 

    return middayForecasts.map((item) => ({
      date: item.dt_txt.split(" ")[0],
      temp: item.main.temp,
      icon: item.weather[0].icon,
      weather: item.weather[0].description,
    }));
  } catch (error) {
    console.error("Error fetching forecast", error);
    return null;
  }
};
