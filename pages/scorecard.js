// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { database } from '../components/db/Firebase';
// import { ref, get,onValue } from "firebase/database";
// import { totalScore, getOver ,extraOfInnings} from "../components/matchFunctions";
// {/* <p className="text-orange-500 font-bold">
// {totalScore(
//   curElem.Team1Score,
//   curElem.Team1Extra,
//   curElem.Team1Wicket
// )}
// </p> */}
// const Scorecard = () => {
//   const router = useRouter();
//   const { matchId } = router.query;

//   // Sample data (replace with your actual data)
//   const [selectedTeam, setSelectedTeam] = useState('team1');
//   const [matchData, setMatchData] = useState(null);
//   const [team1BattingData, setTeam1BattingData] = useState([]); // State to store team1 batting data
//   const [team2BattingData, setTeam2BattingData] = useState([]); // State to store team2 batting data
//   const [team1BowlingData, setTeam1BowlingData] = useState([]);
//   const [team2BowlingData, setTeam2BowlingData] = useState([]);
//   const[team1Totalrun,setTeam1Totalrun]=useState([]);
//   const[team2Totalrun,setTeam2Totalrun]=useState([]);
//   const [team1Over, setTeam1Over] = useState([]);
// const [team2Over, setTeam2Over] = useState([]);
// const[team1Extras,setTeam1Extras]=useState([]);
// const[team2Extras,setTeam2Extras]=useState([]);
//   const getPlayerScore = (score) => {
//     var totalRuns = 0;
//     //var ballPlayed = 0;
//     if (score) {
//       for (var i = 0; i <= 10; i++) {
//         if (score[i]) {
//          // console.log(score[i]);
//           totalRuns += i * score[i];
         
//         }
//       }
//     }
//     return totalRuns;
//   }
//   const getPlayerBalls = (score) => {
//     //var totalRuns = 0;
//     var ballPlayed = 0;
//     if (score) {
//       for (var i = 0; i <= 10; i++) {
//         if (score) {
        
//           ballPlayed +=score[i];
//         }
//       }
//     }
//     return ballPlayed;
//   }
//   const ballsToOvers = (balls) => {
//     const overs = Math.floor(balls / 6) + (balls % 6) / 10;
//     return overs.toFixed(1); // Return overs with one decimal place
//   };

//   useEffect(() => {
//     if (matchId) {
//       const matchRef = ref(database, "matchDetail/" + matchId);
  
//       const unsubscribe = onValue(matchRef, (snapshot) => {
//         if (snapshot.exists()) {
//           const data = snapshot.val();
//           setMatchData(data);
//           setTeam1BattingData(data.Team1Players);
//           setTeam2BattingData(data.Team2Players);
//           setTeam1BowlingData(data.Team1Players);
//           setTeam2BowlingData(data.Team2Players);
//           setTeam1Totalrun(totalScore(data.Team1Score,data.Team1Extra,data.Team1Wicket));
//           setTeam2Totalrun(totalScore(data.Team2Score,data.Team2Extra,data.Team2Wicket));
//           setTeam1Over(getOver(data.Team1Score,data.Team1prev,data.Team1Extra)[0]);
//           setTeam2Over(getOver(data.Team2Score,data.Team2prev,data.Team2Extra)[0]);
//           setTeam1Extras(extraOfInnings(data.Team1Score,data.Team1Extra));
//           setTeam2Extras(extraOfInnings(data.Team2Score,data.Team2Extra));

//           //console.log(data);
//         } else {
//          // console.log("No match data available");
//         }
//       });
  
//       // Cleanup the listener when the component unmounts
//       return () => {
//         unsubscribe();
//       };
//     }
//   }, [matchId]);
// var runs;
// var balls;
//   // Function to calculate the strike rate
//   const calculateStrikeRate = (runs, balls) => {
//     if (balls === 0) {
//       return 0; // Avoid division by zero
//     }
//     const strikeRate = (runs / balls) * 100;
//     return strikeRate.toFixed(2); // Round to 2 decimal places
//   };

//   const populateBattingStats = (battingData) => {
//     const battingPlayers = [];
//     const yetToBatPlayers = [];
  
