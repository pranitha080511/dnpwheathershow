const DashboardFooter = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm text-center py-4 border-t border-yellow-400/20">
      Weather data powered by OpenWeather API • © {new Date().getFullYear()}
    </footer>
  );
};

export default DashboardFooter;
