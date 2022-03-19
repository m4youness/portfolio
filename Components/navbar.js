import NextLink from 'next/link'


import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../Components/theme-toggle-button'
import Logo from '../Components/logo'
import { IoLogoGithub } from 'react-icons/io5'





const Navbar = props => {
  const { path } = props

  return (
    <Box position="fixed " as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} style={{ backdropFilter: 'blur(10px' }} zIndex={1} {...props}>
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between" >
        <Flex align="center" mr={5} >
          <Heading as="h1" size="md" mb={1} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/works" >
            <a className='a'>Works</a>
          </NextLink>
          <NextLink href="/posts" >
            <a className='b'>Posts</a>
          </NextLink>
          <NextLink href="https://github.com/Pixlerfrost/Portfolio-Website">
            <a className='c'>Source</a>
          </NextLink>
          <IoLogoGithub />


        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar