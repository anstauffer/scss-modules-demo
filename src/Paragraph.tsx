import React, {ReactNode} from "react";
import "./Paragraph.scss"
import { Size, getSize } from "./constants";

interface HoverParagraphProps {
  size?: Size;
  color?: string
  children: ReactNode;
}

interface SpecialParagraphProps {
  size?: Size;
  color?: string
  children: ReactNode;
}

interface ParagraphProps {
  size?: Size;
  children: ReactNode;
  classname?: string;
}

export const HoverParagraph = ({
  size = "large",
  color = "blue",
  children,
}: HoverParagraphProps) => {
  return (
    <Paragraph classname={"hover"} size={size}>
      {children}
    </Paragraph>
  );
};
export const SpecialParagraph = ({
  size = "large",
  color = "purple",
  children,
}: SpecialParagraphProps) => {
  return (
    <Paragraph classname={"special"} size={size}>
      {children}
    </Paragraph>
  );
};

const Paragraph = ({ size = "medium", children, classname = "paragraph" }: ParagraphProps) => {
  return <div className={`${classname}`}>{children}</div>;
};

export default Paragraph;
