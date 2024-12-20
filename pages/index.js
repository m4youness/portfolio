import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import Paragraph from "../Components/paragraph";
import Link from "next/link";
import { IoLogoGithub, IoLogoDiscord, IoLogoInstagram } from "react-icons/io5";
import { BioSection, BioYear } from "../Components/bio.js";
import Section from "../Components/section.js";

function Page() {
  const toast = useToast();

  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("#ffffff40", "whiteAlpha.200")}
        style={{ backdropFilter: "blur(10px)" }}
        p={3}
        mb={6}
        align="center"
      >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohamad Youness
          </Heading>
          <Text fontSize={{ base: 13, md: 16 }}>
            Software Development | Embedded Systems | Deep Learning
          </Text>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I am a software developer with experience in web development, a keen
          interest in assembly language, low-level embedded systems and
          languages. <br />I am constantly exploring new technologies to improve
          my skills.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          Born in Lebanon, Beirut.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Coding</Paragraph>
        <Paragraph>Anime</Paragraph>
        <Paragraph>Sports</Paragraph>
        <Paragraph>Cooking</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/m4youness" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="purple"
              leftIcon={<IoLogoDiscord />}
              onClick={() =>
                toast({
                  position: "bottom-left",
                  title: "m4youness#3174",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Discord
            </Button>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/mohamad__youness"
              target="_blank"
              passHref
            >
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export default Page;
