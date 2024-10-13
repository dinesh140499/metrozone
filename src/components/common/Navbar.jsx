import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Container
        width={"full"}
        maxWidth={"1280px"}
        margin={"auto"}
        py={"20px"}
        position={"relative"}
        zIndex={"9999"}
        
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link to={"/"}>
            <Text fontSize={"1.4rem"} fontWeight={"500"}>
              Logo
            </Text>
          </Link>
          {/* top={{base:"50%",lg:"0%"}} left={{base:"50%",lg:"0%"}} */}
          <Box justifyContent={"space-between"} display={"flex"} alignItems={"center"}  w={{base:"100%",lg:"70%"}} >
            <Flex gap={"20px"}>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Facilities</Link>
              <Link to={"/"}>Routes</Link>
              <Link to={"/"}>Help & Contact</Link>
            </Flex>
            <Flex alignItems={"center"} gap={"20px"}>
              <Link to={"/"}>Signup</Link>
              <Button
                bg={"#D74947"}
                _hover={"none"}
                _active={"#D74947"}
                color={"#fff"}
                onClick={() => setToggle(!toggle)}
              >
                Login
              </Button>
            </Flex>
          </Box>
          <Box display={{ base: "unset", lg: "none" }}>
            <GiHamburgerMenu fontSize={"1.4rem"} />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
