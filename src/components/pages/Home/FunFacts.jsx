import React, { useState } from 'react'
import MetroLines from '../../dummydata/MetroTips'
import { ListItem,Heading, UnorderedList, Text, Container,Box } from '@chakra-ui/react'

const FunFacts = () => {
  return (
    <Container maxW={"1280px"} mx={"auto"} mb={"45px"} mt={{base:"200px",sm:"110px",md:"150px",lg:"80px"}}>
        <Heading fontSize={"20px"} color={"#D74947"}>Fun Facts about the Delhi Metro</Heading>
            <UnorderedList >
                {MetroLines.map((tip,index) => <ListItem key={index}>
                    <Box  my={"20px"} >
                        <Text>{tip.line}</Text>
                    </Box>
                </ListItem>)}
            </UnorderedList>
        </Container>
  )
}

export default FunFacts