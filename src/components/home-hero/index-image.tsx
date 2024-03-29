import {
  Box,
  BoxProps,
  Center,
  Image,
  useColorModeValue as mode
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { DARK_BLUE_COLOR, LIGHT_BLUE_COLOR } from "../constants"
import Status from "../../components/status"

const IndexImage = (props: BoxProps) => {
  return (
    <Box position='relative' {...props}>
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.4,
          ease: [0.15, 0.85, 0.15, 0.85]
        }}
      >
        <Center>
          <Image
            alt='Home Hero Image'
            fit='cover'
            align='center'
            rounded='2xl'
            boxShadow='lg'
            border='2px solid'
            width={400}
            height={400}
            borderColor={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
            src='/images/photo.jpg'
          />
          <Status />
        </Center>
      </motion.div>
    </Box>
  )
}

export default IndexImage
