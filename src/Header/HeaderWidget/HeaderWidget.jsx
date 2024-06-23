import React, {useEffect, useState} from "react";
import './HeaderWidget.css'

const HeaderWidget = () => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={c67a2d0943ffa07634f040d45193c6e0}')
            .then((data) => {console.log(data, "DATA IS LOADED")});
    }, [])

    return (
        <div className='header-weather-widget'>
            <p className='header-weather-widget__label'>Какая-то погода</p>
            <div className='header-weather-widget__weather-data'>Погода непонятно где</div>
        </div>
    )
};

export default HeaderWidget;
