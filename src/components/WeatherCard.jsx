import React from "react";
import PropTypes from "prop-types";

const WeatherCard = ({ weather }) => {
  if (!weather) return <p>Cari kota dulu...</p>;

  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <h3>{weather.main.temp}°C</h3>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

// 🔥 Tambahkan validasi tipe props
WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
      })
    ),
  }),
};

export default WeatherCard;
