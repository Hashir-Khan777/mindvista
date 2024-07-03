import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors: {
    black: {
      900: "#161C25",
    },
    bisque: {
      100: "#F4A950",
    },
  },
});

export default customTheme;
