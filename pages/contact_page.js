import { Button, Flex, Input, Heading, Container, useColorModeValue } from '@chakra-ui/react'

function Contact_Page() {
 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" background={useColorModeValue('gray.100', '-dark')} p={12} rounded={6}>
     <Heading mb={6}>Contact Us</Heading>
     <Input placeholder='Name' variant="filled" mb={6} type="text" />
     <Input placeholder='Email' variant="filled" mb={6} type="email" />
     <Input placeholder='Message' variant="filled" mb={6} type="text" />
     <Button colorScheme="teal">Send</Button>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page