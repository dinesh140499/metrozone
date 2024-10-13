import {
  Grid,
  Container,
  Text,
  UnorderedList,
  ListItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaApple, FaGoogle } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <Box
        borderTop={"1px solid rgba(0,0,0,0.1)"}
        mt={{ base: "50px", lg: "100px" }}
      ></Box>
      <Container maxW={"1280px"} mx={"auto"} mb={"20px"}>
        <Flex
          mt={"50px"}
          //   justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={"20px"}
        >
          <Box width={{ base: "100%", lg: "unset" }} flex={"2"}>
            <Text fontWeight={"700"}>Our Products</Text>
            <UnorderedList listStyleType={"none"} marginLeft={"0"}>
              <ListItem mt={"10px"} color={"#5F6D7E"}>
                <a href="https://roomstrack.hoogaaa.com/"  attribute={false} target="_blank">
                  Hotel Booking
                </a>
              </ListItem>
              <ListItem mt={"10px"} color={"#5F6D7E"}>
                <a href="https://micro.hoogaaa.com/Qr-code" attribute={false} target="_blank">
                  Micro Services
                </a>
              </ListItem>
              <ListItem mt={"10px"} color={"#5F6D7E"} attribute={false} target="_blank">
                <a href="https://tbookt.com/" attribute={false} target="_blank">
                  Tbookt
                </a>
              </ListItem>
              <ListItem mt={"10px"} color={"#5F6D7E"}>
                <a href="https://potsnews.com/" attribute={false} target="_blank">
                  Post News
                </a>
              </ListItem>
              <ListItem mt={"10px"} color={"#5F6D7E"}>
                <a href="https://hoogaaa.com/products" attribute={false} target="_blank">
                  More
                </a>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box width={{ base: "100%", lg: "unset" }} flex={"2"}>
            <Text fontWeight={"700"}>Company</Text>
            <UnorderedList listStyleType={"none"} marginLeft={"0"}>
              <ListItem mt={"10px"} color={"#5F6D7E"}>
                <a href="/privacy">Privacy Policy</a>
              </ListItem>
            </UnorderedList>
          </Box>
          {/* <Box>
                        <Text fontWeight={"700"}>Resources</Text>
                        <UnorderedList listStyleType={"none"} marginLeft={"0"}>
                            <ListItem mt={"10px"} color={"#5F6D7E"}>Community</ListItem>
                            <ListItem mt={"10px"} color={"#5F6D7E"}>Events</ListItem>
                            <ListItem mt={"10px"} color={"#5F6D7E"}>Help Center</ListItem>
                            <ListItem mt={"10px"} color={"#5F6D7E"}>Partners</ListItem>
                        </UnorderedList>
                    </Box> */}
        </Flex>
      </Container>
      {/* Bottom Footer */}
      <Container mx={"auto"} mb={"20px"} maxW={"1280px"} mt={"50px"} >
        <Flex
          justifyContent={{ base: "center", lg: "space-between" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={"10px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"0.5rem"} 
          >
            <Text>&copy; 2023 Hoogaaa. All Rights Reserverd.</Text>
            <Box>
              <Flex gap={"20px"} flexWrap={"wrap"} justifyContent={"center"}>
                <a
                  href="https://www.linkedin.com/company/hoogaaa/"
                  attribute={false} target="_blank"
                >
                  <BsLinkedin fontSize={"20px"} cursor={"pointer"} />
                </a>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
