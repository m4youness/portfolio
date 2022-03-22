import { Button, Flex, Input, Heading, Container, useColorModeValue, Textarea } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { init } from '@emailjs/browser';
init("NZRkaK2Sv2rlabx3F");

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



 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" background={useColorModeValue('gray.100', '-dark')} p={12} rounded={6}>
     <form ref={form} onSubmit={sendEmail}>
      <Heading mb={6}>Contact Us</Heading>
      <Input background={useColorModeValue('gray.300')} name='name' id='name' placeholder='Name' variant="filled" mb={6} type="text" />
      <Input background={useColorModeValue('gray.300')} name='email' id='email' placeholder='Email' variant="filled" mb={6} type="email" />
      <Input background={useColorModeValue('gray.300')} name='subject' id='subject' placeholder='Subject' variant="filled" mb={6} type="text" />
      <Textarea background={useColorModeValue('gray.300')} name='message' id='message' placeholder='Message' variant="filled" mb={6} />
      <Button colorScheme="teal" type='submit' value="send">Send</Button>
     </form>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page