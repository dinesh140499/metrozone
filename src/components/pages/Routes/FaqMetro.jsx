import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Faq from '../../dummydata/Faq'

const FaqMetro = () => {

    return (
        <Container maxW={"1280px"} mx={'auto'} my={"30px"}>
            <Heading fontSize={"18px"} fontWeight={"500"} color={"#A82724"}>FAQ about Metro Routes</Heading>
            {Faq.length>0 && Faq.map((faq, index) => <Accordion key={index} defaultIndex={[-1]} allowMultiple my={"20px"} border={"1px solid rgba(0,0,0,0.1)"}
                borderRadius="8px">
                <AccordionItem borderBottom={"none"} borderTop={"none"}>
                    <Text>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' fontWeight={"600"}>
                               {faq.ques}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Text>
                    <AccordionPanel pb={4}>
                    {faq.ans}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>)}
        </Container>
    )
}

export default FaqMetro