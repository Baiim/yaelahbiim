import {
  Button,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import NextLink from "next/link"
import Typed from "react-typed"
import { DARK_BLUE_COLOR, LIGHT_BLUE_COLOR } from "../constants"
import IndexImage from "./index-image"
import ExternalLink from "../external-link"

const HomeHero = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })
  return (
    <Stack
      align='center'
      justify='center'
      spacing={{ base: 5, md: 10 }}
      minH={isMobile ? "130vh" : "100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Stack
        flex={1}
        spacing={{ base: 3, md: 6 }}
        flexGrow={{ base: 0, md: 1 }}
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            ease: [0.15, 0.85, 0.15, 0.85]
          }}
        >
          <Heading as='h1' lineHeight={1.1} fontWeight='extrabold'>
            <Text
              as='span'
              position='relative'
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bgColor: mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR),
                zIndex: -1
              }}
            >
              Sektiawan Bimo Prihpambudi
            </Text>
            <br />
            <Text
              as='span'
              color={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              zIndex={-100}
              fontFamily='Berkshire Swash'
            >
              <Typed
                strings={[
                  "Web Developer",
                  "Frontend Developer",
                  "Software Developer"
                ]}
                typeSpeed={30}
                backSpeed={40}
                backDelay={1500}
                startDelay={800}
                loop
              />
            </Text>
          </Heading>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          <Text
            fontSize='lg'
            color={mode("gray.800", "gray.400")}
            as='h2'
            align='justify'
            fontFamily='Poppins'
          >
            <strong>Hello</strong> everyone, you can call me{" "}
            <strong>Baiim</strong> , I'am frontend developer from jakarta,
            indonesia, check my profile on{" "}
            <ExternalLink href='https://www.linkedin.com/in/sektiawan-bimo-prihpambudi-485204189/'>
              {" "}
              LinkedIn{" "}
            </ExternalLink>{" "}
            <br />
            and my repo on{" "}
            <ExternalLink href='https://github.com/Baiim'>
              {" "}
              Github{" "}
            </ExternalLink>{" "}
            i like the attractive appearance of the website.{" "}
            <strong>
              {" "}
              <br /> I made a website with love and affection hehehe LOL
            </strong>
          </Text>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        >
          <Stack spacing={10} direction={"row"} align='justify'>
            <NextLink href='/project' passHref>
              <Button
                w={{ base: "100%", lg: "50%" }}
                size='md'
                rounded='full'
                fontWeight='normal'
                colorScheme='hakka'
                transition='ease-in-out .3s'
                variant='outline'
              >
                See my project
              </Button>
            </NextLink>
            <NextLink href='/lib/resume.pdf' passHref>
              <Button
                w={{ base: "100%", lg: "50%" }}
                size='md'
                rounded='full'
                fontWeight='normal'
                colorScheme='hakka'
                transition='ease-in-out .3s'
              >
                Download Resume
              </Button>
            </NextLink>
          </Stack>
        </motion.div>
      </Stack>
      <IndexImage w={{ base: "100%", md: "50%" }} h='100%' />
    </Stack>
  )
}

export default HomeHero
