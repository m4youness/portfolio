import {
  Container,
  Box,
  Heading,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../Components/theme-toggle-button";
import Logo from "../Components/logo";

const Navbar = (props) => {
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

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
