import React from 'react'
import MetroLines from '../../dummydata/MetroTips'
import { ListItem,Heading, UnorderedList, Text, Container,Box } from '@chakra-ui/react'

const TravelTips = () => {
  return (
    <Container maxW={"1280px"} mx={"auto"} my={"50px"} mt={{base:"160px",sm:"250px",md:"150px",lg:"80px"}}>
        <Heading fontSize={"20px"} color={"#D74947"}>Metro Travel Tips</Heading>
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

export default TravelTips