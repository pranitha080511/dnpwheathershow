const SearchBar = ({ city, setCity, fetchWeather }) => {
  return (
    <div className="w-full max-w-md flex flex-col sm:flex-row gap-3 mb-8">
      
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl
                   bg-white text-black
                   border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-yellow-400
                   transition"
      />

      <button
        onClick={fetchWeather}
        className="px-6 py-3 rounded-xl
                   bg-black text-white font-semibold
                   active:scale-95
                   transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
