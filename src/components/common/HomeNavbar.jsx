import { Box, Button, Grid, GridItem, Stack, Flex, Text, Container, Image } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import MobileNavbaar from "./MobileNavbar"
import { NavLink, Link } from 'react-router-dom'
import metroicon from '/images/metro-icon.webp'


const HomeNavbar = () => {
    return (
        <>
            <Box boxShadow={"1px 1px 3px 1px rgba(0,0,0,0.1)"} bg={{ base: 'white' }} position="sticky" zIndex={1} right="0" left={0} top={0} borderBottom={"1px solid rgba(0,0,0,0.1)"}>
                <Flex
                    h={"65px"}
                    textAlign={"center"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Flex textAlign={"center"} alignItems={"center"} gap={"0.5rem"}>
                        <Box height={"40px"} width={"40px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Image src={metroicon} alt='metro' width={"100%"}></Image>
                        </Box>
                        <Text
                            fontSize='xl'
                            as="b"
                            color={"black"}>
                            <Link to='/'>
                                MetroZone
                            </Link>
                        </Text>
                    </Flex>

                </Flex>
            </Box>
        </>
    )
}

export default HomeNavbar

// <>
// <Box bg={{ base: 'white' }} position="sticky" zIndex={1} right="0" left={0} top={0} borderBottom={"1px solid rgba(0,0,0,0.1)"}>
// {/* <Box bg={{ base: 'white' }} position="fixed" zIndex={1} right="0" left={0} top={0} borderBottom={"1px solid rgba(0,0,0,0.1)"}> */}
//     <Grid
//         h={"65px"}
//         templateRows={"repeat(1, 1fr)"}
//         templateColumns={{ base: 'repeat(7, 1fr)', sm: 'repeat(6, 1fr)' }}
//         maxW={"1380px"} mx={"auto"}
//     >
//         <GridItem
//             colSpan={{ base: 2, sm: "0" }}
//             pl={"15%"}
//             alignSelf='center'
//             w={{ base: '150px', sm: "full" }}

//         >

//             <Text
//                 fontSize='xl'
//                 as="b"
//                 color={"black"}

//             >
//                 <Link to='/'>
//                     MetroZone
//                 </Link>
//             </Text>
//         </GridItem>

//         <GridItem
//             colSpan={{ base: 3, sm: 3, md: 2 }}
//             display={{ base: 'none', sm: 'block' }}

//         >
//             <Stack
//                 direction='row'
//                 align="center"
//                 justify='center'
//                 h='100%'
//                 spacing={{
//                     sm: '2',
//                     md: '6',
//                     lg: '10',
//                     xl: '12'
//                 }}

//             >
//                 <Button colorScheme='whiteAlpha' variant='unstyled'>
//                     <NavLink to='/' >
//                         Home
//                     </NavLink>
//                 </Button>
//                 <Button colorScheme='whiteAlpha' variant='unstyled'>
//                     <NavLink to='/'>
//                         Facilities
//                     </NavLink>
//                 </Button>
//                 <Button colorScheme='whiteAlpha' variant='unstyled' >
//                     <NavLink to='/'>
//                         Routes
//                     </NavLink>
//                 </Button>
//                 <Button colorScheme='whiteAlpha' variant='unstyled' >
//                     <NavLink to='/'>
//                         Contact
//                     </NavLink>
//                 </Button>
//             </Stack>
//         </GridItem>

//         <GridItem colSpan={{ sm: 1, md: 2 }}
//             display={{
//                 base: 'none',
//                 sm: 'block'
//             }}



//         >

//             <Stack
//                 direction='row'
//                 align='center'
//                 // justify='center'
//                 justify={"end"}
//                 pr={"15%"}
//                 gap='8'
//                 h='100%'

//             >
//                 <Link to='/'>
//                     <Text fontWeight={"500"}>Signup</Text>

//                 </Link>

//                 <Button
//                     bg={"#A82724"}
//                     _hover={"none"}
//                     _active={"#A82724"}
//                     color={"#fff"}
//                     onClick={() => setToggle(!toggle)}
//                 >
//                     Login
//                 </Button>
//             </Stack>
//         </GridItem>
//         <GridItem display={{ base: 'block', sm: 'none' }} colSpan='5' pt='4' align='right'  >
//             <MobileNavbaar />
//         </GridItem>


//     </Grid>
// </Box>
// </>