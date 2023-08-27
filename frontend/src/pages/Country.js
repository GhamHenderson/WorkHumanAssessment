import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import workHumanImage from "../Media/Workhuman_company_logo.png";

function Country() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/countrylist")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredCountries = data.filter((country) =>
        country.country.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <Link to="/"> {/* Link to the home page */}
                <img
                    src={workHumanImage}
                    alt="Workhuman Logo"
                    style={{ marginRight: "10px", width: "300px", height: "100px" }}
                />
            </Link>
            <h1 className="mb-4">Assessment Task - List of Countries <i className="bi bi-flag-fill"></i></h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a country..."
                    value={search}
                    onChange={handleSearch}
                />
            </div>
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

export default Country;
