import { Button, Flex, Input, Heading, Container, useColorModeValue, Textarea } from '@chakra-ui/react'

function Contact_Page() {
 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" background={useColorModeValue('gray.200', '-dark')} p={12} rounded={6}>
     <Heading mb={6}>Contact Us</Heading>
     <Input required placeholder='Name' variant="filled" mb={6} type="text" />
     <Input required placeholder='Email' variant="filled" mb={6} type="email" />
     <Textarea placeholder='Message' variant="filled" mb={6} />
     <Button colorScheme="teal" type='submit'>Send</Button>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page