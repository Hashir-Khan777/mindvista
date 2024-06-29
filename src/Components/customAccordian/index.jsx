import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import style from "./style";

const Customaccordian = ({ question, answer }) => {
  return (
    <AccordionItem sx={style.accordian}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            as={Flex}
            _hover={{ bgColor: "none" }}
            gap="20px"
            cursor="pointer"
          >
            {isExpanded ? (
              <FaMinus fontSize="15px" />
            ) : (
              <FaPlus fontSize="16px" />
            )}
            <Text fontSize="18px" fontWeight={700}>
              {question}
            </Text>
          </AccordionButton>
          <AccordionPanel sx={style.accordianPanel}>{answer}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default Customaccordian;
