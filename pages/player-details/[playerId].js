import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { TbCricket } from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from "react-confetti";
import { BsFullscreen } from "react-icons/bs";
const PlayerDetails = ({player}) => {
  const [gender, setGender] = useState("boy");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 703 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 703, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  // const carouselContainerStyle = {
  //   maxWidth: "1000px", // Set your desired maximum width
  //   margin: "0 auto", // Center the carousel
  // };
  const boxStyle = {
    // width: "320px", // Set the width of individual carousel items
    height: "", // Set the height of individual carousel items
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    display: "flex-column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className={`${gender === "girl" ? " " : ""}text-white`}>
        <div className="w-5/6 mx-auto my-4 shadow-lg text-black bg-white rounded-md">
          <div className="flex justify-center  p-4 flex-col md:flex-row  gap-10 border-none  ">
            <div className=" ">
              <Image
                src={`/female.jpg`}
                alt="team member"
                width={200}
                height={100}
                className={`${
                  gender === "girl"
                    ? " rounded-full flex justify-center h-full w-full  mx-auto aspect-square   align-middle items-center ring-4 ring-offset-4 ring-pink-500 sm:align-middle  "
                    : " rounded-full flex justify-center  w-4/5   mx-auto aspect-square   align-middle items-center ring-4 ring-offset-4 ring-blue-500 sm:align-middle "
                }
                 `}
              />
            </div>

            {/* <hr className=" h-1  bg-green-500 my-3 lg:hidden md:hidden sm:block" /> */}
            <div className="     px-2  ">
              <p className=" text-5xl font-medium md:mt-4 text-center md:text-left lg:text-left mt-2 ">
                {" "}
                Rishav
                {/* {player Name} */}
              </p>
              <p className="text-lg font-bold md:mt-4 text-center md:text-left lg:text-left mt-2">
                {" "}
                U21CS093
                {/* {player Roll No} */}
              </p>
              <p className="text-lg font-bold md:mt-4 text-center md:text-left lg:text-left mt-2">
                Computer Science And Engineering
                {/* {branch} */}
              </p>
              <p className=" flex  text-lg font-bold text-center md:text-left lg:text-left md:mt-4 justify-center md:justify-start lg:justify-start mt-2">
                Role :{" "}
                <TbCricket className=" text-lg mx-2 font-medium h-[30px] w-[20px]" />{" "}
                (Batsman)
                {/* {Role} */}
              </p>
            </div>
          </div>
          <hr
            className={`${
              gender === "girl"
                ? " h-1 bg-pink-400 m-4 "
                : "h-1 bg-blue-500 m-4"
            }`}
          />
          <div className="p-3 mx-auto  w-5/6">
            <div className=" rounded-xl  sm:flex md:flex-row gap-5">

              <div className="sm:w-1/2  md:w-full p-1 m-1 ">
                <p
                  className={`${
                    gender === "girl"
                      ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
                      : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3 m-2"
                  } `}
                >
                  {" "}
                  Batting Stats
                </p>

                <div className=" rounded-xl flex m-2  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Matches
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />

                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Runs
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    120
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Total runs
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    Average
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    Strike rate
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
              </div>
              <div className="sm:w-1/2  md:w-full  p-1 m-1 ">
                <p
                  className={`${
                    gender === "girl"
                      ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
                      : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3 m-2"
                  } `}
                >
                  {" "}
                  Batting Stats
                </p>

                <div className=" rounded-xl flex m-2  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Matches
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />

                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Runs
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    120
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    {" "}
                    Total runs
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    Average
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
                <div className=" rounded-xl flex m-3  ">
                  <p className="  text-center w-full pl-5 text-lg font-bold  rounded-l-md text-black space-x-3">
                    Strike rate
                  </p>
                  <p className="   text-center w-full pl-5  text-lg font-bold rounded-r-md text-black space-x-3">
                    {" "}
                    1280
                  </p>
                  <hr className=" bg-red-400" />
                </div>
                <hr
                  className={`${
                    gender === "girl"
                      ? " h-1 bg-pink-400 m-4 "
                      : "h-1 bg-blue-500 m-4"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto justify rounded-md p-5 ">
          {/* style={carouselContainerStyle} */}
          <Carousel
            itemClass="react-multi-carousel-item"
            partialVisible={false}
            responsive={responsive}
            swipeable={true}
            draggable={true}
            arrows={false}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            className="gd-carousel"
            containerClass="carousel-container"
            autoPlay={true}
          >
       <div style={boxStyle} className=" w-4/5 p-2 rounded-lg mx-auto my-5 ">
    <div
      className={`${
        gender === "girl"
          ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
          : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3"
      }`}
    >
      {" "}
      Batting Stats
    </div>
    <div className="w-full p-2 m-1 ">
      <div className=" rounded-xl flex m-3 mx-auto  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Match N0.
          {/* {Match Number} */}
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          12
          {/* {Match Number} */}
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />

      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          120
          {/* {Runs} */}
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Boundaries
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          4
          {/* No of sixes */}
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          Wickets
        </p>
        <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          2
          {/* {Wickets} */}
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          Strike rate
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
          {/* {Strike Rate} */}
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
    </div>
  </div>
  <div style={boxStyle} className="w-4/5 p-2 mx-auto my-5 rounded-lg">
    <div
      className={`${
        gender === "girl"
          ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
          : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3 "
      }`}
    >
      {" "}
      Batting Stats
    </div>
    <div className="w-full p-2 m-1 ">
      <div className=" rounded-xl flex m-3 mx-auto  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Matches
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />

      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          120
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Total runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          Average
        </p>
        <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          Strike rate
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
    </div>
  </div>
  <div style={boxStyle} className="w-4/5 p-2 mx-auto my-5 rounded-lg">
    <div
      className={`${
        gender === "girl"
          ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
          : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3"
      }`}
    >
      {" "}
      Batting Stats
    </div>
    <div className="w-full p-2 m-1 ">
      <div className=" rounded-xl flex m-3 mx-auto  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Matches
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />

      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          120
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Total runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          Average
        </p>
        <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          Strike rate
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
    </div>
  </div>
  <div style={boxStyle} className="w-4/5 p-2 mx-auto my-5 rounded-lg">
    <div
      className={`${
        gender === "girl"
          ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
          : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3 "
      }`}
    >
      {" "}
      Batting Stats
    </div>
    <div className="w-full p-2 m-1 ">
      <div className=" rounded-xl flex m-3 mx-auto  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Matches
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />

      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          120
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Total runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          Average
        </p>
        <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          Strike rate
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
    </div>
  </div>
  <div style={boxStyle} className="w-4/5 p-2 mx-auto my-5 rounded-lg">
    <div
      className={`${
        gender === "girl"
          ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
          : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3"
      }`}
    >
      {" "}
      Batting Stats
    </div>
    <div className="w-full p-2 m-1 ">
      <div className=" rounded-xl flex m-3 mx-auto  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Matches
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />

      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          120
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          {" "}
          Total runs
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
          Average
        </p>
        <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
      <div className=" rounded-xl flex m-3  ">
        <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
          Strike rate
        </p>
        <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
          {" "}
          1280
        </p>
        <hr className=" bg-red-400" />
      </div>
      <hr
        className={`${
          gender === "girl"
            ? " h-1 bg-pink-400 m-4 "
            : "h-1 bg-blue-500 m-4"
        }`}
      />
    </div>
  </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlayerDetails;

// const perMatchRecord=Record.map((match, index) => (
// <div style={boxStyle} key={index} className="w-4/5 p-3 mx-auto rounded-lg">
//     <div
//       className={`${
//         gender === "girl"
//           ? " text-center w-full bg-pink-500 text-lg font-bold rounded-xl text-white space-x-3 "
//           : "text-center w-full bg-blue-500 text-lg font-bold rounded-xl text-white space-x-3 m-2"
//       }`}
//     >
//       {" "}
//       Match No.{index+1}
//     </div>
//     <div className="w-full p-2 m-1 ">
//       <div className=" rounded-xl flex m-3 mx-auto  ">
//         <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
//           {" "}
//           Runs
//         </p>
//         <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
//           {" "}
//           {match.run}
//         </p>
//         <hr className=" bg-red-400" />
//       </div>
//       <hr
//         className={`${
//           gender === "girl"
//             ? " h-1 bg-pink-400 m-4 "
//             : "h-1 bg-blue-500 m-4"
//         }`}
//       />

//       <div className=" rounded-xl flex m-3  ">
//         <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
//           {" "}
//           Runs
//         </p>
//         <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
//           {" "}
//           120
//         </p>
//         <hr className=" bg-red-400" />
//       </div>
//       <hr
//         className={`${
//           gender === "girl"
//             ? " h-1 bg-pink-400 m-4 "
//             : "h-1 bg-blue-500 m-4"
//         }`}
//       />
//       <div className=" rounded-xl flex m-3  ">
//         <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
//           {" "}
//           Total runs
//         </p>
//         <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
//           {" "}
//           1280
//         </p>
//         <hr className=" bg-red-400" />
//       </div>
//       <hr
//         className={`${
//           gender === "girl"
//             ? " h-1 bg-pink-400 m-4 "
//             : "h-1 bg-blue-500 m-4"
//         }`}
//       />
//       <div className=" rounded-xl flex m-3  ">
//         <p className="  text-center w-full text-lg font-bold  rounded-l-md text-black space-x-3">
//           Average
//         </p>
//         <p className="   text-center w-full text-lg font-bold rounded-r-md text-black space-x-3">
//           {" "}
//           1280
//         </p>
//         <hr className=" bg-red-400" />
//       </div>
//       <hr
//         className={`${
//           gender === "girl"
//             ? " h-1 bg-pink-400 m-4 "
//             : "h-1 bg-blue-500 m-4"
//         }`}
//       />
//       <div className=" rounded-xl flex m-3  ">
//         <p className="  text-center w-full  text-lg font-bold  rounded-l-md text-black space-x-3">
//           Strike rate
//         </p>
//         <p className="   text-center w-full  text-lg font-bold rounded-r-md text-black space-x-3">
//           {" "}
//           1280
//         </p>
//         <hr className=" bg-red-400" />
//       </div>
//       <hr
//         className={`${
//           gender === "girl"
//             ? " h-1 bg-pink-400 m-4 "
//             : "h-1 bg-blue-500 m-4"
//         }`}
//       />
//     </div>
//   </div>
// ));