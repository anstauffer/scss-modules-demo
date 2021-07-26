import React, {ReactNode} from "react";
import "./Spacer.scss"
import { Size } from "./constants";

interface SpacerProps {
  size?: Size;
}

const Spacer = ({ size="medium" }: SpacerProps) => {
  return <div className={size} />
}

export default Spacer;
