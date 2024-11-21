import NextLink from "next/link";
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
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../Components/theme-toggle-button";
import Logo from "../Components/logo";
import { IoLogoGithub } from "react-icons/io5";

const Navbar = (props) => {
  const linkColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#ffffff40", "whiteAlpha.50");

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bgColor}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" pt={0.5} letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Stack
            direction={{ md: "row" }}
            display={{ md: "flex" }}
            width={{ md: "45" }}
            alignItems="center"
          >
            {/* <NextLink href="/contact_page" passHref> */}
            {/*   <Link color={linkColor} _focus={{ boxShadow: "none" }}> */}
            {/*     Contact Me */}
            {/*   </Link> */}
            {/* </NextLink> */}
            <NextLink href="https://github.com/m4youness/portfolio" passHref>
              <Link color={linkColor} ml={3} _focus={{ boxShadow: "none" }}>
                Source
              </Link>
            </NextLink>
            <IoLogoGithub color={linkColor} />
          </Stack>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/contact_page" passHref> */}
                {/*   <MenuItem as={Link} _focus={{ boxShadow: "none" }}> */}
                {/*     Contact Me */}
                {/*   </MenuItem> */}
                {/* </NextLink> */}
                <NextLink
                  href="https://github.com/m4youness/portfolio"
                  passHref
                >
                  <MenuItem as={Link} _focus={{ boxShadow: "none" }}>
                    Source code
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
