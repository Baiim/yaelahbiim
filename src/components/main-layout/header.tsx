import Logo from "../logo"
import { Box, HStack } from "@chakra-ui/react"
import CommandButton from "../command/command-button"

const Header = () => {
  return (
    <>
      <Box
        zIndex={100}
        as='header'
        display='inline-block'
        position='fixed'
        w='100%'
        sx={{
          backdropFilter: "blur(5px)"
        }}
      >
        <Box w='100%' left={0} top={0}>
          <HStack w='100%' justify='space-between' p={4}>
            <Logo />
            <CommandButton />
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default Header
