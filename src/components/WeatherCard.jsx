const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-xl">🌡️ {data.main.temp} °C</p>
      <p className="capitalize">☁️ {data.weather[0].description}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬️ Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
