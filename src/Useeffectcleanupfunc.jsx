import { useEffect, useState } from "react";

const Cleanupfunc = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const [heightCount, setHeightCount] = useState(window.screen.height);

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    // cleanup function
    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });
  useEffect(() => {
    window.addEventListener("resize", actualHeight);
    // cleanup function
    return () => {
      window.removeEventListener("resize", actualHeight);
    };
  });

  const actualWidth = () => {
    // console.log(window.innerWidth);
    setWidthCount(window.innerWidth);
  };

  const actualHeight = () => {
    // console.log(window.innerWidth);
    setHeightCount(window.innerHeight);
  };

  return (
    <div>
      <h1>Actual Size of your Screen is : {widthCount} * {heightCount}</h1>
      <h1>Width : {widthCount} px</h1>
      <h1>Height : {heightCount} px</h1>
    </div>
  );
};

export default Cleanupfunc;
