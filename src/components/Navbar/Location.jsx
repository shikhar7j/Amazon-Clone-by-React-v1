import React, { useState } from "react";
import axios from "axios";

const LocationDropdown = ({ onLocationChange }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const fetchCities = async () => {
    if (cities.length > 0) return; // Already loaded
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        {
          params: { countryIds: "US", limit: 10 },
          headers: {
            "X-RapidAPI-Key": "b7a88445bdmshd362dfd2c8869fp155cb1jsn66bf5bf6595c",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
          }
        }
      );
      if (response.data && response.data.data) {
        setCities(response.data.data);
      } else {
        setError('Unexpected API response structure.');
      }
    } catch (error) {
      setError("Error fetching cities.");
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    setDropdownOpened(true);
    if (cities.length === 0 && !loading) {
      fetchCities();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCity(value);
    if (onLocationChange) {
      onLocationChange(value);
    }
  };

  return (
    <div>
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <select
          value={selectedCity}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={loading}
        >
          <option value="">{loading ? "Loading cities..." : "Select a city"}</option>
          {cities.map((city) => (
            <option key={city.id || city.cityId} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default LocationDropdown;
