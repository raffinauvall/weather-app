import React, { useState } from "react";
import { fetchWeather } from "../services/weatherApi";

const Home = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        if(!city) return;

        const data = await fetchWeather(city);
        if(data){
            setWeather(data);
            setError("");
        } else {
            setWeather(null);
            setError("City not found.")
        }
    };

    return (
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-black text-2xl font-bold text-center">
          Weather App
        </h1>
        <input
          type="text"
          placeholder="Masukkan nama kota..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded"
        >Cari cuaca</button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {weather && (
          <div className="mt-4 p-4 border rounded text-center">
            <h2 className="text-xl font-bold">
              {weather.name}, {weather.sys.country}
            </h2>
            <p className="text-lg">{weather.main.temp}°C</p>
            <p className="capitalize">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    );
}

export default Home;