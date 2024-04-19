import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./info.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function Info({ info }) {
  let hazeUrl =
    "https://images.unsplash.com/photo-1533757704860-384affeed946?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hotUrl =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1579&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let coldUrl =
    "https://images.unsplash.com/photo-1633884187493-7f2012547051?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let veryColdUrl =
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainyUrl =
    "https://images.unsplash.com/photo-1414394825544-67fa8e8e28ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW55fGVufDB8fDB8fHww";
  return (
    <div className="weather-info">
      <div className="infoContainer">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 75
                  ? rainyUrl
                  : info.temperature > 28
                  ? hotUrl
                  : info.temperature > 15
                  ? hazeUrl
                  : info.temperature > 5
                  ? coldUrl
                  : veryColdUrl
              }
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weather of {info.city}
                {info.humidity > 75 ? (
                  <ThunderstormIcon />
                ) : info.temperature > 28 ? (
                  <WbSunnyIcon />
                ) : info.temperature > 15 ? (
                  <ScatterPlotIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>
                  Current Weather :
                  <b>
                    <i> {info.description}</i>
                  </b>
                </p>
                <p>Temperature : {info.temperature}&deg;C</p>
                <p>Feels Like : {info.feelsLike}&deg;C</p>
                <p>
                  temperature Range : {info.tempMin}&deg;C - {info.temMax}&deg;C
                </p>
                <p>Humidity : {info.humidity}&deg;C</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
