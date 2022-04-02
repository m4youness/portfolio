import {
 Button, Flex, Input, Heading, Container, useColorModeValue, Textarea, useToast
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'


export function Contact_Page() {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_k3o1pqk', 'template_ouyawmw', form.current, 'NZRkaK2Sv2rlabx3F')
   .then((result) => {
    console.log(result.text);

   }, (error) => {
    console.log(error.text);
   });
  e.target.reset()
 };




 const toast = useToast()
 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" m={5} background={useColorModeValue('gray.100', '-dark')} p={12} rounded={6}>
     <form ref={form} onSubmit={sendEmail}>
      <Heading mb={6}>Contact Us</Heading>
      <Input background={useColorModeValue('gray.200')} name='name' id='name' placeholder='Name' variant="filled" mb={6} type="text" />
      <Input background={useColorModeValue('gray.200')} name='email' id='email' placeholder='Email' variant="filled" mb={6} type="email" />
      <Input background={useColorModeValue('gray.200')} name='subject' id='subject' placeholder='Subject' variant="filled" mb={6} type="text" />
      <Textarea background={useColorModeValue('gray.200')} name='message' id='message' placeholder='Message' variant="filled" mb={6} />
      <Button colorScheme="teal" type='submit' value="send" onClick={() =>
       toast({
        title: 'Success',
        description: "Your Email has been sent!",
        status: 'success',
        duration: 9000,
        isClosable: true,
       })
      }>Send</Button>
     </form>
    </Flex>
   </Flex>
  </Container >
 )
}

export default Contact_Page