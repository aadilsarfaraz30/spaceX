import React from "react";
import { useSelector } from "react-redux";
import FilterContainer from "../components/filters/FilterWrapper";
import LaunchDisplay from "../components/LaunchDisplay";
import Loading from "../components/Loading";
import FetchLaunchData from "../fetchData/FetchLaunchData";
import FetchRocketData from "../fetchData/FetchRocketData";

const Home = () => {
  const loading = useSelector((state) => state.launch.loading);

  return (
    <>
      {/* {!loading ? (
        <>
          <FilterContainer />
          <LaunchDisplay />{" "}
        </>
      ) : (
        <Loading />
      )} */}
      <FilterContainer/>
      {loading ? <Loading/> : <LaunchDisplay/>}  
       <FetchLaunchData />
      <FetchRocketData />
    </>
  );
};

export default Home;
