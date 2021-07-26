import React from "react";
import { OrangeFont } from "./constants";

import Logo from "./Logo";
import Spacer from "./Spacer";
import Paragraph, { SpecialParagraph, HoverParagraph } from "./Paragraph";

function App() {
  return (
    <div>
      <Spacer size="large" />
      <Logo fontSize="large" />
      <Spacer />
      <Logo fontSize="small" color="orange" />
      <Spacer size="small" />
      <Paragraph>This is a normal paragraph</Paragraph>
      <Spacer />
      <SpecialParagraph>
        This is a special paragraph with overriden styles
      </SpecialParagraph>
      <Spacer />
      <HoverParagraph>Hover over me!</HoverParagraph>
    </div>
  );
}

export default App;
