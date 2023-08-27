import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import workHumanImage from "../Media/Workhuman_company_logo.png";

function Home() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center', // Center items vertically
  };

  const h1Style = {
    fontFamily: 'Tahoma, sans-serif', // Change the font family to your desired font
  };

  const boldTextStyle = {
    fontWeight: 'bold', // Make the text bold
  };

  return (
    <div className="container mt-5">
      <div style={containerStyle}>
        <img
          src={workHumanImage}
          alt="Workhuman Logo"
          style={{ marginRight: "10px", width: "300px", height: "100px" }}
        />

        <h1 className="mb-4" style={h1Style}>  - Workhuman Interview Assignment</h1>
      </div>

      {/* Button for 'Country' page */}
      <div className="mb-3">
        <p className="text-secondary" style={boldTextStyle}>Click the button below to view the Country List:</p>
        <Link to="/country" className="btn btn-secondary">
           Country List - React <i className="bi bi-flag"></i>
        </Link>
      </div>

      {/* Button for 'localhost:5000' */}
      <div className="mb-3">
        <p className="text-secondary" style={boldTextStyle}>Click the button below to access the Backend Server:</p>
        <a href="http://localhost:5000/countrylist" className="btn btn-secondary">
            Backend Server - Flask-RESTful <i className="bi bi-database"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
