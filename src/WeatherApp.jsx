import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 13.02,
        temp : 13.95,
        tempMin : 13.95,
        tempMax : 14.05,
        humdity : 62,
        weather : "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}
