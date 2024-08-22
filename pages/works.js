import { Button, Container, Heading } from "@chakra-ui/react";
import Paragraph from "../Components/paragraph";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
function Works() {
  return (
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Coding Projects
      </Heading>
      <Paragraph>
        All my projects should be pinned repositories on my
        <Link href="https://github.com/m4youness" passHref>
          <Button
            variant="unstyled"
            colorScheme="teal"
            leftIcon={<IoLogoGithub />}
            pl={l}
          >
            Github
          </Button>
        </Link>
      </Paragraph>
    </Container>
  );
}

export default Works;

