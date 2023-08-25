import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import workHumanImage from "./Media/Workhuman_company_logo.png";

function App() {

  // State to store the list of countries from the API
  const [data, setData] = useState([]);
  // State to store the user's search input
  const [search, setSearch] = useState("");

  // Fetch the list of countries from the API when the component mounts
  useEffect(() => {
    fetch("/countrylist")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // Function to handle changes in the search input field
  const handleSearch = (e) => {
    // Update the "search" state with the user's input
    setSearch(e.target.value);
  };

  // Filter the list of countries based on the search input
  const filteredCountries = data.filter((country) =>
    // Check if the lowercase country name contains the lowercase search input
    country.country.toLowerCase().includes(search.toLowerCase())
  );

  // return JSX code for React to render.
  return (
    <div className="container mt-5">
        <img
          src={workHumanImage}
          alt="WorkHuman Logo"
          style={{ marginRight: "10px", width: "300px", height: "100px" }}
        />

      <h1 className="mb-4"> </h1>
      <h1 className="mb-4">Assessment Task - List of Countries</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Map through the filtered list of countries and display them */}
      <ul className="list-group mb-5">
        {filteredCountries.map((country, index) => (
          <li key={index} className="list-group-item">
            {country.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;