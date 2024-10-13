import React, { useEffect, useState } from "react";
import MetroLines from "../dummydata/MetroLines";
import {
  ListItem,
  Heading,
  OrderedList,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DelhiMetroLine = () => {
  const { metroData, selectMetro, loading } = useSelector(
    (state) => state.metroList
  );
  const [overview, setOverview] = useState('')
  let { metroname } = useParams();
  let metroRep = metroname?.replace(":", "");

  const [metrowala, setmetrowala] = useState([]);

  useEffect(() => {
    if (metroData && metroData.data !== undefined && metroData.data.length > 0) {
      let filterdata = metroData?.data.filter(cur => cur.metroName.includes(metroRep))[0]?.metroDetails[0].aboutDelhiMetroData?.map(cur => cur)
      setmetrowala(filterdata);
      let overviewFilter=metroData?.data.filter(cur => cur.metroName.includes(metroRep))
      setOverview(overviewFilter[0]?.metroDetails[0]?.promoData[0])

    }
  }, [metroData, metroname]);



  return (
    <Container maxW={"1280px"} mx={"auto"} my={"50px"}>
      <Heading fontSize={"20px"} color={"#A82724"}>
        About {metroRep}
      </Heading>
      <Text mt={"10px"}>
        {overview}
      </Text>
      {loading ? (
        ""
      ) : (
        // <OrderedList pl={"0"}>
        //   {MetroLines.map((list, index) => (
        //     <ListItem key={index}>
        //       <Box my={"20px"}>
        //         <Text fontWeight={"600"}>{list.line} : </Text>
        //         <Text>{list.desc}</Text>
        //       </Box>
        //     </ListItem>
        //   ))}
        // </OrderedList>
        <OrderedList pl={"0"}>
          {metrowala?.length !== 0 &&
            metrowala.map((cur, index) => (
              <ListItem key={index}>
                <Box my={"20px"}>
                  <Text >
                    {/* {cur?.metroDetails[0]?.aboutDelhiMetroData} : */}
                    {cur}
                  </Text>
                  {/* <Text>{cur.metroDetails}</Text> */}
                </Box>
              </ListItem>
            ))}
        </OrderedList>
      )}
    </Container>
  );
};

export default DelhiMetroLine;
