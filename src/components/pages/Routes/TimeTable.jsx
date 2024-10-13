import { Container, Flex, Image, Text, Card, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { SearchApi } from "../../../reducers/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../common/Loader";

const TimeTable = () => {
  const { metroData, selectMetro } = useSelector((state) => state.metroList);
  const { searchData, searchLoader } = useSelector(
    (state) => state.metroSearch
  );
  const [overview, setOverview] = useState("");
  let { metroname, source: fromStation, destination: toStation } = useParams();
  let metroRep = metroname?.replace(":", "");
  fromStation = fromStation.replace(":", "");
  toStation = toStation.replace(":", "");
  // console.log("length😁", searchData.length!==0?"Data":"not data")

  useEffect(() => {
    if (
      metroData &&
      metroData.data !== undefined &&
      metroData.data.length > 0
    ) {
      let overviewFilter = metroData?.data.filter((cur) =>
        cur.metroName.includes(metroRep)
      );
      setOverview(overviewFilter[0]?.metroDetails[0]?.promoData[0]);
    }
  }, [metroData, searchData]);

  return (
    <Container
      maxW={"1280px"}
      mx={"auto"}
      mt={"30px"}
    // display={{ base: "none", lg: "block" }}
    >
      <Tabs size="md" variant="enclosed-colored" >
        <TabList display={"flex"} flexDirection={{ base: "column", lg: "unset" }}>
          <Tab
            _selected={{ color: "white", bg: "#A82724" }}
            py={"12px"}
            fontSize={"16px"}
            w={"100%"}
            borderRadius={{ base: "0px", lg: "15px 0 0 0px" }}
          >
            Ticket Price & Timetable
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#A82724" }}
            py={"12px"}
            fontSize={"16px"}
            w={"100%"}
          >
            Destination
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#A82724" }}
            py={"12px"}
            fontSize={"16px"}
            w={"100%"}
          >
            Route Planner
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#A82724" }}
            py={"12px"}
            fontSize={"16px"}
            w={"100%"}
          >
            Source
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#A82724" }}
            py={"12px"}
            fontSize={"16px"}
            w={"100%"}
            borderRadius={{ base: "0", lg: "0 15px 0 0" }}
          >
            Overview
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Box
              flexWrap={{ base: "wrap", lg: "unset" }}
              alignItems={"center"}
              border={"1px solid #C8C8C8"}
              borderRadius={{ base: "0px", lg: "0 0 15px 15px" }}
              pt={"20px"}
              py={"20px"}
              px={{ base: "20px", lg: "50px" }}
            >
              {searchLoader ? (
                <Loader />
              ) : (
                <>
                  {searchData.length !== 0 && searchData?.data[0]?.Routes.length > 2 ? (
                    <>
                      {Object.entries(searchData?.data[0]?.FareTime)?.map(
                        ([key, val] = entry, index) => (
                          <Flex
                            width={"100%"}
                            py={"10px"}
                            key={index}
                            borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          >
                            <Box width={"50%"}>
                              <Text color={"rgba(0,0,0,0.7)"}>{key}</Text>
                            </Box>
                            <Text width="50%" textAlign={{ base: "right", lg: "unset" }}>{val}</Text>
                          </Flex>
                        )
                      )}
                      {Object.entries(searchData?.data[0]?.entryGates)?.map(
                        ([key, val] = entry, index) => (
                          <Flex
                            width={"100%"}
                            py={"10px"}
                            borderBottom={"1px solid rgba(0,0,0,0.1)"}
                            key={index}
                          >
                            <Box width={"50%"}>
                              <Text color={"rgba(0,0,0,0.7)"} >{key}</Text>
                            </Box>
                            <Text width="50%" textAlign={{ base: "right", lg: "unset" }}>{val}</Text>
                          </Flex>
                        )
                      )}
                      {Object.entries(searchData?.data[0]?.exitGates)?.map(
                        ([key, val] = entry, index) => (
                          <Flex
                            width={"100%"}
                            py={"10px"}
                            key={index}
                            borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          >
                            <Box width={"50%"}>
                              <Text color={"rgba(0,0,0,0.7)"}>{key}</Text>
                            </Box>
                            <Text width="50%" textAlign={{ base: "right", lg: "unset" }}>{val}</Text>
                          </Flex>
                        )
                      )}
                    </>
                  ) : (
                    <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                      No data available
                    </Text>
                  )}
                </>
              )}
            </Box>
          </TabPanel>
          <TabPanel p={0}>
            <Box
              flexWrap={{ base: "wrap", lg: "unset" }}
              alignItems={"center"}
              border={"1px solid #C8C8C8"}
              borderRadius={"0 0 15px 15px"}
              pt={"20px"}
              py={"20px"}
              px={"50px"}
            >
              {searchLoader ? (
                <Loader />
              ) : (
                <>
                  {searchData.length !== 0 && searchData?.data[0]?.Routes.length > 2 &&
                    searchData?.data[0]?.destinationData ? (
                    <>
                      {Object.entries(
                        searchData?.data[0]?.destinationData
                      )?.map(([key, val] = entry) => (
                        <Flex
                          width={"100%"}
                          py={"10px"}
                          key={key}
                          borderBottom={"1px solid rgba(0,0,0,0.1)"}
                        >
                          <Box width={"50%"}>
                            <Text color={"rgba(0,0,0,0.7)"}>{key}</Text>
                          </Box>
                          <Text width="50%">{val}</Text>
                        </Flex>
                      ))}
                    </>
                  ) : (
                    <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                      No data available
                    </Text>
                  )}
                </>
              )}
            </Box>
          </TabPanel>
          <TabPanel
            justifyContent={{ base: "center", lg: "space-between" }}
            flexWrap={{ base: "wrap", lg: "unset" }}
            alignItems={"center"}
            border={"1px solid #C8C8C8"}
            borderRadius={"0 0 15px 15px"}
            py={"35px"}
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58687162583!2d-0.2667474348362463!3d51.528525715915134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%15UK!5e0!3m2!1sen!2sin!4v1688716189336!5m2!1sen!2sin"
              height={150}
              width={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"/> */}
            <a
              href={searchData.length !== 0 && searchData.data[0].map}
              target="_blank"
            >
              <Image
                src={searchData.length !== 0 && searchData.data[0].map}
                alt="map"
                width={"100%"}
                height={"350px"}
                objectFit={"contain"}
              ></Image>
            </a>
            <Flex justifyContent={"center"} alignItems={"center"}></Flex>
          </TabPanel>
          <TabPanel p={0}>
            <Box
              flexWrap={{ base: "wrap", lg: "unset" }}
              alignItems={"center"}
              border={"1px solid #C8C8C8"}
              borderRadius={"0 0 15px 15px"}
              pt={"20px"}
              py={"20px"}
              px={"50px"}
            >
              {searchLoader ? (
                <Loader />
              ) : (
                <>
                  {searchData.length !== 0 && searchData?.data[0]?.Routes.length > 2&&
                    searchData?.data[0]?.sourceData ? (
                    <>
                      {Object.entries(searchData?.data[0]?.sourceData)?.map(
                        ([key, val] = entry) => (
                          <Flex
                            width={"100%"}
                            py={"10px"}
                            key={key}
                            borderBottom={"1px solid rgba(0,0,0,0.1)"}
                          >
                            <Box width={"50%"}>
                              <Text color={"rgba(0,0,0,0.7)"}>{key}</Text>
                            </Box>
                            <Text width="50%">{val}</Text>
                          </Flex>
                        )
                      )}
                    </>
                  ) : (
                    <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                      No data available
                    </Text>
                  )}
                </>
              )}
            </Box>
          </TabPanel>
          <TabPanel
            justifyContent={{ base: "center", lg: "space-between" }}
            flexWrap={{ base: "wrap", lg: "unset" }}
            alignItems={"center"}
            border={"1px solid #C8C8C8"}
            borderRadius={"0 0 15px 15px"}
            py={"35px"}
            px={"50px"}
          >
            {searchData.code !== 400 && searchData.length !== 0 && searchData?.data[0]?.Routes.length > 2 ? (
              <Box>
                The route from
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + fromStation + " "}
                </Text>
                to
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + toStation + " "}
                </Text>
                on the metro line boasts a total of
                <Text display={"inline"} fontWeight={"600"}>
                  {searchData?.data[0]?.FareTime["Total Stops"]}
                </Text>
                . Traveling this route is quite efficient, taking approximately
                <Text display={"inline"} fontWeight={"600"}>
                  {searchData?.data[0]?.FareTime["Travel Time"]?.replace(
                    "⏱",
                    ""
                  )}
                </Text>
                . The distance covered during this journey is a mere
                <Text display={"inline"} fontWeight={"600"}>
                  {searchData?.data[0]?.FareTime["Total Distance"]
                    ?.replace("KM", "")
                    ?.replace("⛗", "")}
                  kilometers
                </Text>
                . For this convenient commute, you can expect to pay Rs.
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + searchData?.data[0]?.FareTime["Token Fare"]?.replace("DMRC", "") + " "}
                </Text>
                as the metro fare, as per the <Text display={"inline"} fontWeight={"600"}>
                  DMRC
                </Text> pricing. Additionally, there
                may be concessions available for passengers using smartcards,
                providing extra affordability. The first metro train departing
                from
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + fromStation + " "}
                </Text>
                Gate to
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + toStation + " "}
                </Text>
                sets off at <Text display={"inline"} fontWeight={"600"}>
                  {" " + searchData?.data[0]?.FareTime["First Metro"]?.replace("⏱", "") + " "}
                </Text>, ensuring an early start to your day. If
                you're out late, don't worry—the last metro on this route
                departs at midnight, at precisely <Text display={"inline"} fontWeight={"600"}>
                  {" " + searchData?.data[0]?.FareTime["Last Metro"]?.replace("⏱", "") + " "}
                </Text>.
                <Text display={"inline"} fontWeight={"600"}>
                  {" " + toStation + " "}
                </Text>
                metro station is equipped with a paid parking facility, offering
                various pricing slabs to accommodate your parking needs. It's
                worth noting that this route is a direct one, without the need
                for any interchange stations, making your journey from source to
                destination a seamless experience.
                {/* {overview} */}
              </Box>
            ) : (
              <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                      No data available
                    </Text>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TimeTable;
