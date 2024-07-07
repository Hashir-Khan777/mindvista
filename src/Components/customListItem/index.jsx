import { ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";

function Customlistitem({ text, icon }) {
  return (
    <ListItem color={'#fff'}>
      <ListIcon as={icon} color="#F4A950" fontSize="25px" />
      {text}
    </ListItem>
  );
}

export default Customlistitem;
