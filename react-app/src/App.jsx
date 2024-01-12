import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CityWheather from "./components/CityWheather";
import { useState } from "react";

function App() {
  const [likedCities, setLikedCities] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <TopBar></TopBar>
        <Routes>
          <Route path="/" element={<Home likedCities={likedCities} />} />
          <Route
            path="/:latlon"
            element={<CityWheather likedCities={likedCities} setLikedCities={setLikedCities}></CityWheather>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
