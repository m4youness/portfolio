import { Button, Flex, Input, Heading, Container, useColorModeValue, Textarea, Fo } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

function Contact_Page() {
 const { register, handleSubmit, errors, reset } = useForm();

 function onSubmitForm() {
  console.log(values);
 }

 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" background={useColorModeValue('gray.200', '-dark')} p={12} rounded={6}>
     <form onSubmit={handleSubmit(onSubmitForm)}>
      <Heading mb={6}>Contact Us</Heading>
      <Input ref={register} required placeholder='Name' variant="filled" mb={6} type="text" />
      <Input ref={register} required placeholder='Email' variant="filled" mb={6} type="email" />
      <Textarea ref={register} placeholder='Message' variant="filled" mb={6} />
      <Button colorScheme="teal" type='submit'>Send</Button>
     </form>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page