import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({ weatherInfo }){
    const HOT_URL = "https://media.istockphoto.com/id/1097573496/photo/dark-clouds-on-blue-sky.jpg?s=612x612&w=0&k=20&c=kL6wEcA7HUzmYxdy9O9mISsHK40XJ0dExUEqeCi0k4A=";
    const COLD_URL ="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    const RAIN_URL = "https://www.shutterstock.com/image-photo/transparent-umbrella-under-heavy-rain-260nw-2176486433.jpg";
    return (
        <div className="infobox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherInfo.humdity > 80 ? RAIN_URL : weatherInfo.temp > 15 ? HOT_URL : COLD_URL }
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city} {weatherInfo.humdity > 80 ? <BeachAccessIcon/> : weatherInfo.temp > 15 ? <WbSunnyIcon/> : <SevereColdIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temperature = {weatherInfo.temp}&deg;C</div>
         <div>Humidity = {weatherInfo.humdity}</div>
         <div>Max Temp = {weatherInfo.tempMax}&deg;C</div>
         <div>Min Temp = {weatherInfo.tempMin}&deg;C</div>
         <div>The Current Weather can be described as <b><i>{weatherInfo.weather}</i></b> and feels like {weatherInfo.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
            
        </div>
    )
}