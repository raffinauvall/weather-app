
import PropTypes from "prop-types";

const WeatherCard = ({ weather }) => {
  if (!weather) return;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className="weather-card w-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-white text-2xl text-left">
            {weather.name},{weather.province}, {weather.sys.country}
          </h2>
          <h3 className="text-left text-white">{weather.main.temp}°C</h3>
          <p className="capitalize text-white text-left">{weather.weather[0].description}</p>
        </div>
        <img src={iconUrl} alt={weather.weather[0].description} />
      </div>
    </div>
  );
};

// 🔥 Tambahkan validasi tipe props
WeatherCard.propTypes = {
  weather: PropTypes.shape({
    name: PropTypes.string,
    province: PropTypes.string,
    sys: PropTypes.shape({
    country: PropTypes.string,
    }),
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string
      })
    ),
  }),
};

export default WeatherCard;
