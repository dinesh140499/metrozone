import React from 'react'
import { Box, CircularProgress, CircularProgressLabel,Text } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Box
            textAlign={"center"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            w={"100%"}
            py={"1rem"}
        >
            <CircularProgress isIndeterminate color="#d74947" />
            <Text mt={"7px"}>Loading...</Text>
        </Box>
    )
}

export default Loader