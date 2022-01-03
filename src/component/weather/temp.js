import React from 'react';
import '../weather/style.css';

function Temp() {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search"
            placeholder="...search"
            autoFocus
            id="search"
            className="searchTerm" />
          <button className="searchButton" type="button">Search</button>
        </div>
      </div>
      {/*=====our temp card start====*/}
      <article className="widget">
        <div className="weatherIcon">
          <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.5$</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">Pune, place</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/*======Our four column section=======*/}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className={"extra-info-leftside"}>
                19:19 PM<br />
                  Sunset</p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className={"extra-info-leftside"}>
                19:19 PM<br />
                  Sunset</p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className={"extra-info-leftside"}>
                19:19 PM<br />
                  pressure</p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className={"extra-info-leftside"}>
                19:19 PM<br />
                  speed</p>
            </div>
          </div>
        </div>
        {/*======Our four column section=======*/}
      </article>
      {/*=====our temp card end====*/}

    </>
  )
}

export default Temp
