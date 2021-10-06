import { useEffect, useRef } from "react";
import "../style/App.css";

const Burger = () => {
  // TODO
  // problem-need updated state of middlebar to add style

  const styleRef = useRef(null);
  let middleBar;
  useEffect(() => {
    middleBar = document.getElementById("middleBar");
  }, []);

  const onClick = () => {
    console.log(middleBar);
  };

  return (
    <div
      onClick={() => onClick()}
      id="burger"
      className="flex flex-col justify-between"
    >
      <div id="firstBar" className="bar"></div>
      <div ref={styleRef} id="middleBar" className="bar"></div>
      <div id="lastBar" className="bar"></div>
    </div>
  );
};

export default Burger;
