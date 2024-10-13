import { Container, Flex, Text, Box, Button } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineExpandLess } from "react-icons/md";
import { TbTopologyStar2 } from "react-icons/tb";
import { HiSwitchVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MetroList, metroName } from "../../../reducers/MetroListSlice";
import { MetroPost } from "../../../reducers/MetroPostSlice";
import { SearchApi, metroRealData } from "../../../reducers/SearchSlice";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../common/Loader";
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { getMetroData } from "../../../api/metroApi";
import { Helmet } from "react-helmet-async";
import { colorsFun } from "../../../utils/colors";

const ReverseRoute = () => {
  const { metroData, selectMetro } = useSelector((state) => state.metroList);
  const { metroPostData } = useSelector((state) => state.metroPost);
  const [dataShow, setDataShow] = useState(true);
  const navigate = useNavigate();
  const { searchData, searchLoader } = useSelector(
    (state) => state.metroSearch
  );
  const [myResponse,setMyResponse]=useState([])
  const [metroStationData, setMetroStationData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  let { metroname, source: fromStation, destination: toStation } = useParams();
  metroname = metroname.replace(":", "");
  fromStation = fromStation.replace(":", "");
  toStation = toStation.replace(":", "");
  // ********* Before
  const [selectVal, setSelectVal] = useState({
    from: fromStation,
    to: toStation,
    metro: selectMetro || metroname,
  });

  const selectFun = (e) => {
    const { value, name } = e.target;
    setSelectVal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };



  useEffect(() => {
    const { from, to, metro } = selectVal;
    if (from !== "" && to !== "") {
      dispatch(MetroList());
      if (metroname !== metro) {
        dispatch(MetroPost(selectVal.metro));
      } else {
        dispatch(MetroPost(selectVal.metro));
        dispatch(
          SearchApi({ from: fromStation, to: toStation, metro: metroname })
        );
        setDataShow(true);
      }
    }
  }, [selectVal.metro,myResponse]);

  useEffect(() => {
    if (searchData && searchData.data !== undefined && searchData.data.length > 0) {
      if (searchData?.data[0]?.Routes.length > 0) {
        const stationsData = [...searchData?.data[0]?.Routes];
        let newStation = stationsData.filter((cur) => !cur.includes("Change here"))
        let colorData = "";
        const newStationDataCreate = newStation.map((d) => {
          colorData = d.toLowerCase().includes("towards")
            ? d.toLowerCase().split(" ").at(-2)
            : colorData;
          const newStationData = {
            stationName: d,
            color:
              d.toLowerCase() === "change here" ||
                d.toLowerCase().includes("towards")
                ? ""
                : colorData,
          };
          return newStationData;
        });
        setMetroStationData(newStationDataCreate);
      }
    }
  }, [searchData]);

  // console.log(searchData?.data === 0)
  const searchMetro = async () => {
    // const { from, to, metro } = selectVal
    if (selectVal.from === selectVal.to) {
      alert("station is cannot be same");
    } else {
      let { from, to, metro } = selectVal;
      const response = await getMetroData(selectVal);
      setMyResponse(response)
      if (response.code === 200 && response.status) {
        setDataShow(true);
        navigate(`/routes/:${metro}/:${from}/:${to}`);
        dispatch(metroRealData(response));
      } else {
        // navigate(`/routes/:${metro}/:${from}/:${to}`);
        setDataShow(false);
      }
      //  dispatch(SearchApi({ from, to, metro }));
    }
  };



  return (
    <>
      <Helmet>
        <title>Routes - Metrozone</title>
        <link rel="canonical" href="/routes/:${metro}/:${from}/:${to}" />
        <meta
          name="description"
          content="Welcome to MetroZone, the premier website application for all your train details search needs! With MetroZone."
        />
        <meta
          name="keywords"
          content="metrozone,chennai metro,delhi metro,mumbai metro,kanpur metro,pune metro, metro, station, hoogaaa, metro route"
        />
      </Helmet>
      <Container maxW={"1280px"} mx={"auto"}>
        <Flex justifyContent={"space-between"} mt={"1rem"} flexDirection={{ base: "column", lg: "row" }} >
          <Flex
            alignItems={"center"}
            color={"#A82724"}
            gap={{ base: "10px", lg: "35px" }}
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight={"500"}
            width={"100%"}
          >
            <Box transform={"rotate(270deg)"}>
              <MdOutlineExpandLess fontSize={"1.8rem"} cursor={"pointer"} onClick={() => navigate('/')} />
            </Box>
            <Text fontSize={{ base: "17px", md: "18.5px", lg: "20px" }}>{selectVal.from}</Text>
            <BsArrowRight fontSize={"1.8rem"} />
            <Text fontSize={{ base: "17px", md: "18.5px", lg: "20px" }}>{selectVal.to}</Text>
          </Flex>
          <Flex gap={"15px"} w={"100%"} display={"flex"} flexDirection={{ base: "column", lg: "row" }} mt={{ base: "15px", lg: "0" }}>
            <Select
              placeholder="Choose Metro"
              width={"100%"}
              name="metro"
              onChange={selectFun}
              value={selectVal.metro}
              cursor={"pointer"}
            >
              {metroData?.data?.length !== 0 &&
                metroData?.data?.map((cur, index) => {
                  return (
                    <option key={index} value={cur.metroName}>
                      {cur.metroName}
                    </option>
                  );
                })}
            </Select>

            <Flex gap={"15px"}
              alignItems={"center"}
            >
              <Select
                placeholder="From"
                name="from"
                onChange={selectFun}
                value={selectVal.from} cursor={"pointer"}
              >
                {metroPostData?.data?.map((metroName, index) => {
                  return (
                    <option key={index + 1} value={metroName}>
                      {metroName}
                    </option>
                  );
                })}
              </Select>
              <FaArrowRightArrowLeft fontSize={"1.5rem"} />
              <Select
                placeholder="To"
                name="to"
                onChange={selectFun}
                value={selectVal.to} cursor={"pointer"}
              >
                {metroPostData?.data?.map((metroName, index) => {
                  return (
                    <option key={index + 1} value={metroName}>
                      {metroName}
                    </option>
                  );
                })}
              </Select>
            </Flex>
            <Button
              _hover={{ background: "#A82724", color: "white" }}
              onClick={() => searchMetro()}
              fontSize={{ base: "30px", lg: "50px" }}
            >
              <AiOutlineSearch />
            </Button>
          </Flex>
        </Flex>
        <Box>
          <Flex
            mt={{ base: "15px", lg: "30px" }}
            flexDirection={{ base: "column", lg: "row" }}
            bgColor={"#EFEFEF"}
            border={"1px solid #C8C8C8"}
            borderBottom={"none"}
            // alignItems={"center"}
            gap={{ base: "10px", lg: "15px" }}
            p={{ base: "10px 10px", lg: "20px 50px" }}
            borderRadius={"15px 15px 0px 0px"}
            alignItems={"center"}
          >
            <Text fontSize={"1.2rem"} fontWeight={"600"}>
              {dataShow &&
                searchData?.data !== 0 &&
                searchData?.data?.[0]?.Routes[0]}
            </Text>
          </Flex>

          <Flex
            justifyContent={{ base: "flex-start", lg: "space-between" }}
            flexWrap={"wrap"}
            alignItems={"center"}
            border={"1px solid #C8C8C8"}
            borderRadius={"0 0 15px 15px"}
            padding={{ base: "20px 0", md: "20px 50px" }}
            gap={"20px"}
            py={"20px"}
            px={{ base: "10px", lg: "" }}
          >
            {/* Route First */}
            {searchLoader ? (
              <Loader />
            ) : (
              <>
                {dataShow && searchData?.data !== 0 && searchData?.data?.[0] ? (
                  <>
                    <Box
                      position={"relative"}
                      // width={{ base: "100%", lg: "30%" }}
                      width={"100%"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"unset"}
                      >
                        {metroStationData.length !== 0 &&
                          metroStationData.length > 2 ? (
                          metroStationData?.slice(1).map((routes, index) => {
                            return (
                              <Box
                                display={"flex"}
                                key={index}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                mt={"25px"}
                                _first={{ mt: "15px" }}
                                width={"100%"}
                              >
                                <Flex alignItems={"center"} gap={"20px"}>
                                  {routes.stationName.includes("Towards") ||
                                    routes.stationName === "Change here" ? (
                                    ""
                                  ) : (
                                    <TbTopologyStar2
                                      fontSize={"20px"}
                                      // color={"#a82724"}
                                      color={colorsFun(routes.color)}
                                    />
                                  )}

                                  <Text
                                    fontWeight={"400"}
                                    // color={"#207AEE"}
                                    fontSize={"17px"}
                                  >
                                    {routes?.stationName.includes("Towards") ? (
                                      <Box
                                        p={"8px 10px"}
                                        color={"black"}
                                        width={"100%"}
                                        letterSpacing={"1px"}
                                        backgroundColor={"#efefef"}
                                        borderRadius={"10px"}
                                      >
                                        {routes?.stationName.includes(
                                          "Towards"
                                        ) ? (
                                          <Text>{routes.stationName}</Text>
                                        ) : (
                                          <Text fontSize="50px" color="tomato">
                                            {routes.stationName}
                                          </Text>
                                        )}
                                      </Box>
                                    ) : (
                                      routes.stationName
                                    )}
                                  </Text>
                                </Flex>
                                {routes.stationName.includes("Towards") ? (
                                  ""
                                ) : (
                                  <AiOutlineArrowDown
                                    fontSize={"1.3rem"}
                                    color={colorsFun(routes.color)}
                                  />
                                )}
                              </Box>
                            );
                          })
                        ) : (
                          <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                            No direction available
                          </Text>
                        )}
                      </Box>
                    </Box>

                    {/* Apply Previous Reverse Route Functionality */}
                  </>
                ) : (
                  <Text fontSize={"25px"} w="100%" textAlign={"center"}>
                    No data available
                  </Text>
                )}
              </>
            )}
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default ReverseRoute;
