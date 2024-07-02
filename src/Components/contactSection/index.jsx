import React from 'react'
import CustomButton from '../button'
import { Box, Flex, Heading, Icon, Stack, Text, Textarea } from '@chakra-ui/react'
import CustomInput from '../inputField'
import style from './style'
import { CiMail } from 'react-icons/ci'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhone } from 'react-icons/fa'
import { TiPhoneOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";

const ContactSection  = () => {
  return (
    <Flex
    justify="center"
    align="center"
    gap="30px"
    sx={style.contactSection}
  >
    <Box w={{ base: "100%", md: "600px", lg: "550px" }}>
      <Text sx={style.contactSubHeading}>IT SUPPORTED HELP</Text>
      <Heading sx={style.contactHeading}>LET,S WORK</Heading>
      <Heading sx={style.contactHeading}>TOGETHER</Heading>
      <Text sx={style.para}>
        We denounce with righteous indignation and like men beguiled and
        demoralized by the charms
      </Text>
      <Stack mt="40px" gap="20px">
        <Flex align="center" gap="40px">
          <Icon sx={style.icon} as={TiPhoneOutline} />
          <Box>
            <Text sx={style.infoText}>Call For Inquiry</Text>
            <Text sx={style.info}>+000 00000000</Text>
          </Box>
        </Flex>
        <Flex align="center" gap="40px">
          <Icon sx={style.icon} as={CiMail} />
          <Box>
            <Text sx={style.infoText}>Send Us Email</Text>
            <Text sx={style.info}>info@example.com</Text>
          </Box>
        </Flex>
        <Flex align="center" gap="40px">
          <Icon sx={style.icon} as={CiLocationOn} />
          <Box>
            <Text sx={style.infoText}>Location</Text>
            <Text sx={style.info}>info@example.com</Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
    <Box sx={style.contactContainer}>
      <Heading mb="20px" fontWeight={600} fontSize="30px">
        Need Help For Project!
      </Heading>
      <Text fontSize="18px">
        We are ready to help your next projects, let’s work together
      </Text>
      <Stack m="auto" mt="30px" w="90%" gap="25px">
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: "20px", lg: "30px" }}
        >
          <CustomInput customStyle={style.input} placeholder="NAME" />
          <CustomInput customStyle={style.input} placeholder="E-MAIL" />
        </Flex>
        <CustomInput
          customStyle={style.input}
          placeholder="KIND OF PROJECT"
        />
        <Textarea
          variant="unstyled"
          sx={style.textArea}
          placeholder="ENTER YOUR MASSAGE"
        />
        <CustomButton
          customStyle={style.contactButton}
          text="GET IN TOUCH"
        />
      </Stack>
    </Box>
  </Flex>
  )
}

export default ContactSection 
