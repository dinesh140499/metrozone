import React, { useEffect, useState } from "react";
import { Container, keyframes } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  RadioGroup,
} from "@chakra-ui/react";

import { Radio } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import FunFacts from "./FunFacts";
import TravelTips from "./TravelTips";
import { useDispatch, useSelector } from "react-redux";
import { MetroList } from "../../../reducers/MetroListSlice";
import { metroName } from "../../../reducers/MetroListSlice";
import { MetroPost, metroDirection } from "../../../reducers/MetroPostSlice";
import Loader from "../../common/Loader";
import no_data from "/images/no-data.webp";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { metroData, selectMetro, loading } = useSelector(
    (state) => state.metroList
  );
  const [placeholderToggle, setPlaceholderToggle] = useState(false);
  const [selectVal, setSelectVal] = useState({
    from: "",
    to: "",
  });
  const { metroPostData } = useSelector((state) => state.metroPost);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = React.useState("Delhi Metro");
  // console.log("Radio Button ",radioValue)

  const selectFun = (e) => {
    const { value, name } = e.target;
    setSelectVal((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // console.log([...metroPostData.data].sort())

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
      });
    }
    const { from, to } = selectVal;
    dispatch(MetroList());
    dispatch(metroDirection({ from, to }));
    dispatch(MetroPost(radioValue));

    // console.log(selectVal.from, selectVal.to)
  }, [selectVal.from, selectVal.to]);

  const radioFn = (data) => {
    dispatch(MetroPost(data));
    dispatch(metroName(data));
    // dispatch(metroDirection({from,to}))
  };

  const RadioSubmit = (metroname) => {
    setToggle(!toggle);
    dispatch(metroName(metroname));
  };

  const SearchRoute = () => {
    const { from, to } = selectVal;

    // console.log("from : " + selectVal.from, "to : ", +selectVal.to)
    // setPlaceholderToggle(true)
    if (selectVal.from === selectVal.to && selectVal.to === selectVal.from) {
      return alert("station value cannot be same");
    }
    if (from === "" || to === "") {
      return alert("field cannot be blank");
    } else {
      navigate(`/routes/:${selectMetro}/:${from}/:${to}`);
    }
  };

  // Animation
  const animation = keyframes`
    from{
      transform: translateY(-5px);
    }
    to{
      transform: translateY(5px);
    }
  `;

  return (
    <>
      <Helmet>
        <title>Metrozone</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="Welcome to MetroZone, the premier website application for all your train details search needs! With MetroZone."
        />
        <meta
          name="keywords"
          content="metrozone,chennai metro,delhi metro,mumbai metro,kanpur metro, metro, station, hoogaaa, metro route"
        />
      </Helmet>
      <Container
        maxW={"full"}
        // height={{ lg: "100vh" }}
        bg={
          "linear-gradient(180deg, rgba(255, 123, 121, 0.500) 0%, rgba(240, 148, 147, 0.00) 92.71%);"
        }
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        position={"relative"}
      >
        <Container maxW={"1280px"} mx={"auto"} position={"relative"}>
          <Box
            position={"relative"}
            // top={{ base: "90px", lg: "90px" }}
            // right={{ base: "0", lg: "-5%", xl: "-10%" }}
            justifyContent={"flex-end"}
            display={"flex"}
            alignItems={"center"}
            pt={"35px"}
          >
            <Box
              width={{ base: "100%", lg: "75%" }}
              height={"70%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src="images/metro.webp" alt="metro" width={"100%"} />
            </Box>
            {toggle ? (
              <Card
                bg={"white"}
                width={{ base: "100%", md: "70%", lg: "35%" }}
                height={
                  loading
                    ? "auto"
                    : {
                        base: "100%",
                        md: "70%",
                        lg: "60%",
                      }
                }
                overflowY={"hidden"}
                position={"absolute"}
                top={{ base: "50%", md: "50%", lg: "55%" }}
                transform={{
                  base: "translate(-50%,0)",
                  md: "translate(-50%,0%)",
                  lg: "translate(-188%,-50%)",
                }}
                // left={{ base: "50%", md: "50%" }}
                left={{ base: "50%", lg: "auto" }}
                borderRadius={"15px"}
                css={{
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "8px",
                    margin: "10px 0 10px 0",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    borderRadius: "10px",
                    background: "#A82724",
                    scrollBehavior: "smooth",
                  },
                }}
              >
                <CardHeader p={{ base: "10px", lg: "15px" }}>
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Heading
                      size="md"
                      color={"#A82724"}
                      fontSize={{ base: "20px", lg: "25px" }}
                    >
                      India's Metro Route
                    </Heading>
                    <Button
                      bg={"#A82724"}
                      _hover={"none"}
                      _active={"#A82724"}
                      color={"#fff"}
                      onClick={() => RadioSubmit(radioValue)}
                    >
                      Submit
                    </Button>
                  </Flex>
                </CardHeader>
                {loading ? (
                  <Loader />
                ) : (
                  <>
                  <RadioGroup
                    onChange={setRadioValue}
                    value={radioValue}
                    overflowY={"scroll"}
                    css={{
                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-track": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        borderRadius: "10px",
                        background: "#A82724",
                        scrollBehavior: "smooth",
                      },
                    }}
                  >
                    {metroData?.data?.length !== 0 &&
                      metroData?.data?.map((cur, index) => {
                        // console.log(cur)
                        return (
                          <CardBody
                          onClick={() => radioFn(cur.metroName)}
                            key={index}
                            py={{ base: "10px", lg: "15px" }}
                            px={"15px"}
                            cursor={"default"}
                          >
                            <Flex
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"10px"}
                              >
                                <Image
                                  src={cur.metrologo}
                                  w={"50px"}
                                  height={"50px"}
                                  objectFit={"contain"}
                                  alt={cur.metroData}
                                ></Image>
                                <Text>{cur.metroName}</Text>
                              </Box>
                              <Radio
                                colorScheme="red"
                                value={cur.metroName}
                              ></Radio>
                            </Flex>
                          </CardBody>
                        );
                      })}
                  </RadioGroup>
                </>
                )}
                {/* <RadioGroup onChange={setRadioValue} value={radioValue}>
                  {metroData?.data?.length !== 0 &&
                    metroData?.data?.map((cur, index) => {
                      // console.log(cur)
                      return (
                        <CardBody
                          key={index}
                          py={{ base: "10px", lg: "15px" }}
                          px={"15px"}
                        >
                          <Flex justifyContent={"space-between"}>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"10px"}
                            >
                              <Image src={cur.metrologo} w={"50px"} height={"50px"} objectFit={"contain"} alt={cur.metroData}></Image>
                              <Text>{cur.metroName}</Text>
                            </Box>
                              <Radio
                                colorScheme="red"
                                value={cur.metroName}
                                onClick={() => radioFn(cur.metroName)}
                              ></Radio>
                          </Flex>
                        </CardBody>
                      );
                    })}
                </RadioGroup> */}
                {/* <Loader/> */}
              </Card>
            ) : (
              <Card
                bg={"white"}
                width={{ base: "100%", md: "70%", lg: "35%" }}
                minHeight={{ md: "45%", lg: "45%" }}
                position={"absolute"}
                top={{ base: "45%", md: "50%", lg: "55%" }}
                transform={{
                  base: "translate(-50%,0)",
                  md: "translate(-50%,0%)",
                  lg: "translate(-188%,-50%)",
                }}
                // left={{ base: "50%", md: "50%" }}
                left={{ base: "50%", lg: "auto" }}
                borderRadius={"15px"}
              >
                {/* MetroPost Data */}
                {metroPostData ? (
                  <>
                    <CardHeader>
                      <Flex gap={"15px"} alignItems={"center"}>
                        <Link to={"/"}>
                          <IoIosArrowBack
                            fontSize={"20px"}
                            fontWeight={"600"}
                            color={"#A82724"}
                            onClick={() => setToggle(!toggle)}
                          />
                        </Link>
                        <Heading
                          size="md"
                          color={"#A82724"}
                          fontSize={"25px"}
                          fontWeight={"500"}
                        >
                          Plan your Journey
                        </Heading>
                      </Flex>
                    </CardHeader>
                    <CardBody py={"10px"} px={"15px"}>
                      {/* <Select placeholder={metroPostData?.data?.metroName} name="from" onChange={selectFun} value={selectVal.from}> */}
                      <Select
                        // placeholder={
                        //   placeholderToggle ? "" : "From"}
                        placeholder="From"
                        name="from"
                        onChange={selectFun}
                        value={selectVal.from}
                        // onClick={() => setPlaceholderToggle(!toggle)}
                      >
                        {metroPostData?.data?.map((metroName, index) => {
                          return (
                            <option key={index} value={metroName}>
                              {metroName}
                            </option>
                          );
                        })}
                      </Select>
                    </CardBody>
                    <CardBody pt={"10px"} pb={"20px"} px={"15px"}>
                      {/* <Select placeholder={metroPostData?.data?.[metroPostData.data.length - 1]} name="to" onChange={selectFun} value={selectVal.to}> */}

                      <Select
                        // placeholder={
                        //   placeholderToggle ? "" : "To"}
                        placeholder="To"
                        name="to"
                        onChange={selectFun}
                        value={selectVal.to}
                        // onClick={() => setPlaceholderToggle(!toggle)}
                      >
                        {metroPostData?.data?.map((metroName, index) => {
                          return (
                            <option key={index} value={metroName}>
                              {metroName}
                            </option>
                          );
                        })}
                      </Select>
                    </CardBody>
                    <CardBody pt={"10px"} pb={"20px"} px={"15px"}>
                      <Button
                        bg={"#A82724"}
                        _hover={"none"}
                        _active={"#A82724"}
                        color={"#fff"}
                        width={"full"}
                        onClick={() => SearchRoute()}
                      >
                        Search Routes
                      </Button>
                    </CardBody>
                  </>
                ) : (
                  <>
                    <CardHeader>
                      <Flex gap={"15px"} alignItems={"center"}>
                        <Link to={"/"}>
                          <IoIosArrowBack
                            fontSize={"20px"}
                            fontWeight={"600"}
                            color={"#A82724"}
                            onClick={() => setToggle(!toggle)}
                          />
                        </Link>
                        <Heading
                          size="md"
                          color={"#A82724"}
                          fontSize={"25px"}
                          fontWeight={"500"}
                        >
                          Plan your Journey
                        </Heading>
                      </Flex>
                    </CardHeader>
                    <CardBody py={{ base: "0", md: "10px" }} px={"15px"}>
                      {/* <Select placeholder={metroPostData?.data?.metroName} name="from" onChange={selectFun} value={selectVal.from}> */}
                      <Box
                        height={"150px"}
                        width={"150px"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mx={"auto"}
                      >
                        <Image
                          src={no_data}
                          alt="data not found"
                          animation={`${animation} 0.3s ease-in-out infinite alternate-reverse`}
                        ></Image>
                      </Box>
                      <Text textAlign={"center"}>
                        Metro Data Currently Not Available
                      </Text>
                    </CardBody>
                    <CardBody pt={"10px"} pb={"20px"} px={"15px"}>
                      <Button
                        bg={"#A82724"}
                        _hover={"none"}
                        _active={"#A82724"}
                        color={"#fff"}
                        width={"full"}
                        onClick={() => setToggle(true)}
                      >
                        Search Another Metro
                      </Button>
                    </CardBody>
                  </>
                )}
              </Card>
            )}
          </Box>
        </Container>
      </Container>
      {toggle ? <TravelTips /> : <FunFacts />}
    </>
  );
};

export default Home;
