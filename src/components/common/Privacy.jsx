import { Text, Container, Box, OrderedList, ListItem } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { PrivacyArray } from "./PrivacyArray";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Metrozone</title>
        <link rel="canonical" href="/routes/:${metro}/:${from}/:${to}" />
        <meta
          name="description"
          content="Welcome to MetroZone, the premier website application for all your train details search needs! With MetroZone."
        />
        <meta
          name="keywords"
          content="metrozone,metro, chennai metro,delhi metro,mumbai metro,knapur metro, metro, station, hoogaaa, metro route"
        />
      </Helmet>
      <Container maxW={"1280px"} mx="auto" mt={{base:"1rem",md:"2rem",lg:"3rem"}}>
        <Box borderBottom={"1px solid rgba(0,0,0,0.1)"}>
          <Text fontWeight={"600"} pb={"0.5rem"} fontSize={"1.3rem"}>
            Privacy Policy
          </Text>
        </Box>

        <Text mt={"1rem"}>
          Welcome to MetroZone's Privacy Policy. Your privacy is important to
          us, and we want to ensure that you have a clear understanding of how
          we handle your information. This policy explains how we collect, use,
          protect, and manage your Personally Identifiable Information (PII) in
          accordance with our website.
        </Text>

        <Box mt={"2rem"}>
          <OrderedList>
            {PrivacyArray.map((cur) => {
              return (
                <Box mb={"1.5rem"}>
                  <ListItem fontWeight={"600"} key={cur.id}>{cur.title}</ListItem>
                  <Text mt={"0.5rem"} listStyleType={"none"}>
                    {cur.desc}
                  </Text>
                </Box>
              );
            })}
          </OrderedList>
        </Box>
        
      </Container>
    </>
  );
};

export default Privacy;
