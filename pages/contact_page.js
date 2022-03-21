import { Button, Flex, Input } from '@chakra-ui/react'

function Contact_Page() {
 return (
  <Flex height="100vh" justify-content="center" align-items="center">
   <FLex direction="column" background="gray.100" p={12} rounded={6}>
    <Heading mb={6}>Contact Me</Heading>
    <Input placeholder='Name' variant="filled" mb={6} type="text" />
    <Input placeholder='Email' variant="filled" mb={6} type="email" />
    <Input placeholder='Message' variant="filled" mb={6} type="text" />
    <Button colorScheme="teal">Send</Button>
   </FLex>
  </Flex>
 )
}

export default Contact_Page