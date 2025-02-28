import PropTypes from "prop-types";

const PredictionCard = ({ forecast }) => {
  return (
    <div className="bg-zinc-800 text-white p-4 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-bold mb-2">Prakiraan Cuaca</h2>
      <div className="flex gap-5">
        {forecast.map((item, index) => (
          <div key={index} className="bg-zinc-700 p-2 rounded-md text-center">
            <p className="font-semibold">{item.date}</p>
            <p>{item.temp}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.icon}.png`}
              alt={item.weather}
              className="mx-auto"
            />
            <p className="capitalize">{item.weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

PredictionCard.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      weather: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PredictionCard;
