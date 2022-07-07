import { Button, HStack, Link } from "@chakra-ui/react";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";

const SocialMedia = () => {
  return (
    <HStack spacing={4}>
      <Link href="https://www.github.com/baiim" isExternal>
        <Button colorScheme="pink" size="md" variant="outline">
          <RiGithubFill />
        </Button>
      </Link>
      <Link
        href="https://www.linkedin.com/in/sektiawan-bimo-prihpambudi-485204189/"
        isExternal
      >
        <Button colorScheme="linkedin" size="md" variant="outline">
          <RiLinkedinFill />
        </Button>
      </Link>
      <Link href="https://www.instagram.com/yaelahbiim/" isExternal>
        <Button colorScheme="pink" size="md" variant="outline">
          <RiInstagramFill />
        </Button>
      </Link>
    </HStack>
  );
};

export default SocialMedia;
