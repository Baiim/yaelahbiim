import { HStack, Text, useColorModeValue as mode } from "@chakra-ui/react";
// import { DARK_BLUE_COLOR, LIGHT_BLUE_COLOR } from "src/constants";

const MobileCopyright = () => {
  return (
    <HStack fontSize="lg" fontWeight="thin" justify="center">
      <Text>
        © {new Date().getFullYear() + " "}
        <Text as="span" color="GrayText">
          Alexandre Gossard
        </Text>
        .
      </Text>
    </HStack>
  );
};

export default MobileCopyright;
