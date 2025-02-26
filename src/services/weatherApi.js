const API_KEY = "82e30c7369bfc5e63ba6bc4df8190953";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    try{
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if(!response.ok) throw new Error("City not found.");
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data", error);
        return null;
    }
};