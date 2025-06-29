import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // let info={
    //     city:"Delhi",
    //     temp:32.05,
    //     tempMin:32.05,
    //     tempMax:32.05,
    //     humidity:70,
    //     weather:"haze"
    // }
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1521004799875-9772f22bdb70?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return(
    <div className="InfoBox">
     {/* <h2>WeatherInfo-{info.weather}</h2> */}
     <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL 
          : info.temp > 15
          ? HOT_URL 
          : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
            {info.humidity>80 ? <UmbrellaIcon/>:info.temp>15 ? <WbSunnyIcon/> :<AcUnitIcon/>}
          
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
          <p>Temprature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather}</p>
        </Typography>
      </CardContent>
      </Card>
      </div>
    </div>
    );
}