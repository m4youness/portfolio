import { Box, Container, Heading, Image, useColorModeValue, Button, List, ListItem } from "@chakra-ui/react"
import Paragraph from '../Components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'

function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('gray.300', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I'm a front-end developer based in the U.S!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mohamad Youness
          </Heading>
          <p>Digital Craftsman ( 3D Artist / Developer / Animator )</p>
        </Box>
        <Box flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center">
          <Image borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
            src="/images/MyBird.png" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mohamad Youness is a front-end developer thats based in the U.S. He is a passionate programmer and aspires to become a Freelancer. In his free time he likes to play sports and watch Anime/tv.
        </Paragraph>
        <Box align="center" my={4}>
          <Link href="/works" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          Born in Lebanon, Beirut.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Started getting into all sorts of Technology, like Robots, Electrical Circuits etc.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Started Coding in Java.
        </BioSection>
        <BioSection>
          <BioYear>Mid 2019 to present</BioYear>
          Learned Python, Html, Css, JavaScript, Django and a couple of JavaScript Frameworks.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,
        </Paragraph>
        <Paragraph>
          Music,
        </Paragraph>
        <Paragraph>
          Playing Flute,
        </Paragraph>
        <Paragraph>
          3d Animating/Modeling,
        </Paragraph>
        <Paragraph>
          Machine Learning,
        </Paragraph>
        <Paragraph>
          Coding,
        </Paragraph>
        <Paragraph>
          FootBall/Soccer,
        </Paragraph>
        <Paragraph>
          Wrestling
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Pixlerfrost" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Pixlerfrost" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mohamad__youness" target="_blank" passHref>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Link href="/posts" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My posts
            </Button>
          </Link>
        </Box>
      </Section>
    </Container >
  )
}

export default Page
