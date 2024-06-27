import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/index.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={customTheme} >
    <Router />
  </ChakraProvider>
);
