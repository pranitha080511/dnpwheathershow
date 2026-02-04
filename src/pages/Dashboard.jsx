import { useState } from "react";
import { getWeather } from "../services/weatherApi";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");

    try {
      const res = await getWeather(city);
      setWeather(res.data);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start pt-24 px-4
                 bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-100"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-black">
        🌦️ Weather Dashboard
      </h1>

      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {loading && <Loader />}
      {error && <Error message={error} />}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default Dashboard;
