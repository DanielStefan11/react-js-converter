import React from "react";
// Components
import Layout from "../../components/layout/Layout";
// Style
import "./Home.scss";
// React Icons
import { MdSwapVerticalCircle } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
// React Router
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="home-page container">
        <h1>Welcome to Friendly Converter</h1>
        <h2>
          Choose from the menu the conversion you need and get the result in
          less than a second!
        </h2>
        <div className="icons-container">
          <Link to="/length-converter">
            <MdSwapVerticalCircle className="converter-icon" />
          </Link>
          <Link to="/weight-converter">
            <GiWeight className="weight-icon" />
          </Link>
          <Link to="/degrees-converter">
            <FaTemperatureHigh className="termometer-icon" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
