import { createContext } from 'react';
const WeatherContext = createContext();


const setApiAddress = (city) => {
    const address = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b7503a2aa9ca872738c7213619a72f5`;
    return address;
}

export const WeatherApiAddressProvider = ({ children }) => {
    return <WeatherContext.Provider value={setApiAddress}>{children}</WeatherContext.Provider>
}

export default WeatherContext;
