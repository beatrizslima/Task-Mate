import * as React from "react"
import { Svg, Circle } from "react-native-svg";

const Backvenn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 132.292 132.292"
    {...props}
  >
    <Circle
      cx={45.755}
      cy={45.755}
      r={45.024}
      style={{
        fill: "#a2678a",
        strokeWidth: 0.65968,
        opacity: 0.7,
      }}
    />
    <Circle
      cx={86.67}
      cy={86.852}
      r={45.207}
      style={{
        fill: "#6867ac",
        strokeWidth: 1.00755,
        opacity: 0.7,
      }}
    />
  </Svg>
)
export default Backvenn;