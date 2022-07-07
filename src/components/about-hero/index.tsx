import {
  Text,
  Button,
  Divider,
  Heading,
  Image,
  Skeleton,
  Tooltip,
  useColorModeValue as mode,
  useToast,
  VStack,
  StackProps,
  Stack,
} from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { LIGHT_BLUE_COLOR, DARK_BLUE_COLOR } from "../constants";
import SocialMedia from "../social-media";
import SummaryTitle from "../summary-title";
import ScrollIdButton from "../scroll-id-button";
import { Quotes } from "../../types/quotes";
import quotes from "../../data/quotes";

const leftVariants: Variants = {
  hidden: {
    x: -30,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const avatarVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    x: 30,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.5,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const MotionStack = motion<StackProps>(VStack);

const AboutHero = () => {
  const toast = useToast();
  const [index, setIndex] = useState(0);
  const sendRandomQuotes = () => {
    const { description } = quotes[index] as Quotes;
    console.log("check", description);
    toast({
      description: description,
      position: "top",
      variant: "top-accent",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
    if (index + 1 === quotes.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Stack
        w="100%"
        minH="100vh"
        justify="center"
        align="center"
        spacing={4}
        direction={{ base: "column", md: "row" }}
      >
        <MotionStack
          variants={leftVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          w={{ base: "100%", md: "33%" }}
          spacing={8}
          align={{ base: "center", md: "start" }}
        >
          <Heading
            as="h1"
            fontSize="4xl"
            textAlign={{ base: "center", md: "left" }}
            lineHeight="6"
          >
            Sektiawan Bimo Prihpambudi
            <Text
              as="span"
              fontSize="5rem"
              color={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
            >
              .
            </Text>
          </Heading>
          <Divider
            w={10}
            borderWidth={4}
            borderColor={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
          />
          <SocialMedia />
        </MotionStack>
        <MotionStack
          variants={avatarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          spacing={-1}
          w={{ base: "100%", md: "34%" }}
        >
          <Image
            alt="Avatar image"
            w="75%"
            h={{ base: 450, lg: 450 }}
            fit="cover"
            src="/images/photo.png"
            fallback={<Skeleton h={{ base: 450, lg: 450 }} />}
          />
          <Tooltip label="See random quotes ..." hasArrow>
            <Button
              w="75%"
              variant="solid"
              colorScheme="hakka"
              onClick={sendRandomQuotes}
            >
              Frontend Developer
            </Button>
          </Tooltip>
        </MotionStack>
        <MotionStack
          variants={rightVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          w={{ base: "100%", md: "33%" }}
          spacing={4}
          align={{ base: "center", md: "end" }}
        >
          <VStack
            spacing={-2}
            color={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}
            align={{ base: "center", md: "end" }}
          >
            <SummaryTitle number={1} title="Introduction" />
            <Heading fontSize="3xl" fontFamily="Berskhire Swash">
              Frontend Developer
            </Heading>
          </VStack>
          <Text color="gray.500" textAlign={{ base: "center", md: "end" }}>
            A passionate <strong>developer</strong> having an experience of
            building <strong>smart</strong> and <strong>scalable</strong>{" "}
            websites with a great <strong>user experience</strong>.
          </Text>
          <ScrollIdButton text="Learn more" id="skills" />
        </MotionStack>
      </Stack>
    </AnimatePresence>
  );
};

export default AboutHero;
