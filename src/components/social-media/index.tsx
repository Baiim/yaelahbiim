import { Button, HStack, Link, Tooltip } from "@chakra-ui/react";
import { RiGithubFill } from "@react-icons/all-files/ri/RiGithubFill";
import { RiInstagramFill } from "@react-icons/all-files/ri/RiInstagramFill";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { RiWhatsappFill } from "@react-icons/all-files/ri/RiWhatsappFill";

const SocialMedia = () => {
  return (
    <HStack spacing={4}>
      <Tooltip label="My Work">
        <Link href="https://www.github.com/baiim" isExternal>
          <Button colorScheme="pink" size="md" variant="outline">
            <RiGithubFill />
          </Button>
        </Link>
      </Tooltip>
      <Tooltip label="My CV">
        <Link
          href="https://www.linkedin.com/in/sektiawan-bimo-prihpambudi-485204189/"
          isExternal
        >
          <Button colorScheme="linkedin" size="md" variant="outline">
            <RiLinkedinFill />
          </Button>
        </Link>
      </Tooltip>
      <Tooltip label="My Instagram">
        <Link href="https://www.instagram.com/yaelahbiim/" isExternal>
          <Button colorScheme="pink" size="md" variant="outline">
            <RiInstagramFill />
          </Button>
        </Link>
      </Tooltip>
      <Tooltip label="Chat With Me">
        <Link href="https://www.instagram.com/yaelahbiim/" isExternal>
          <Button colorScheme="green" size="md" variant="outline">
            <RiWhatsappFill />
          </Button>
        </Link>
      </Tooltip>
    </HStack>
  );
};

export default SocialMedia;
