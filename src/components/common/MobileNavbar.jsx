import React, { useState } from 'react'
import { Stack, Button, Box, useDisclosure, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaRoute } from 'react-icons/fa';
import { GrHelp } from 'react-icons/gr';
import { VscSignIn, } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome } from 'react-icons/ai';


import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';

const MobileNavbar = () => {
    const [size, setSize] = useState('xs')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = React.useState('right')

    function HandleSize(newSixe) {
        setSize(newSixe)
        onOpen()
    }

    return (

        <Box>
            <Button
                onClick={() => HandleSize(size)}
                m={{ base: '1', md: '4' }}
                variant='ghost'
                size={size}
            >
                <GiHamburgerMenu fontSize={"20px"} />
            </Button>
            <Drawer
                onClose={onClose}
                isOpen={isOpen}
                size={size}
                placement={placement}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Stack gap='4' w='100%' position={'sticky'} left='0'>
                            <NavLink to='/'>
                                <Button gap='4' variant='simple' w='100%' p='2' justifyContent='left' >
                                    {/* <Icon as={FaRoute} boxSize='6' /> */}
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink to='/facilities'>
                                <Button gap='4' variant='simple' w='100%' p='2' justifyContent='left' >
                                    {/* <Icon as={FaRoute} boxSize='6' /> */}
                                    Facilities
                                </Button>
                            </NavLink>
                            <NavLink to='/'>
                                <Button gap='4' variant='simple' w='100%' p='2' justifyContent='left' >
                                    {/* <Icon as={FaRoute} boxSize='6' /> */}
                                    Routes
                                </Button>
                            </NavLink>
                            <NavLink to='/' variant="simple">
                                <Button gap='4' variant='simple' w='100%' borderRadius='xl' p='2' justifyContent='left'>
                                    {/* <Icon as={GrHelp} boxSize='6' /> */}
                                    Contact
                                </Button>
                            </NavLink>


                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MobileNavbar