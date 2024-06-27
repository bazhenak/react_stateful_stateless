import React, {useEffect, useState} from "react";
import './HeaderWidget.css'

const HeaderWidget = () => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily.xml')
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => setWeatherData( data.querySelector("[ID=R01235]").getElementsByTagName("Value")[0].innerHTML));
    }, [])

    return (
        <div className='header-weather-widget'>
            <p className='header-weather-widget__label'>Курс USD (в руб.)</p>
            <div className='header-weather-widget__weather-data'>{weatherData}</div>
        </div>
    )
};

export default HeaderWidget;

// 'https://www.cbr-xml-daily.ru/daily.xml'
