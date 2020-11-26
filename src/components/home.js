import React from "react";
import {useSpring, animated} from 'react-spring'

const Home = ({ callback=null }) => {

  const op = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <animated.div style={{ height: 100, width: 100, backgroundColor: "red", ...op }} onClick={()=>callback()}></animated.div>
    </div>
  );
};

export default Home;
