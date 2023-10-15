import Image from "next/image";
import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { VscCircleFilled } from "react-icons/vsc";

// import { SiGooglemaps } from "react-icons/si";
// import Banner from "./Banner";

function decideWinner(maleWinnerTeamCode, FemaleWinnerTeamCode, teamList) {
  let dataToBeReturned = [];
  teamList.map((team) => {
    if (team.teamCode === maleWinnerTeamCode) {
      dataToBeReturned[0] = team;
    } else if (team.teamCode === FemaleWinnerTeamCode) {
      dataToBeReturned[1] = team;
    }
  });
  return dataToBeReturned;
}

function HomePage({ teamlist }) {
  const [screenSize, setScreenSize] = useState(0);
  const [winnerTeamList, setWinnerTeamList] = useState([]);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    setWinnerTeamList(() => decideWinner("SHM", "SAM", teamlist));
  }, []);

  const over_summary = [1, 4, 6, "W", "2NB", 0, "2WD", 3, "W", 2, 1];

  const over = over_summary.map((bowl_value) => (
    <div
      key={bowl_value}
      className={`h-[25px] w-[25px] text-xs font-semibold ${
        bowl_value === "W"
          ? "bg-red-600"
          : bowl_value === 4 || bowl_value === 6
          ? "bg-[#6360FF]"
          : bowl_value.toString().slice(-2).toUpperCase() === "WD" ||
            bowl_value.toString().slice(-2).toUpperCase() === "NB"
          ? "bg-green-500 text-[10px]"
          : "bg-gray-500"
      }  flex justify-center items-center rounded-full text-white ring-2 ring-[#F9BD48]`}>
      <span className="  ">{bowl_value}</span>
    </div>
  ));

  const [live, setlive] = useState(true);

  return (
    <div className="flex flex-col md:w-11/12 md:mx-auto tournament-name-container ">
      {/* displaying live score of current match */}
      {/* <Banner /> */}
      <div className="mt-6 w-4/5 mx-auto">
        <p className="tournament-name">MMNCT</p>
        <p className="tournament-name-fullform mb-3">
          Manoj Memorial
          <br className="md:hidden" /> Night Cricket Tournament
        </p>
        <div className="md:flex md:gap-4 md:items-center">
          {" "}
          <p className="bg-white py-2 px-3 text-[#F9BD48] font-[800] w-[180px] h-[36px] text-[20px] md:text-[40px] mb-3 flex justify-center items-center md:w-[360px] md:h-[66px]">
            17<sup>th</sup> <span className="ml-2">EDITION</span>
          </p>
          <p className="font-[800] text-[16px] md:text-[24px] md:leading-[29.26px] md:ml-[40px]">
            26<sup>th</sup> - 29<sup>th</sup> <br className="hidden md:flex" />
            October, 2023
          </p>
        </div>
        {/* <WinnersAnnouncement teamlist={winnerTeamList} /> */}
      </div>

      <div className="w-full md:w-4/5 md:mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* graphic and venue along with days to go */}

        <div>
          {/* <HomeCard /> */}
          {live ? (
            <div className=" w-4/5 md:w-[400px] days-counter mx-auto md:mx-0 md:mb-4 md:gap-4 h-auto ">
              <div className=" w-full my-2 px-2">
                <div className=" flex justify-between text-black items-center">
                  <p className="  text-2xl font-extrabold text-[#F8C156]">
                    {" "}
                    <span className=" text-red-600 rounded-full">
                      <VscCircleFilled className=" inline-block animate-ping text-xl bg-red-300 overflow-hidden rounded-full" />
                    </span>
                    Live
                  </p>
                  <p className=" text-sm font-bold text-[#F8C156]">
                    {/* Match Date */}
                    29<span className=" font-thin">th</span> oct, 2023
                  </p>
                </div>
              </div>
              <div className=" teams flex px-2 mb-1">
                <div className=" team_1 flex justify-around  w-[45%]">
                  <div className=" flex justify-center text-center  flex-col  ">
                    <div>
                      {/* team 1 image */}
                      <Image
                        src={`/male.jpg`}
                        height={50}
                        width={50}
                        alt="team_1_logo"
                        className=" rounded-full aspect-square"
                      />
                    </div>
                    {/* Team 1 name info */}
                    <p className=" text-black text-sm font-bold">AVG</p>
                    <p className=" text-black text-xs font-thin">Btech-III</p>
                  </div>
                  <div className=" score text-red-600 translate-y-4">
                    {/* team 1 score */}
                    <p className=" text-sm font-bold">
                      120-6<span className=" text-xs font-thin">(7.5)</span>{" "}
                    </p>
                  </div>
                </div>
                <div className=" w-[10%]  ">
                  <hr className=" h-1 bg-[#F8C156] rotate-90 translate-y-6 w-full" />
                </div>

                <div className=" team_2 flex flex-row-reverse justify-around  w-[45%]">
                  <div className=" flex justify-center text-center  flex-col  ">
                    <div>
                      {/* team 2 logo image */}
                      <Image
                        src={`/female.jpg`}
                        height={50}
                        width={50}
                        alt="team_2_logo"
                        className=" rounded-full aspect-square"
                      />
                    </div>
                    {/* team 2 name info */}
                    <p className=" text-black text-sm font-bold">SMK</p>
                    <p className=" text-black text-xs font-thin">B-IV</p>
                  </div>
                  <div className=" score  text-red-600 translate-y-4">
                    <p className=" text-sm font-bold">
                      {/* team 2 status */}
                      <span className=" text-xs font-thin">Yet to bat</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <hr className=" h-0 border-dashed bg-[#F8C156]   w-[95%] mx-auto" />
              <div className=" Bat_and_bowl_stats flex justify-between text-black px-3 mb-1">
                <div className=" Bat_stat text-left  ">
                  {/* batting team stats -- striker and non-striker */}
                  <p className=" text-sm font-bold mb-1">IMR Batting</p>
                  <p className=" text-xs font-light">Player x: 34*(49)</p>
                  <p className="text-xs font-light">Player x: 12*(21)</p>
                </div>
                <div className=" Bowl_stat text-right">
                  {/* Active Bowler info */}
                  <p className=" text-sm font-bold">AVG-Bowling</p>
                  <p className=" text-xs font-light">Player x: 1/18 (3.3)</p>
                </div>
              </div>
              <hr className=" h-0 border-dashed bg-[#F8C156]  w-[95%] mx-auto" />
              <div className="Over pb-3 px-2">
                <div className=" flex justify-center text-sm mb-1 font-bold  text-black ">
                  THIS OVER
                </div>
                <div className=" Over_detail flex justify-center flex-wrap gap-4 ">
                  {/* input of per ball */}
                  {over}
                </div>
              </div>
            </div>
          ) : (
            <div className=" flex justify-center items-center w-4/5 md:w-[400px] days-counter mx-auto md:mx-0 md:mb-4 md:gap-4 h-[116px] md:h-[150px]">
              <span className="text-[#F45178] font-[800] text-[96px] md:-[120px] leading-[117px] md:leading-[146.28px] text-center w-1/2 md:w-[35%]">
                {daysCaluclator()}
              </span>
              <div className="text-[#991746]">
                <p className="font-[700] text-[40px] md:text-[48px] leading-[49px]">
                  DAYS
                </p>
                <p className="font-[500] text-[40px] md:text-[48px] leading-[49px]">
                  {" "}
                  TO GO
                </p>
              </div>
            </div>
          )}

          <p className="font-[600] text-[20px] hidden md:flex my-10  md:mx-auto leading-[24.38px]">
            Bring back the Cheers! Bring back the Slogans!
          </p>
        </div>

        <div className="h-[200px] lg:hidden relative">
          <div className={` w-[${screenSize}] h-[230px]`}>
            <Image
              height={250}
              width={392}
              src={`/vector-1.png`}
              alt="ground picture"
              priority
              className={`z-40 absolute md:relative top-0`}
            />
          </div>
        </div>

        {/* the following component will be shown when screen size is larger than 1024 pixels */}

        <div className="w-[791px] lg:block relative  hidden">
          <div className="w-full ">
            <img
              src={`/vector-1.png`}
              alt="ground picture"
              priority="true"
              className="w-[791px] h-[396px]"
            />
          </div>
        </div>
      </div>

      {/* more information about the tournament */}
    </div>
  );
}

