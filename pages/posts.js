import { Button, Container, Heading, Section, List, ListItem, Box } from "@chakra-ui/react";
import Paragraph from '../Components/paragraph'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

function Posts() {



 return (

  <Container>

   <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
    Posts
   </Heading>
   <Paragraph>
    No Posts as of right now, but make sure to follow my Socials to be updated if I ever do.
   </Paragraph>



   <Heading as="h3" variant="section-title">
    Socials
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


  </Container>
 )
}

export default Posts