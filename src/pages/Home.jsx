import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import PredictionCard from "../components/PredictionCard"
import { fetchWeather } from "../services/weatherApi";

const Home = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="home-container">
      <div className="group rounded-xl p-4">
        <SearchBar onSearch={handleSearch} />
        <WeatherCard weather={weather} />
      </div>
      <div className="group2 rounded-xl">
        <PredictionCard />
      </div>
    </div>
  );
};

export default Home;
