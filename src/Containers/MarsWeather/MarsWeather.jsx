import { useState, useEffect } from "react";
import WeatherStats from "../../Components/WeatherStats";

const MarsWeather = () => {
  //Mars Weather API
  const [weather, setWeather] = useState("");

  const KEY = "mgCzn4vdY8LralpHVwIKBPydQIDt6LXodanpsy10";

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=${KEY}&feedtype=json&ver=1.0`
      );
      const data = await response.json();
      setWeather(data);
    };
    getWeather();
  }, []);
  console.log(weather);
  return (
    <div>
      <WeatherStats />
    </div>
  );
};

export default MarsWeather;