//     Object.keys(battingData).forEach((playerId) => {
//       const player = battingData[playerId];
  
//       if (player.status === 'Did Not Bat') {
//         yetToBatPlayers.push(player);
//       } else {
//         battingPlayers.push(player);
//       }
//     });
  
//     // Sort battingPlayers by batting order
//     battingPlayers.sort((a, b) => a.battingOrder - b.battingOrder);
  
//     return (
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Batting Card</h2>
//         <table className="table-auto">
//           <thead>
//             <tr>
//               <th>Player Name</th>
//               <th>Runs</th>
//               <th>4s</th>
//               <th>6s</th>
//               <th>Balls</th>
//               <th>Strike Rate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {battingPlayers.map((player) => (
//               <tr key={player.playerName}>
//                 <td>{player.playerName}</td>
//                 <td>{getPlayerScore(player.score)}</td>
//                 <td>{player.score[4]}</td>
//                 <td>{player.score[6]}</td>
//                 <td>{getPlayerBalls(player.score)}</td>
//                 <td>{calculateStrikeRate(getPlayerScore(player.score), getPlayerBalls(player.score))}</td>
//                 <td>{player.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//         {yetToBatPlayers.length > 0 && (
//   <div>
//     <h2 className="text-xl font-semibold mb-2">Yet to Bat</h2>
//     <p>{yetToBatPlayers.map((player) => player.playerName).join(', ')}</p>
//   </div>
// )}
//       </div>
//     );
//   };
  
//   const populateBowlingStats = (bowlingData) => {
//     return (
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th>Bowler Name</th>
//             <th>Overs</th>
//             <th>Runs</th>
//             <th>Wickets</th>
//           </tr>
//         </thead>
       
//         <tbody>
//           {Object.keys(bowlingData).map((playerId) => {
//           const player = bowlingData[playerId];
//           if(player.score[12]===0){
//             return null;
//           }
//           return (
//             <>
//             <tr key={playerId}>
//               <td>{player.playerName}</td>
//               <td>{ballsToOvers(player.score[12])}</td>
//               <td>{player.score[13]}</td>
//                 <td>{player.score[14]}</td>
//             </tr>

                
//                   </>
//           );
//         })}
//         </tbody>
//       </table>
//     );
//   };
//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-2xl font-semibold mb-4">Match Scorecard</h1>

//       <div className="mb-4">
//         <button
//           className={`px-4 py-2 mr-2 ${
//             selectedTeam === 'team1' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//           }`}
//           onClick={() => setSelectedTeam('team1')}
//         >
//           {matchData && matchData.Team1Id}
//         </button>
//         <button
//           className={`px-4 py-2 ${
//             selectedTeam === 'team2' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
//           }`}
//           onClick={() => setSelectedTeam('team2')}
//         >
//           {matchData && matchData.Team2Id}
//         </button>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">{selectedTeam === 'team1' ? 'Team 1' : 'Team 2'}</h2>
//         {selectedTeam === 'team1' ? populateBattingStats(team1BattingData) : null}
//         {selectedTeam === 'team2' ? populateBattingStats(team2BattingData) : null}
//       </div>
     

// {/* Display total score for Team 1 */}
// {selectedTeam === 'team1' && (
//        <div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Total Score: {team1Totalrun}</h3>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Overs: {team1Over}</h3>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Extras: {team1Extras}</h3>
//           </div>
//           </div>
//         )}

//         {/* Display total score for Team 2 */}
//         {selectedTeam === 'team2' && (
//           <div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Total Score: {team2Totalrun}</h3>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Overs: {team2Over}</h3>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Extras: {team2Extras}</h3>
//           </div>
//           </div>
//         )}

//       <div>
//         <h2 className="text-xl font-semibold mb-2">Bowling Statistics</h2>
//         {selectedTeam === 'team1' ? populateBowlingStats(team2BowlingData) : null}
//         {selectedTeam === 'team2' ? populateBowlingStats(team1BowlingData) : null}
//       </div>
//     </div>
//   );
// };

// export default Scorecard;


import React, { useState } from "react";

