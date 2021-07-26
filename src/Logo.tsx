import React from "react";
import { Size, LogoColor } from "./constants";
import "./Logo.scss"

interface PassedLogoProps {
  fontSize?: Size;
  color?: LogoColor;
}


const Logo = ({ fontSize = "medium", color = "blue" }: PassedLogoProps) => {
  return (
    <div className={`logo ${color}`}>
      Readlee
    </div>
  );
};

export default Logo;
