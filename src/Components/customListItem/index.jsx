import { ListIcon, ListItem, Text, Flex } from "@chakra-ui/react";
import React from "react";

function Customlistitem({ text, icon }) {
  return (
    <ListItem color={"#fff"}>
      <Flex>
        <ListIcon as={icon} color="#F8BE28" fontSize="25px" />
        <Text
          sx={{
            fontSize: { base: "12px", md: "14px" },
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "1px",
            lineHeight: "20px",
          }}
        >
          {text}
        </Text>
      </Flex>
    </ListItem>
  );
}

export default Customlistitem;
