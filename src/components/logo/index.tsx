import {
  HStack,
  Link,
  Text,
  TextProps,
  useColorModeValue as mode
} from "@chakra-ui/react"
import { motion, Variants } from "framer-motion"
import NextLink from "next/link"
import DarkModeSwitch from "../dark-mode"

const variants: Variants = {
  animate: {
    opacity: [0, 0, 0, 0, 1, 1, 1, 1],
    transition: {
      delay: 0.25,
      duration: 1,
      repeat: Infinity,
      ease: [0.15, 0.85, 0.15, 0.85]
    }
  }
}

const MotionText = motion<TextProps>(Text)

const Logo = () => {
  return (
    <HStack spacing={4}>
      <DarkModeSwitch />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "ease"
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <NextLink href='/' passHref>
          <Link
            as='h1'
            fontSize='2xl'
            fontFamily={["Berkshire Swash"]}
            _hover={{ textDecoration: "none" }}
          >
            /home/yaelahbiim
          </Link>
        </NextLink>
      </motion.div>
      <MotionText
        fontSize='3xl'
        fontWeight='extrabold'
        color='#ADE8F4'
        variants={variants}
        animate='animate'
      >
        #
      </MotionText>
    </HStack>
  )
}

export default Logo
