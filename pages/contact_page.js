import { Button, Flex, Input, Heading, Container, useColorModeValue, Textarea } from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'


function Contact_Page() {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_ouyawmw', form.current, 'NZRkaK2Sv2rlabx3F')
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
    <Flex direction="column" background={useColorModeValue('gray.200', '-dark')} p={12} rounded={6}>
     <form ref={form} onSubmit={sendEmail}>
      <Heading mb={6}>Contact Us</Heading>
      <Input name='name' placeholder='Name' variant="filled" mb={6} type="text" />
      <Input name='email' placeholder='Email' variant="filled" mb={6} type="email" />
      <Input name='subject' placeholder='Subject' variant="filled" mb={6} type="text" />
      <Textarea name='message' placeholder='Message' variant="filled" mb={6} />
      <Button colorScheme="teal" type='submit'>Send</Button>
     </form>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page