export default HomePage;

function daysCaluclator() {
  var today = new Date();
  var date_to_reply = new Date("2023-10-26");
  var timeinmilisec = date_to_reply.getTime() - today.getTime();
  // console.log(Math.floor(timeinmilisec / (1000 * 60 * 60 * 24)));
  return Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));
}

// this component is hard coded and is used only for announcing who won

const WinnersAnnouncement = ({ teamlist }) => {
  const winnerTabStyle =
    "flex items-center justify-evenly w-full md:w-2/3 lg:w-1/3 text-center my-2 py-2 rounded-md shadow-md text-2xl button";

  const winnerStyle = "font-bold font-3xl";

  console.log(teamlist);

  if (teamlist.length === 0) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="flex flex-col lg:flex-row justify-evenly mt-5">
        <div className={"bg-[#1e648f] " + winnerTabStyle}>
          <div className="flex-shrink-0 h-14 w-14">
            <Image
              src={teamlist[0].teamLogo}
              height={130}
              width={130}
              alt="MMNCT 2023 men's winner team logo"
            />
          </div>
          <div>
            <p>Mens' Winner</p>
            <p className={winnerStyle}>{teamlist[0].teamName}</p>
            <p className="text-sm">{teamlist[0].teamType}</p>
          </div>
        </div>
        <div className={"bg-[#fae039] " + winnerTabStyle}>
          <div className="flex-shrink-0 h-14 w-14">
            <Image
              src={teamlist[1].teamLogo}
              height={130}
              width={130}
              alt="MMNCT 2023 women's winner team logo"
            />
          </div>
          <div>
            <p>Womens' Winner</p>
            <p className={winnerStyle}>{teamlist[1].teamName}</p>
            <p className="text-sm">{teamlist[1].teamType}</p>
          </div>
        </div>
      </div>
    );
  }
};
