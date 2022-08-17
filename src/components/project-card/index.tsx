import { Projects } from "../../types/projects"
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
  Badge
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
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={mode("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={image}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Text textAlign={"center"} px={3}>
          {description}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={mode("white", "gray.900")}
            fontWeight={"400"}
          >
            {stack.map(({ stack }) => stack).join(", ")}
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <NextLink href={link}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500"
              }}
              _focus={{
                bg: "blue.500"
              }}
            >
              View Project
            </Button>
          </NextLink>
        </Stack>
      </Box>
    </Center>
  )
}

export default ProjectCard
