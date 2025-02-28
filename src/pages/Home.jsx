import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import PredictionCard from "../components/PredictionCard";
import { fetchWeather, fetchForecast } from "../services/weatherApi";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    const forecastData = await fetchForecast(city);

    setWeather(data);
    setForecast(forecastData);
  };

  return (
    <div className="home-container">
      <div className="group rounded-xl p-4 mb-4">
        <SearchBar onSearch={handleSearch} />
        <WeatherCard weather={weather} />
      </div>
      {forecast && (
        <div className="group2 rounded-xl">
          <PredictionCard forecast={forecast} />
        </div>
      )}
    </div>
  );
};

export default Home;
