import { useLayoutEffect, useState } from "react";

const base = {
  "pointer-events": "none",
  "user-select": "none",
  display: "block",
  // position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "border-radius": "100%",
  "z-index": 10000,
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.8) translate(-50%, -50%)",
    },
    "50%": {
      transform: "scale(1) translate(-50%, -50%)",
    },
    "100%": {
      transform: "scale(0.8) translate(-50%, -50%)",
    },
  },
  "@media only screen and (max-width: 700px)": {
    "#cursor": {
      display: "none",
    },
  },
};

type CursorProps = {
  pulse?: boolean;
  size?: number;
  hollow?: boolean;
  color?: string;
  opacity?: number;
  easing?: string;
  duration?: number;
};

const Cursor = ({
  pulse = false,
  size = 23,
  hollow = false,
  color = "lightblue",
  opacity = 1,
  easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  duration = 0.3
}: CursorProps) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    document.onmousemove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  });

  const styles = {
    ...base,
    width: `${size}px`,
    height: `${size}px`,
    background: hollow ? "transparent" : color,
    "border-color": color,
    "border-width": hollow ? "2px" : "0px",
    "border-style": "solid",
    opacity: opacity,
    top: position.y,
    left: position.x,
    "transition-timing-function": easing,
    "transition-duration": `${duration}s`,
    animation: pulse ? "pulse 2s infinite" : "none",
  };

  return <div id="cursor" className="" style={styles}></div>;
};

export default Cursor;
