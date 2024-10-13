import axios from "axios";

export const getMetroData = async (metroData) => {
  try {
    const { from, to, metro } = metroData;

    const response = await axios.get(
      `https://metro.hoogaaa.com/metro/api/v1/action/station/routes/?source=${from}&destination=${to}&metroName=${metro}`
    );
    if (response.statusText !== "OK" && response?.data?.code === 404) {
      throw new Error("something is wrong");
    }
    return response.data;
  } catch (error) {
    return(error.response)
  }
};