import Image from "next/image";
import { TbCricket } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Sachin = () => {
  const [male_color, setmale_color] = useState(true);

  const team1_color = "bg-[#1f1f1f]";
  const team2_color = "bg-[#1e648f]";
  const color_1 = "[#1f1f1f]";
  const color_2 = "[#fdffff]";

  const players = [1, 2, 3, 4, 5]; // Active player

  // when Batsman starts playing ********
  const player_batting = players.map((e) => (
    <div key={e} className="wrapp">
      <div className="player_stat text-black text-sm sm:text-md md:text-lg lg:texl-xl flex align-middle items-center justify-between px-4  ">
        <div className="  w-[40%] ">
          <p className=" not-italic font-semibold leading-[normal] ">
            {/* Batsman name */}
            R Sharma       
          </p>
        </div>
        <div className=" w-[60%]  flex text-right">
          <p className=" not-italic font-medium leading-[normal] w-[30%]">

          {/* batsmans score */}
            200
            <span className=" text-xs font-light">
              {/* total ball played */}
              (34)
              </span>
          </p>

          <p className=" not-italic font-normal leading-[normal] w-[20%]">
            {/* No of 4s */}
            20
            </p>
          <p className=" not-italic font-normal leading-[normal] w-[20%]">
            {/* No of 6s */}
            1
            </p>
          <p className=" not-italic font-normal leading-[normal] w-[30%]">
            {/* strike rate */}
            796.3
          </p>
        </div>
      </div>
      <p className=" my-1 px-4 text-black  text-xs sm:text-sm not-italic font-normal leading-[normal] tracking-wider">
        {" "}
        {/* our detail or not out if playing */}
        c player x,b player y
      </p>
      <hr className=" w-[95%] text-center mx-auto bg-black h-0" />
    </div>
  ));

  // Bowling stats of player (when player starts bowling )

  const player_bowling = players.map((e) => (
    <div key={e} className="wrapp">
      <div className="player_stat flex text-black  text-sm sm:text-md md:text-lg lg:text-xl align-middle items-center justify-between px-4 my-2 mt-4  ">
        <div className="sm:w-[40%] w-[50%]  ">
          <p className=" not-italic  font-semibold leading-[normal] ">
            {/* Bowler name */}
            a chasmawala
          </p>
        </div>
        <div className=" w-[50%]  sm:w-[60%] flex text-right">
          <p className=" not-italic font-normal leading-[normal] w-[25%] ">
            {/* No of over */}
            4
            </p>
          <p className=" not-italic font-normal leading-[normal] w-[20%]">
            {/* total run spend */}
            10
            </p>
          <p className="not-italic font-normal leading-[normal] w-[20%]">
            {/* No of wickets */}
            0
            </p>
          <p className=" not-italic font-normal leading-[normal] w-[35%]">
            {/* Bowler Economy */}
            6.95
          </p>
        </div>
      </div>
      <hr className=" w-[95%] text-center mx-auto bg-black" />
    </div>
  ));

  // Extra Runs ***********

  const Extra = (
    <div className="Extra  ">
      <div className="flex flex-col text-sm sm:text-md md:text-lg lg:text-xl item-left sm:flex-row h-auto justify-between align-middle py-2">
        <p className=" px-4 text-black  not-italic font-semibold leading-[normal] tracking-[2px]">
          Extras
        </p>
        <p className="text-[#000F95] px-4 text-left text-xs sm:text-sm md:text-md lg:text-lg  not-italic font-semibold leading-[normal] tracking-[2px] ">
          {/* Total Extra */}
          12
          <span className="text-black  not-italic font-light leading-[normal]">
            {/* Types of Extra */}
            (NB 4 , W 3, LB 4)
          </span>
        </p>
      </div>
      <hr className="w-[95%] text-center  mx-auto bg-black my-1" />
    </div>
  );

  // Total Runs ********

  const Total_runs = (
    <div className="Extra  ">
      <div className=" px-4 flex flex-col font-semibold text-sm sm:text-md md:text-lg lg:text-xl text-black item-left sm:flex-row h-auto justify-between align-middle py-2">
        <p className="  not-italic font-semibold leading-[normal] tracking-[2px]">
          Total runs
        </p>
        <p className="text-[#000F95]  text-left text-xs sm:text-sm md:text-md lg:text-lg  not-italic font-semibold leading-[normal] tracking-[2px] ">
        {/* Total run of a team */}
          120
          <span className="text-black  not-italic font-light leading-[normal]">
            {/* summary */}
            (8 w, 9 ov)
          </span>
        </p>
      </div>
      <hr className="w-[95%] text-center mx-auto bg-black" />
    </div>
  );

  // for changing the team1 to team2

  const [team_1, seteam_1] = useState(true);
  const [team_2, seteam_2] = useState(false);

  const handlechange_1 = () => {
    if (team_1 === false) {
      seteam_1(true);
      seteam_2(false);
      console.log("1");
    }
  };

  const handlechange_2 = () => {
    if (team_2 === false) {
      seteam_2(true);
      seteam_1(false);
      console.log("2");
    }
  };

  //  overall  team 1 REcord *****************************************888***

  const teamno_1 = (
    <div>
      {team_1 && (
        <div className="team_1">
          <div className=" batting px-3   ">
            <div
              className={`batting_stats w-full  h-12 ${
                team_1 ? team1_color : team2_color
              } flex align-middle items-center justify-between rounded-3xl mt-3  px-4 text-white text-sm sm:text-xl mb-2`}>
              <p className="w-[40%]  not-italic font-semibold leading-[normal] tracking-[2px] ">
                Batting
              </p>
              <div className=" w-[60%] flex text-right">
                <p className=" not-italic font-bold leading-[normal] w-[30%] ">
                  R(B)
                </p>

                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  4s
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  6s
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[30%]">
                  S/R
                </p>
              </div>
            </div>
            {player_batting}
            {Extra}
            {Total_runs}
            {/* Yet to bat team 1  */}
            <div className=" px-4  font-semibold text-sm sm:text-md md:text-lg lg:text-xl text-black item-left sm:flex-row h-auto justify-between align-middle py-2">
              <p className="  not-italic font-semibold leading-[normal] tracking-[2px]">
                Yet To Bat
              </p>
              <p className="text-[#000F95]  text-left text-xs sm:text-sm md:text-md lg:text-lg   not-italic font-medium leading-[normal]  ">
                sachin, niraj , manoj , lalu, gautam
              </p>
            </div>
          </div>
          {/* {*****************Bowling***********} */}
          <div className="bowling px-3 py-4">
            <div
              className={`bowling_stats w-full h-12 mt-[7px] ${
                team_1 ? team1_color : team2_color
              } flex align-middle items-center justify-between rounded-3xl text-white text-sm sm:text-xl  px-4`}>
              <p className=" sm:w-[40%] w-[50%] not-italic font-semibold leading-[normal] tracking-[2px] ">
                Bowlers
              </p>
              <div className=" flex w-[50%] sm:w-[60%] text-right">
                <p className=" not-italic font-bold leading-[normal] w-[25%] ">
                  O
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%] ">
                  R
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  W
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[35%]">
                  ECO
                </p>
              </div>
            </div>
            {player_bowling}
          </div>
        </div>
      )}
    </div>
  );

  //  overall  team 2 REcord ********************************
  const teamno_2 = (
    <div>
      {team_2 && (
        <div className="team_1">
          <div className=" batting px-3   ">
            <div
              className={`batting_stats w-full  h-12 ${
                team_1 ? team1_color : team2_color
              } flex align-middle items-center justify-between rounded-3xl mt-3  px-4 text-white text-sm sm:text-xl mb-2`}>
              <p className="w-[40%]  not-italic font-semibold leading-[normal] tracking-[2px] ">
                Batting
              </p>
              <div className=" w-[60%] flex text-right">
                <p className=" not-italic font-bold leading-[normal] w-[30%] ">
                  R(B)
                </p>

                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  4s
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  6s
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[30%]">
                  S/R
                </p>
              </div>
            </div>
            {player_batting}
            {Extra}
            {Total_runs}
            {/* yet to bat for team two */}
            <div className=" px-4  font-semibold text-sm sm:text-md md:text-lg lg:text-xl text-black item-left sm:flex-row h-auto justify-between align-middle py-2">
              <p className="  not-italic font-semibold leading-[normal] tracking-[2px]">
                Yet To Bat
              </p>
              <p className="text-[#000F95]  text-left text-xs sm:text-sm md:text-md lg:text-lg  not-italic font-medium leading-[normal]  ">
                sachin, niraj , manoj , lalu, gautam
              </p>
            </div>
          </div>
          {/* {*****************Bowling***********} */}
          <div className="bowling px-3 py-4">
            <div
              className={`bowling_stats w-full h-12 mt-[7px] ${
                team_1 ? team1_color : team2_color
              } flex align-middle items-center justify-between rounded-3xl text-white text-sm sm:text-xl  px-4`}>
              <p className=" sm:w-[40%] w-[50%] not-italic font-semibold leading-[normal] tracking-[2px] ">
                Bowlers
              </p>
              <div className=" flex w-[50%] sm:w-[60%] text-right">
                <p className=" not-italic font-bold leading-[normal] w-[25%] ">
                  O
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%] ">
                  R
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[20%]">
                  W
                </p>
                <p className=" not-italic font-bold leading-[normal] w-[35%]">
                  ECO
                </p>
              </div>
            </div>
            {player_bowling}
          </div>
        </div>
      )}
    </div>
  );

  // man of the match ******************************************************

  const man_of_the_match = (
    <div className="man_of_the_match h-[100px] shadow-sm w-5/6 mx-auto justify-center rounded-md my-3 flex flex-col align-middle items-center bg-blue-900">
      <p className="text-white text-sm sm:text-2xl not-italic font-bold leading-[normal]">
        Man of the match
      </p>
      <p className=" text-white text-sm sm:text-2xl not-italic font-normal leading-[normal]">
        player 5
      </p>
    </div>
  );

  return (
    <div
      className={`  ${
        !male_color
          ? "bg-gradient-to-b from-[#AA277E] to-white"
          : "bg-gradient-to-b from-[#272CAA] to-white"
      } text-white   `}>
      <Navbar />

      <div className=" w-5/6 mx-auto text-center my-4 sm:text-7xl leading-snug  tracking-widest italic text-3xl  font-bold">
        {" "}
        <p> Scorecard</p>
      </div>

      <div
        className={`scorecard_main w-11/12 mb-0 sm:mb-4 my-4  ${
          !male_color
            ? "bg-gradient-to-b from-pink-100 to-white"
            : "bg-gradient-to-b from-blue-100 to-white"
        } rounded-2xl sm:w-5/6 mx-auto  pt-0 pb-0  sm:pb-5 `}>
        <div className="upper_section shadow-inner  ">
         
          <div
            className={`match_stats rounded-2xl pt-4 px-2 sm:p-4 flex grow justify-between w-full sm:w-5/6  overflow-x-hidden z-1 mx-auto mb-3 items-center align-middle text-center   text-black `}>
            <div className=" flex items-center flex-col sm:flex-row gap-0 sm:gap-10 w-[45%] ">
              <div className=" grow w-full  sm:w-[60%]  ">
                <div className=" h-full w-full  flex flex-row sm:flex-col align-middle items-center    font-semibold leading-[normal] text-center  grow text-sm sm:text-2xl  ">
                  <div className="    rounded-full p-0 sm:p-3">
                    {/* team 1 logo image */}
                    <Image
                      src={`/male.jpg`}
                      alt="team_image"
                      height={125}
                      width={125}
                      className=" object-cover aspect-square h-full w-full  rounded-full  "
                    />
                  </div>

                  <div className=" w-full  text-wrap-balance break-normal box-content ">
                    {/* team 1 short Name */}
                    <h4 className="  font-bold"> AVG </h4>
                    <h3 className=" text-center block sm:hidden  not-italic font-bold leading-[normal]">
                      {/* team 1 summary */}
                      120-5<span className=" font-light text-sm">(19.3)</span>
                    </h3>
                  </div>

                  {/* <hr className=" block sm:hidden bg-black w-full mt-2 h-1" /> */}
                </div>
              </div>
              <div className="grow w-full hidden sm:block  sm:w-[40%] text-sm sm:text-4xl ">
                <div>
                  {/* team 1 summary */}
                  <h3 className=" text-center  not-italic font-bold leading-[normal]">
                    120-5
                  </h3>
                  <p className=" text-base">(19.3)</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-center items-center w-[10%] ">
              <Image
                src={`/vslogo.png`}
                responsive
                width={75}
                height={75}
                alt="vs"
                className=" "
              />
              {/* <p>vs</p> */}
            </div>

            <div className=" w-[45%]  flex justify-center items-center align-middle gap-0 sm:gap-10   ">
              <div className="grow w-full hidden sm:block  sm:w-[40%] text-sm sm:text-4xl ">
                <div>
                  {/* team 2 summary */}
                  <h3 className=" text-center  not-italic font-bold leading-[normal]">
                    120-5
                  </h3>
                  <p className=" text-base">(19.3)</p>
                </div>
              </div>
              <div className=" grow w-full  sm:w-[60%]  ">
                <div className=" h-auto w-auto flex flex-row-reverse sm:flex-col align-middle items-center    font-semibold leading-[normal] text-center  grow text-sm sm:text-2xl  ">
                  <div className=" rounded-full   h-auto w-auto  p-0 sm:p-3 ">
                    {/* team 2 logo image */}
                    <Image
                      src={`/male.jpg`}
                      alt="team_image"
                      height={125}
                      width={125}
                      className="  object-fit  aspect-square rounded-full  "
                    />
                  </div>

                  <div className=" w-full  text-wrap-balance break-normal box-content ">
                    {/* Team 2 short name */}
                    <p className="  font-bold"> SMK </p>
                    {/* team 2 summary */}
                    <h3 className=" text-center block sm:hidden  not-italic font-bold leading-[normal]">
                      120-5<span className=" font-light text-sm">(19.3)</span>
                    </h3>
                  </div>

                  {/* <hr className=" block sm:hidden bg-black w-full mt-2 h-1" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center">
            <p className="text-[#1E1E1E] text-md sm:text-2xl not-italic font-normal leading-[normal]">
              {" "}
              {/* match summary */}
              IMR won by 4 wickets
            </p>
            <p className="text-[#7F7F7F] text-md sm:text-2xl not-italic font-normal leading-[normal]">
              {" "}
              {/* match detail */}
              MMNCT 2023 | <span> 4th match</span>
            </p>
          </div>
          <hr className=" h-1 border bg-blue-700 border-none my-4 w-[80%] mx-auto" />
          <div className="inner_set w-full  mx-auto mt-4 pb-0 sm:pb-5 ">
            <div className=" flex w-[95%] mx-auto text-center rounded-3xl ">
              <button
                className={`btnn1 h-12  w-[50%] flex rounded-tl-3xl rounded-bl-3xl items-center ${
                  team_1 ? team1_color : `${team1_color} bg-opacity-75`
                } justify-center text-white text-sm sm:text-xl  not-italic font-bold leading-[normal]  `}
                onClick={handlechange_1}>
                  {/* Team 1 Full Name */}
                <div className=" px-2 ">IMMORTAL</div>
              </button>
              <button
                className={` btnn2 rounded-tr-3xl rounded-br-3xl h-12  w-[50%]  flex ${
                  team_2 ? team2_color : `${team2_color} bg-opacity-75`
                } items-center justify-center text-white text-sm sm:text-xl  not-italic font-bold leading-[normal] `}
                onClick={handlechange_2}>
                  {/* Team 2 Full name */}
                <div className=" px-2">SHAOLIN MONKS </div>
              </button>
            </div>
            <div className="w-[90%] mx-auto -z-10">
              <hr
                className={`h-2 mt-2  rounded-xl bg-teal-800 border-none w-[50%]  delay-150 transition-all ${
                  team_1 ? " translate-x-0" : " translate-x-full"
                } `}
              />
            </div>
            <div className="team_stats w-full sm:w-4/6 mx-auto my-3 border-sky-500 shadow-2xl pb-[35px] ">
              {/* team___________1 */}
              {teamno_1}
              {/* team__________2 */}
              {teamno_2}
              {/* Man of Match__________3 */}
              {man_of_the_match}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sachin;
