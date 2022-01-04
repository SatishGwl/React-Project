import React,{useState,useEffect} from 'react'

const Weathercard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")
    const {
        temp,
        humidity,
        pressure,
        speed,
        country,
        sunset,
        weathermood,
        name
    } = tempInfo;

    //chnage icon based on weather conditions
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [setWeatherState])
    //converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()} `;
    return (
        <>
            {/*=====our temp card start====*/}
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">sunny</div>
                        <div className="place">{name}, {country}</div>
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
                                {timeStr}<br />
                  Sunset</p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className={"extra-info-leftside"}>
                                {humidity}<br />
                  humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className={"extra-info-leftside"}>
                                {pressure}<br />
                  pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className={"extra-info-leftside"}>
                                {speed}<br />
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
export default Weathercard;
