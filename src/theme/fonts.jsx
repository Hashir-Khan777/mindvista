import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Inter';
        src: url(./fonts/Inter-Regular.ttf);
      }
      `}
  />
);
