import { Projects } from "../../types/projects"
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue as mode
} from "@chakra-ui/react"
import NextLink from "next/link"

import {
  DARK_BLUE_COLOR,
  DARK_CARD_COLOR,
  LIGHT_BLUE_COLOR,
  LIGHT_CARD_COLOR
} from "../constants"

type Props = {
  stack: string[]
}

const ProjectCard = ({ image, title, description, stack, link }: Projects) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={mode(LIGHT_CARD_COLOR, DARK_CARD_COLOR)}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: { image },
            filter: "blur(15px)",
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)"
            }
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {stack.map(({ stack }) => stack).join(", ")}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Text fontSize={"md"}>{description}</Text>
          <Stack direction={"row"} align={"center"}>
            <NextLink href={link} passHref>
              <Button
                rounded={"full"}
                px={10}
                colorScheme='hakka'
                variant='outline'
              >
                View Project
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default ProjectCard
