import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
  
  let HOT_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bm55fGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1605035015406-54c130d0bf89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <h4>Weather Info - {info.weather}</h4>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                  ? HOT_URL
                  : COLD_URL
            }
            title="image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature = {info.temp}&deg;C</div>
              <div>humidity = {info.humidity}</div>
              <div>Min Temp = {info.tempMin}&deg;C</div>
              <div>Max Temp = {info.tempMax}&deg;C</div>
              <div>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
