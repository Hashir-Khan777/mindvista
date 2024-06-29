import { Box, Circle, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import style from './style'

const Advisorcard = ({icon , heading , text}) => {
  return (
    <Flex px={{base:"10px" , lg:"0" }} w={{base:"300px" , lg:"250px" , xl:"300px" }} gap="25px">
    <Circle sx={style.circle}>
      <Icon as={icon} />
    </Circle>
    <Box>
      <Heading
        fontSize={{ base: "20px", lg: "20px" , xl:"25px" }}
        fontWeight={600}
      >
        {heading}
      </Heading>
      <Text mt="10px" fontSize="17px">
        {text}
      </Text>
    </Box>
  </Flex>
  )
}

export default Advisorcard
