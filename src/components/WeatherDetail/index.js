import { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherDetail({ setApiAddress, city }) {

    const [weatherInfo, setWeatherInfo] = useState({});
    const [weatherClouds, setWeatherClouds] = useState({});
    const [weatherDetails, setWeatherDetails] = useState('');
    const [weatherMain, setWeatherMain] = useState({});

    useEffect(() => {
        axios.get(city ? setApiAddress(city) : "")
            .then((response) => {
                setWeatherDetails(response.data.weather[0]);
                setWeatherClouds(response.data.clouds)
                setWeatherMain(response.data.main);
                setWeatherInfo(response.data);
            })
    }, [city, setApiAddress]);

    return (
        <div>
            {
                city !== "" &&
                <div className="card text-center">
                    <img className="card-img-top img" src={`https://openweathermap.org/img/wn/${weatherDetails.icon}.png`} />
                    <span className="text-warning border border-1">{weatherDetails.description}</span>
                    <div className="card-body">
                        <h5 className="card-title display-4 text-uppercase text-secondary">{weatherInfo.name}</h5>
                        <ul>
                            <li>Hava Sıcaklığı: {parseInt(weatherMain.temp - 273)}&deg;</li>
                            <li>Hissedilen Sıcaklık: {parseInt(weatherMain.feels_like - 273)}&deg;</li>
                            <li>Nem Oranı: {weatherMain.humidity}%</li>
                            <li>Bulutluluk oranı: {weatherClouds.all}% </li>
                            <li>Basınç: {weatherMain.pressure} hPa</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default WeatherDetail
