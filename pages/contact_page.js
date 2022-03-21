import { Button, Flex, Input, Heading, Container, useColorModeValue, Textarea, Fo } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

import Axios from 'axios';

function Contact_Page() {
 const { handleSubmit, reset } = useForm();


 async function onSubmitForm(values) {
  let config = {
   method: 'post',
   url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
   headers: {
    'Content-Type': 'application/json',
   },
   data: values,
  };

  try {
   const response = await Axios(config);
   console.log(response);
   if (response.status == 200) {
    reset();
   }
  } catch (err) { }
 }

 return (
  <Container>
   <Flex height="100vh" as="section-title">
    <Flex direction="column" background={useColorModeValue('gray.200', '-dark')} p={12} rounded={6}>
     <form onSubmit={handleSubmit(onSubmitForm)}>
      <Heading mb={6}>Contact Us</Heading>
      <Input placeholder='Name' variant="filled" mb={6} type="text" />
      <Input placeholder='Email' variant="filled" mb={6} type="email" />
      <Textarea placeholder='Message' variant="filled" mb={6} />
      <Button colorScheme="teal" type='submit'>Send</Button>
     </form>
    </Flex>
   </Flex>
  </Container>
 )
}

export default Contact_Page