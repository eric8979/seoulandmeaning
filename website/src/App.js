// components
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Description from "./components/Description";
// style
import "./style/App.css";

function App() {
  // background-image: url("../image/background/morning.jpg");
  // background-size: cover;

  return (
    <div className="grid w-screen h-screen">
      <Navbar />

      <div className="justify-self-center">
        <Map />
      </div>
      <div className="justify-self-center">
        <Description />
      </div>
    </div>
  );
}

export default App;
