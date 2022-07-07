import { Text, useColorModeValue as mode } from "@chakra-ui/react";
import { DARK_BLUE_COLOR, LIGHT_BLUE_COLOR } from "../constants";

type props = {
  number: number;
  title: String;
};

const SummaryTitle = ({ number, title }: props) => {
  return (
    <Text
      fontSize="md"
      textTransform="uppercase"
      fontWeight="hairline"
      color={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
    >
      0{number} • {title}
    </Text>
  );
};

export default SummaryTitle;
