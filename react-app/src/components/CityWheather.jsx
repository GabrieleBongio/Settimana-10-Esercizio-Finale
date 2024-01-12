import ActualWeather from "./CityWheatherComponents/ActualWeather";
import imagesAndIcons from "../data/imagesAndIcons.json";
import ForecastWeather from "./CityWheatherComponents/ForecastWeather";

const CityWheather = (props) => {
  return (
    <>
      <ActualWeather imagesAndIcons={imagesAndIcons}></ActualWeather>
      <ForecastWeather imagesAndIcons={imagesAndIcons}></ForecastWeather>
    </>
  );
};

export default CityWheather;
