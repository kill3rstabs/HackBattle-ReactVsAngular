import React from "react";
import './Header.css'
import messageIcon from "../Components/assets/message.png"
export const Header = ({ toggleSidePanel }) => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="./public/Logo.png" alt="" />
          <span className="d-none d-lg-block">HopeHub</span>
        </a>

        <button
          className="bi bi-list toggle-sidebar-btn btn btn-outline-secondary"
          style={{ background: "white", borderColor: "transparent" }}
          onClick={toggleSidePanel}
        ></button>
      </div>

      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      <div className="threeLogos">
        <div className="messaging">
          <div className="w3-dropdown-hover">
          <i class="bi bi-envelope"></i>
            <div
              className="w3-dropdown-content w3-card-4"
              style={{ width: 250 }}
            >
              <div className="w3-container">
                <p>Check new messages from Lakhwinder.</p>
                
              </div>
            </div>
          </div>
        </div>
        <div className="notifications">
          <div className="w3-dropdown-hover">
          <i class="bi bi-bell"></i>
            <div
              className="w3-dropdown-content w3-card-4"
              style={{ width: 250 }}
            >
              <div className="w3-container">
                <p>Lakhwinder has emergency situation. Needs funding for flood aid.</p>
                <p>Himachal is in danger due to changing climate scenario.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="account">
        <div className="w3-dropdown-hover">
  <button className="w3-button">
  <i class="bi bi-person-circle"></i>
  </button>
  <div className="w3-dropdown-content w3-bar-block w3-card-4">
    <a href="#" className="w3-bar-item w3-button">
      Link 1
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 2
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 3
    </a>
  </div>
</div>

        </div>
      </div>
    </header>
  );
};
