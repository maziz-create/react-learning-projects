import './App.css';
import { WeatherApiAddressProvider } from './context/WeatherApiAddressContext';
import WeatherCity from './components/WeatherCity';

function App() {

  return (
    <WeatherApiAddressProvider>
      <WeatherCity />
    </WeatherApiAddressProvider>
  );
}

export default App;
