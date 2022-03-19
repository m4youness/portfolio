import { Button, Container, Heading } from "@chakra-ui/react";
import Paragraph from '../Components/paragraph'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
function Works() {



 return (
  <Container>
   <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
    Works
   </Heading>
   <Paragraph>
    All my projects/works should be pinned repositories on my
    <Link href="https://github.com/Pixlerfrost" passHref>
     <Button
      variant="unstyled"
      colorScheme="teal"
      leftIcon={<IoLogoGithub />}
      pl={2}
     >
      Github
     </Button>
    </Link>
   </Paragraph>

  </Container>
 )
}

export default Works