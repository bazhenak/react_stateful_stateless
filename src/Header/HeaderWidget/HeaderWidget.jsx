import React, {useEffect, useState} from "react";
import './HeaderWidget.css'

const HeaderWidget = () => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily.xml')
            .then((data) => {console.log(data, "DATA IS LOADED")});
    }, [])

    return (
        <div className='header-weather-widget'>
            <p className='header-weather-widget__label'>Курс валют</p>
            <div className='header-weather-widget__weather-data'>Курс доллара</div>
        </div>
    )
};

export default HeaderWidget;
