import {
  Text,
  VStack,
  useColorModeValue as Mode,
  Heading,
} from "@chakra-ui/react";
import Header from "../../components/main-layout/header";
import SocialMedia from "../../components/social-media";
import Layout from "../../components/layout";
import AboutHero from "../../components/about-hero";

const About = () => {
  return (
    <Layout title="About" description="About Sektiawan Bimo Prihpambudi">
      <VStack py={{ base: 20, md: 0 }}>
        <AboutHero />
      </VStack>
    </Layout>
  );
};

export default About;
