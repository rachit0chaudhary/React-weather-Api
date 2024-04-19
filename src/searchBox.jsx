import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "33f8efa98229fdc0cd7800d82bf777f5";

  let getData = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temperature: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        temMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        description: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  function handleSearch(event) {
    setCity(event.target.value);
  }

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      getData();
      let result = await getData();
      updateInfo(result);
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className="searchBox">
      <h2 style={{ color: "	 #0066ff" }}>Weather Search!</h2>
      <TextField
        id="city"
        label="City Name"
        variant="outlined"
        value={city}
        onChange={handleSearch}
        required
      />
      <br />
      <br />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Search
      </Button>
      {error && (
        <h3 style={{ color: "red" }}>No such Place exist in our Database!</h3>
      )}
    </div>
  );
}
