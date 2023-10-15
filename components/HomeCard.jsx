import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsRecordFill } from "react-icons/bs";
import { db, database } from "../components/db/Firebase";
import { ref, onValue } from "firebase/database";
import { totalScore, getOver } from "../components/matchFunctions";
import teams from "./teams";
import { VscCircleFilled } from "react-icons/vsc";
import Image from "next/image";

const HomeCard = () => {
  const [team, setTeam] = useState([]);
  const getdata = async () => {
    const temp = ref(database, "match/");
    onValue(temp, async (snapshot) => {
      const matchObject = await snapshot.val();
      let data = [];
      if (matchObject)
        Object.keys(matchObject).map((key) => {
          data.push(matchObject[key]);
        });
      setTeam(data.filter((ele) => ele.status == "ongoing"));
    });
  };
  const shortformstyle = "h-[38px] w-[52px] md:h-[50px] md:w-[62px]";
  useEffect(() => {
    getdata();
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

  return (
    <>
      {team?.length === 0 ? (
        <></>
      ) : (
        <div className=" w-4/5 md:w-[400px] days-counter mx-auto md:mx-0 md:mb-4 md:gap-4 h-auto pt-1 ">
          <div className=" w-full my-2 px-2">
            <div className=" flex justify-between text-black items-center">
              <p className="  text-2xl font-extrabold text-[#F8C156] px-2 bg-white shadow-lg rounded-2xl">
                {" "}
                <span className=" text-red-600 mx-1 rounded-full">
                  <VscCircleFilled className=" animate-pulse inline-block  text-sm bg-red-600 overflow-hidden rounded-full t" />
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
        // <div className=" flex flex-col justify-center ml-12 pr-16 pl-3 w-fit md:w-fit md:pr-28 days-counter md:mx-auto md:mb-4 h-fit">
        //   <div
        //     className="bg-lime-500 w-fit px-3 py-0.5 mt-2.5 flex flex-row items-center justify-center ml-2 rounded-md font-semibold text-white mr-2"
        //     id="top"
        //   >
        //     <BsRecordFill />
        //     <p>Live</p>
        //   </div>
        //   <div className="flex flex-row pb-2.5 pt-2.5 pl-1.5" id="middle">
        //     <div id="logo" className="">
        //       <img
        //         alt="team-logo"
        //         className={shortformstyle}
        //         style={{ backgroundColor: teams[team[0].Team1Id].themeColor }}
        //         src={teams[team[0].Team1Id].teamLogo}
        //       />
        //     </div>
        //     <div
        //       className="pl-2.5 font-bold pt-2.5 text-xl text-black"
        //       id="name"
        //     >
        //       <p>{teams[team[0].Team1Id].teamCode}</p>
        //     </div>
        //     {totalScore(
        //       team[0].Team1Score,
        //       team[0].Team1Extra,
        //       team[0].Team1Wicket
        //     ) === "0/0" &&
        //     getOver(
        //       team[0].Team1Score,
        //       team[0].Team1prev,
        //       team[0].Team1Extra
        //     )[0] === "0.0" ? (
        //       <div
        //         className="flex flex-row ml-3.5 pt-3 text-red-600 text-xl font-semibold"
        //         id="comment"
        //       >
        //         <p>Yet to bat</p>
        //       </div>
        //     ) : (
        //       <div
        //         className="flex flex-row ml-3.5 pt-3 text-red-600 text-xl font-semibold"
        //         id="comment"
        //       >
        //         <p>
        //           {totalScore(
        //             team[0].Team1Score,
        //             team[0].Team1Extra,
        //             team[0].Team1Wicket
        //           )}{" "}
        //           (
        //           {
        //             getOver(
        //               team[0].Team1Score,
        //               team[0].Team1prev,
        //               team[0].Team1Extra
        //             )[0]
        //           }
        //           )
        //         </p>
        //       </div>
        //     )}
        //   </div>
        //   <div className="flex flex-row pb-2.5 pl-1.5" id="bottom">
        //     <div id="logo">
        //       <img
        //         alt="team-logo"
        //         className={shortformstyle}
        //         style={{ backgroundColor: teams[team[0].Team2Id].themeColor }}
        //         src={teams[team[0].Team2Id].teamLogo}
        //       />
        //     </div>
        //     <div
        //       className="pl-2.5 font-bold pt-2.5 text-xl text-black"
        //       id="name"
        //     >
        //       <p>{teams[team[0].Team2Id].teamCode}</p>
        //     </div>
        //     {totalScore(
        //       team[0].Team2Score,
        //       team[0].Team2Extra,
        //       team[0].Team2Wicket
        //     ) === "0/0" &&
        //     getOver(
        //       team[0].Team2Score,
        //       team[0].Team2prev,
        //       team[0].Team2Extra
        //     )[0] === "0.0" ? (
        //       <div
        //         className="flex flex-row ml-3.5 pt-3 text-red-600 text-xl font-semibold"
        //         id="comment"
        //       >
        //         <p>Yet to bat</p>
        //       </div>
        //     ) : (
        //       <div
        //         className="flex flex-row ml-3.5 pt-3 text-red-600 text-xl font-semibold"
        //         id="comment"
        //       >
        //         <p>
        //           {totalScore(
        //             team[0].Team2Score,
        //             team[0].Team2Extra,
        //             team[0].Team2Wicket
        //           )}{" "}
        //           (
        //           {
        //             getOver(
        //               team[0].Team2Score,
        //               team[0].Team2prev,
        //               team[0].Team2Extra
        //             )[0]
        //           }
        //           )
        //         </p>
        //       </div>
        //     )}
        //   </div>
        // </div>
      )}
    </>
  );
};

export default HomeCard;

function daysCaluclator() {
  var today = new Date();
  var date_to_reply = new Date("2023-10-26");
  var timeinmilisec = today.getTime() - date_to_reply.getTime();
  // console.log(Math.floor(timeinmilisec / (1000 * 60 * 60 * 24)));
  return Math.floor(timeinmilisec / (1000 * 60 * 60 * 24));
}
