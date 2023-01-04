import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  const [showMenMatches, setShowMenMatches] = useState(true);
  const [matchesAvailable, setmatchesAvailable] = useState(false);

  const buttonColorCalculator = (sex) => {
    let colorString = "";
    if (sex === "male") {
      colorString = showMenMatches
        ? "shadow-blue-700 shadow-md bg-blue-700 text-white"
        : "text-gray-400 bg-white shadow-gray-400";
    } else {
      colorString = !showMenMatches
        ? "shadow-pink-500 shadow-md  bg-pink-600 text-white"
        : "text-gray-400 bg-white shadow-gray-400";
    }
    return colorString;
  };

  return (
    <div className="bg-gray-100 py-6 text-center md:w-3/5 md:mx-auto">
      {matchesAvailable ? (
        <div>
          {" "}
          <p className=" font-semibold text-3xl text-gray-700">
            Upcoming Matches
          </p>
          <div className="flex justify-center">
            <p
              onClick={() => {
                setShowMenMatches(true);
              }}
              className={`flex cursor-pointer font-bold mt-4 ${buttonColorCalculator(
                "male"
              )} justify-center items-center  w-2/5 mx-auto py-4 rounded-full`}
            >
              <AiOutlineMan className="mr-4" />
              Mens
            </p>
            <p
              onClick={() => {
                setShowMenMatches(false);
              }}
              className={`flex cursor-pointer font-bold mt-4 ${buttonColorCalculator(
                "female"
              )} shadow-md justify-center items-center w-2/5 mx-auto py-4 rounded-full`}
            >
              <AiOutlineWoman className="mr-4" />
              Womens
            </p>
          </div>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          {showMenMatches && (
            <>
              <MatchCard />
              <MatchCard />
            </>
          )}
          <div>
            <CapHolders male={showMenMatches} />
          </div>
        </div>
      ) : (
        <div className="container--no-matches h-80 font-medium text-xl md:text-2xl px-2 flex flex-col justify-center">
          <div className="bg-white bg-opacity-70 w-full md:w-4/5 mx-auto rounded-lg py-16 px-2">
            <p>The fixtures have not been updated yet.</p>
            <p>Please try again after sometime!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingMatches;

// purple and orange cap holders in all genders

function CapHolders({ male }) {
  const [purpleCapHolder, setPurpleCapHolder] = useState({});
  const [orangeCapHolder, setOrangeCapHolder] = useState({});

  const playerStyle =
    "flex flex-col items-center justify-center mt-10 w-9/12 lg:w-1/2 mx-auto";
  return (
    <Tabs className={`my-10`}>
      <TabList>
        <Tab selectedClassName="bg-orange-400 text-white font-bold rounded-t-lg">
          Orange Cap
        </Tab>
        <Tab
          disabledClassName="text-purple-400"
          selectedClassName="bg-purple-400 text-white font-bold rounded-t-lg mb-0 pb-0"
        >
          Purple Cap
        </Tab>
      </TabList>

      {/* for orange cap */}
      <TabPanel>
        <div className={playerStyle}>
          <Image
            height={300}
            width={300}
            className="rounded-t-lg shadow-lg w-full"
            alt="Orange cap winner"
            src={`https://firebasestorage.googleapis.com/v0/b/mmnct-fac3f.appspot.com/o/pics%2F8281625.jpg?alt=media&token=f7aa71b7-7746-42ec-b316-7fb95821eb0e`}
          />
          <div className="bg-white w-full rounded-b-lg shadow-xl flex flex-col gap-2 py-3">
            <p className="font-bold text-3xl">Player's name</p>
            <p>Team name</p>
          </div>
        </div>
      </TabPanel>
      {/* for purple cap */}
      <TabPanel>
        <div className={playerStyle}>
          <Image
            height={300}
            width={300}
            className="rounded-t-lg shadow-lg w-full"
            alt="purple cap winner"
            src={`https://firebasestorage.googleapis.com/v0/b/mmnct-fac3f.appspot.com/o/pics%2Finvestec-ashes-third-test-day-one-manchester-england-august-james-anderson-celebrates-wicket-steven-smith-which-was-turned-55720665.jpg?alt=media&token=67d6bf1b-75e8-48ce-ab85-0a0f32fa5959`}
          />
          <div className="bg-white w-full rounded-b-lg shadow-xl flex flex-col gap-2 py-3">
            <p className="font-bold text-3xl">Player's name</p>
            <p>Team name</p>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
}
