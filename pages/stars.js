// pages/FirestorePage.js
import { useEffect, useState } from "react";
import { db } from "../components/db/Firebase";
import { collection, where, getDocs, query } from "firebase/firestore";
import { getPlayerScore } from "../components/matchFunctions";
//import teams from "../components/teams";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer";
import { GiCricketBat, GiThrowingBall } from "react-icons/gi";
import Image from "next/image";
import teams from "../components/teams";
const getTeamCategory = (teamId) => {
  var result;
  Object.keys(teams).map((key) => {
    const value = teams[key];
    if (value.teamId === teamId) {
      // console.log(value.teamCategory);

      result = key;
    }

  })
  return result;
}
const getPlayerScored = (score) => {
  var totalRuns = 0;
  //var ballPlayed = 0;
  if (score) {
    for (var i = 0; i < 10; i++) {
      if (score[i]) {
        // console.log(score[i]);
        totalRuns += i * score[i];
      }
    }
  }
  return totalRuns;
};
const getPlayerBalls = (score) => {
  //var totalRuns = 0;
  var ballPlayed = 0;
  if (score) {
    for (var i = 0; i < 10; i++) {
      if (score) {
        ballPlayed += score[i];
      }
    }
  }
  return ballPlayed;
};
const calculateStrikeRate = (runs, balls) => {
  if (balls === 0) {
    return 0; // Avoid division by zero
  }
  const strikeRate = (runs / balls) * 100;
  return strikeRate.toFixed(1); // Round to 2 decimal places
};
function calculateEconomyRate(runsConceded, noOfBallsBowled) {
  if (noOfBallsBowled === 0) {
    console.error("Overs bowled cannot be zero.");
    return null;
  }

  const economyRate = (runsConceded / noOfBallsBowled) * 6;
  return economyRate.toFixed(2); // Rounding to two decimal places
}
export default function Stars({ playerStats }) {
  const [malePlayers, setmalePlayers] = useState([]);
  const [femalePlayers, setfemalePlayers] = useState([]);
  const [top5malebatsman, setTop5malebatsman] = useState([]);
  const [top5femalebatsman, setTop5femalebatsman] = useState([]);
  const [top5malebowler, setTop5malebowler] = useState([]);
  const [top5femalebowler, setTop5femalebowler] = useState([]);
  const [top5malesixer, setTop5malesixer] = useState([]);
  const [top5femalesixer, setTop5femalesixer] = useState([]);
  const [top5malefourer, setTop5malefourer] = useState([]);
  const [top5femalefourer, setTop5femalefourer] = useState([]);
  const [top5malehighestbatsman, setTop5malehighestbatsman] = useState([]);
  const [top5femalehighestbatsman, setTop5femalehighestbatsman] = useState([]);
  const [top5maletutktukbatsman, setTop5maletuktukbatsman] = useState([]);
  const [top5femaletuktukbatsman, setTop5femaletuktukbatsman] = useState([]);

  const getGender = (teamid) => {
    let result;
    for (const val in teams) {
      const value = teams[val];
      if (value.teamId === teamid) {
        result = value.teamCategory;
        break;
      }
    }
    // console.log(result);
    return result;
  };

  const getTopBatsman = () => {
    setTop5malebatsman([...malePlayers].sort((a, b) => {
      getPlayerScore(b.stats) - getPlayerScore(a.stats)
    }).slice(0, 5));
    setTop5femalebatsman([...femalePlayers].sort((a, b) => {
      getPlayerScore(b.stats) - getPlayerScore(a.stats)
    }).slice(0, 5));
  }

  const getTopBaller = () => {
    setTop5malebowler([...malePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[14] - a.stats[14]
    }).slice(0, 5));
    setTop5femalebowler([...femalePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[14] - a.stats[14]
    }).slice(0, 5));
  }

  const getTopSixer = () => {
    setTop5malesixer([...malePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[6] - a.stats[6]
    }).slice(0, 5));
    setTop5femalesixer([...femalePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[6] - a.stats[6]
    }).slice(0, 5));
  }

  const getTopfourer = () => {
    setTop5malefourer([...malePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[4] - a.stats[4]
    }).slice(0, 5));
    setTop5femalefourer([...femalePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[4] - a.stats[4]
    }).slice(0, 5));
  }

  const getTophighestbatsaman = () => {
    setTop5malehighestbatsman([...malePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[10] - a.stats[10]
    }).slice(0, 5));
    setTop5femalehighestbatsman([...femalePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[10] - a.stats[10]
    }).slice(0, 5));
  }

  const getToptuktukbatsman = () => {
    setTop5maletuktukbatsman([...malePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[10] - a.stats[10]
    }).slice(0, 5));
    setTop5femaletuktukbatsman([...femalePlayers].sort((a, b) => {
      a.stats && b.stats && b.stats[10] - a.stats[10]
    }).slice(0, 5));
  }

  useEffect(() => {
    const getData = async () => {
      const maleData = [];
      const femaleData = [];
      const querySnapshot = await getDocs(query(collection(db, "participating-team-member"), where("edition", "==", "17")));
      querySnapshot.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        if (getGender(data.teamId) === "male") {
          maleData.push(data);
        } else {
          femaleData.push(data);
        }
      })
      setmalePlayers(maleData);
      setfemalePlayers(femaleData);
    }
    getData();
  }, []);

  useEffect(() => {

    const setData = () => {
      getTopBatsman();
      getTopBaller();
      getTopSixer();
      getTopfourer();
      getTophighestbatsaman();
      getToptuktukbatsman();
    }
    setData();
  }, [malePlayers, femalePlayers]);


  const [selectedGender, setSelectedGender] = useState("male");
  const maleColor = "[#508CD4]";
  const femaleColor = "[#CE3AB3]";
  const StylesBasedonGender = (gender) => {
    if (selectedGender === gender) {
      if (gender === "male") {
        return "bg-[#508CD4] font-[700] text-[20px] md:text-[39px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[103px] px-2 shadow-lg";
      } else if (gender === "female") {
        return "bg-[#CE3AB3] font-[700] text-[20px] md:text-[39px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[124px] px-2 shadow-lg";
      }
    } else {
      return "";
    }
  };

  function decisionsBasedonGender() {
    let finalDecision = "";
    if (selectedGender === "male") {
      finalDecision = "from-[#272CAA]";
    } else {
      finalDecision = "from-[#AA277E]";
    }

    return finalDecision;
  }
  const players = [1, 2, 3, 4, 5];

  //   player card definead for girl and boy



  return (
    <div>
      {/* <h1>Male Documents</h1>
      <ul>
        {console.log(malePlayers)}
        {malePlayers.map((document) => (
          <li key={document.id}>
            Document ID: {document.id},Name : {document.name} , edition : {document.edition} Total Score: {getPlayerScore(document.stats)}
          </li>
        ))}
      </ul>
      <h1>Female Documents</h1>
      <ul>
        {console.log(malePlayers)}
        {femalePlayers.map((document) => (
          <li key={document.id}>
            Document ID: {document.id},Name : {document.name} , edition : {document.edition} Total Score: {getPlayerScore(document.stats)}
          </li>
        ))}
      </ul> */}
      <Head>
        <title>MMNCT Stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={`bg-gradient-to-b ${decisionsBasedonGender()} to-white`}>
        <div>
          {" "}
          <p className=" text-4xl md:text-7xl font-extrabold text-white py-4 text-center tracking-widest">
            MMNCT'23
          </p>
        </div>
        <div className="bg-white my-2 mt-4 text-gray-500 flex justify-evenly w-[290px] mx-auto text-center font-[600] text-[16px] rounded-lg mb-6">
          <div
            onClick={() => {
              setSelectedGender("male");
            }}
            className={`cursor-pointer h-[44px] flex justify-center items-center`}
          >
            <p
              className={`${StylesBasedonGender(
                "male"
              )} flex items-center text-2xl font-semibold  justify-center rounded-lg`}
            >
              Men's
            </p>
          </div>
          <div
            onClick={() => {
              setSelectedGender("female");
            }}
            className={`cursor-pointer h-[44px] flex justify-center items-center`}
          >
            <p
              className={`${StylesBasedonGender(
                "female"
              )} flex items-center text-2xl font-semibold justify-center rounded-lg`}
            >
              Women's
            </p>
          </div>
        </div>
        <div className="w-5/6 mx-auto my-5">
          <div className=" w-full mx-auto gap-2 grid-cols-1 md:grid-cols-2  grid lg:grid-cols-3">


            <HighestScoreCard
             
              title="Most Runs"
              selectedGender={selectedGender}
            />
            <HighestScoreCard
              title="Most Wickets"
              selectedGender={selectedGender}
            />
            <HighestScoreCard title="Most 4s" selectedGender={selectedGender} />
            <HighestScoreCard title="Most 6s" selectedGender={selectedGender} />
            <HighestScoreCard
              title="Most Dot Balls"
              selectedGender={selectedGender}
            />
            <HighestScoreCard
              title="Highest Score"
              selectedGender={selectedGender}
            />
          </div>
          <div className="w-full  flex-col mx-auto mt-10 ">
            <p className="text-left text-3xl font-bold mb-5  text-black ">
              Top 5 Batsmen
            </p>
            <div
              className="w-full grid grid-flow-col overflow-x-auto   gap-x-5 scrollbar-hide "
              style={{}}
            >
              {console.log(top5malebatsman)}
              {selectedGender === "male"
                ? top5malebatsman.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"batsman"}
                  />
                })
                : top5femalebatsman.map(player => (

                  <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"batsman"}
                  />

                ))}

            
            </div>
          </div>
          <div className="w-full  flex-col mx-auto mt-10 ">
            <p className="text-left text-3xl font-bold mb-5  text-black">
              Top 5 Bowlers
            </p>
            <div
              className="w-full grid grid-flow-col overflow-x-auto   gap-x-5 scrollbar-hide "
              style={{}}
            >
              {selectedGender === "male"
                ? top5malebowler.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"bowler"}
                  />
                })
                : top5femalebowler.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"bowler"}
                  />

                })
                /* <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                />
                <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                />
                <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                />
                <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                />
                <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                />
                <PlayerProfilecard
                  selectedGender={selectedGender}
                  title={"bowler"}
                /> */
              }
            </div>
          </div>
          <div className="w-full  flex-col mx-auto mt-10 ">
            <p className="text-left text-3xl font-bold mb-5  text-black">
              Top 5 Sixer
            </p>
            <div
              className="w-full grid grid-flow-col overflow-x-auto   gap-x-5 scrollbar-hide "
              style={{}}
            >
              {selectedGender === "male"
                ? top5malesixer.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"six"}
                  />
                })
                : top5femalesixer.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"six"}
                  />

                })
              }

            </div>
          </div>
          <div className="w-full  flex-col mx-auto mt-10 ">
            <p className="text-left text-3xl font-bold mb-5  text-black">
              Top 5 Fourer
            </p>
            <div
              className="w-full grid grid-flow-col overflow-x-auto   gap-x-5 scrollbar-hide "
              style={{}}
            >
              {selectedGender === "male"
                ? top5malefourer.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"four"}
                  />
                })
                : top5femalefourer.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"four"}
                  />

                })
              }

            </div>
          </div>
          <div className="w-full  flex-col mx-auto mt-10 ">
            <p className="text-left text-3xl font-bold mb-5 text-black">
              Top 5 Tuk-Tuk Player
            </p>
            <div
              className="w-full grid grid-flow-col overflow-x-auto   gap-x-5 scrollbar-hide "
              style={{}}
            >
              {selectedGender === "male"
                ? top5maletutktukbatsman.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"tuktuk"}
                  />
                })
                : top5femaletuktukbatsman.map(player => {
                  return <PlayerProfilecard
                    playerStats={player}
                    selectedGender={selectedGender}
                    title={"tuktuk"}
                  />

                })
              }

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// {selectedGender === "male" ? (
//   <div className=" w-full md:w-5/6 mx-auto py-5 px-2 ">
//     <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md shadow-md">
//       <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
//         <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-blue-700 ">
//           Leading Run Scorer{" "}
//           <span>
//             {" "}
//             <GiCricketBat className=" inline-block rotate-180 text-blue-700 font-extrabold" />
//           </span>
//         </p>
//         <p
//           className={` bg-${maleColor} text-white rounded-md font-bold shadow-lg px-2`}>
//           Boys
//         </p>
//       </div>
//       <div>
//         <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
//           <div className=" w-[10%]">Pos</div>
//           <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
//             Batsman
//           </div>

//           <div className=" w-[12%] text-right">INN</div>
//           <div className=" w-[12%] text-right">RUN</div>
//           <div className=" w-[20%] text-right">S/R</div>
//         </div>
//         {/* Best batsman male */}
//         {renderPlayerDetails("batsman")}
//       </div>
//     </div>
//     <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md my-1 shadow-md">
//       <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
//         <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-blue-700 ">
//           Leading Wicket Tacker
//           <span>
//             {" "}
//             <GiThrowingBall className=" inline-block   font-extrabold" />
//           </span>
//         </p>
//         <p
//           className={` bg-${maleColor} text-white rounded-md font-bold shadow-lg px-2`}>
//           Boys
//         </p>
//       </div>
//       <div>
//         <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
//           <div className=" w-[10%]">Pos</div>
//           <div class="flex items-center  space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
//             Bowler
//           </div>

//           <div className=" w-[12%] text-right">INN</div>
//           <div className=" w-[12%] text-right">W</div>
//           <div className=" w-[20%] text-right">ECO</div>
//         </div>
//         {/* best bowler male */}
//         {renderPlayerDetails("bowler")}
//       </div>
//     </div>
//     <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md my-1 shadow-md">
//       <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
//         <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-blue-700 ">
//           Leading Wicket Tacker
//           <span>
//             {" "}
//             <GiThrowingBall className=" inline-block   font-extrabold" />
//           </span>
//         </p>
//         <p
//           className={` bg-${maleColor} text-white rounded-md font-bold shadow-lg px-2`}>
//           Boys
//         </p>
//       </div>
//       <div>
//         <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
//           <div className=" w-[10%]">Pos</div>
//           <div class="flex items-center  space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
//             Bowler
//           </div>

//           <div className=" w-[12%] text-right">INN</div>
//           <div className=" w-[12%] text-right">W</div>
//           <div className=" w-[20%] text-right">ECO</div>
//         </div>
//         {/* best bowler male */}
//         {renderPlayerDetails("bowler")}
//       </div>
//     </div>
//   </div>
// ) : (
//   <div className=" w-full md:w-5/6 mx-auto py-5 px-2 ">
//     <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md shadow-md">
//       <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
//         <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-pink-700 ">
//           Leading Run Scorer
//           <span>
//             {" "}
//             <GiCricketBat className=" inline-block rotate-180  font-extrabold" />
//           </span>
//         </p>
//         <p
//           className={` bg-${femaleColor} text-white rounded-md font-bold shadow-lg px-2`}>
//           Girls
//         </p>
//       </div>
//       <div>
//         <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
//           <div className=" w-[10%]">Pos</div>
//           <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
//             Batsman
//           </div>

//           <div className=" w-[12%] text-right">INN</div>
//           <div className=" w-[12%] text-right">RUN</div>
//           <div className=" w-[20%] text-right">S/R</div>
//         </div>
//         {/* best batsman girl */}
//         {renderPlayerDetails("batsman")}
//       </div>
//     </div>
//     <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md my-1 shadow-md">
//       <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
//         <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-pink-700 ">
//           Leading Wicket Tacker{" "}
//           <span>
//             {" "}
//             <GiThrowingBall className=" inline-block   font-extrabold" />
//           </span>
//         </p>
//         <p
//           className={` bg-${femaleColor} text-white rounded-md font-bold shadow-lg px-2`}>
//           Girls
//         </p>
//       </div>
//       <div>
//         <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
//           <div className=" w-[10%]">Pos</div>
//           <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
//             Bowler
//           </div>

//           <div className=" w-[12%] text-right">INN</div>
//           <div className=" w-[12%] text-right">W</div>
//           <div className=" w-[20%] text-right">ECO</div>
//         </div>
//         {/* best bowler girl */}
//         {renderPlayerDetails("bolwer")}
//       </div>
//     </div>
//   </div>
// )}
// {/* </div> */} */
const PlayerProfilecard = ({ playerStats, selectedGender, title }) => {
  let statTitle1 = "",
    statTitle2 = "",
    statTitle3 = "",
    stat1Value = 0,
    stat2Value = 0,
    stat3Value = 0;
  if (title == "batsman") {
    statTitle1 = "Matches Played";
    statTitle2 = "Runs Scored";
    statTitle3 = "Strike Rate";
  } else if (title == "bowler") {
    statTitle1 = "Matches Played";
    statTitle2 = "Wickets";
    statTitle3 = "Economy";
  } else if (title == "six") {
    statTitle1 = "Matches Played";
    statTitle2 = "Sixes";
    statTitle3 = "";
  } else if (title == "four") {
    statTitle1 = "Matches Played";
    statTitle2 = "Fours";
    statTitle3 = "";
  } else if (title == "tuktuk") {
    statTitle1 = "Matches Played";
    statTitle2 = "Dot Balls";
    statTitle3 = "Strike Rate";
  }
  return (
    <div className="w-[300px] border-2 bg-white rounded-lg">
      {/* w-[300px] */}
      <div className=" w-full justify-center  p-4 flex-col   gap-1 border-none  ">
        <div className="h-[100px] w-[100px] items-center justify-center mx-auto">
          <Image
            src={playerStats?.imgUrl !== ""
              ? playerStats?.imgUrl
              : selectedGender == "male"
                ? "/male.jpg"
                : "/female.jpg"}

            alt="profile_pic"
            width={80}
            height={80}
            className={`${selectedGender === "female"
              ? " rounded-full flex justify-center   mx-auto aspect-square   align-middle items-center ring-4 ring-offset-4 ring-pink-500 sm:align-middle  "
              : " rounded-full flex justify-center     mx-auto aspect-square   align-middle items-center ring-4 ring-offset-4 ring-blue-500 sm:align-middle "
              }
                 `}
          />
        </div>

        {/* <hr className=" h-1  bg-green-500 my-3 lg:hidden md:hidden sm:block" /> */}
        <div className="  w-full  px-2  ">
          <p className=" text-xl font-medium  text-center   ">
            {/* Sunny Das */}
            {playerStats?.name}
            {/* {player Name} */}
          </p>
          <p
            className={
              selectedGender == "male"
                ? `text-md font-bold  text-center  text-blue-900`
                : `text-md font-bold text-center   text-pink-500`
            }
          >
            {" "}
            {/* {playerTeam} */}
            {/* Vengeance */}

            {getTeamCategory(playerStats?.teamId)}
          </p>
          <p className="text-sm font-bold  text-center  ">
            {" "}
            {playerStats?.roll_no}
            {/* U21CS102 */}
            {/* {player Roll No} */}
          </p>
          <p className="text-lg font-bold  text-center ">
            {playerStats?.type}
            {/* {branch} */}
          </p>
          <p className="text-md font-bold text-center  ">
            {playerStats?.branch}
            {/* {branch} */}
            {/* Computer Science And Engineering */}
          </p>
        </div>
      </div>
      <hr
        className={`${selectedGender === "female"
          ? " h-1 bg-pink-400 m-1 "
          : "h-1 bg-blue-500 m-1"
          }`}
      />
      <div className="p-3 mx-auto  w-full">
        <div className=" rounded-xl w-5/6 mx-auto sm:flex md:flex-row gap-1">
          <div className="w-full p-1 ">
            <div className="  w-full mx-auto flex gap-5 justify-between px-2">
              <span className=" text-center   text-sm font-bold  rounded-l-md text-black space-x-1">
                {" "}
                {statTitle1}
              </span>
              <span className="   text-center    text-sm font-bold  text-black space-x-1">
                {" "}
                {playerStats && playerStats?.stats && playerStats?.stats[10]
                  ? playerStats?.stats[10]
                  : 0}
              </span>
            </div>
            <hr
              className={`${selectedGender === "female"
                ? " h-1 bg-pink-400 my-4 "
                : "h-1 bg-blue-500 my-4"
                }`}
            />
            <div className="  w-full mx-auto flex gap-5 justify-between px-2">
              <span className=" text-center   text-sm font-bold  rounded-l-md text-black space-x-1">
                {" "}
                {statTitle2}
              </span>
              <span className="   text-center    text-sm font-bold  text-black space-x-1">
                {" "}
                {
                  playerStats &&
                    playerStats?.stats &&
                    playerStats?.stats[10] ?
                    statTitle2 === "Runs Scored" ?
                      getPlayerScored(playerStats?.stats) :
                      statTitle2 === "Wickets" ?
                        playerStats?.stats[14] :
                        statTitle2 === "sixes" ?
                          playerStats?.stats[6] :
                          statTitle2 === "fours" ?
                            playerStats?.stats[4] :
                            statTitle2 === "Dot Balls" ?
                              playerStats?.stats[0] :
                              0 :
                    0
                }

              </span>
            </div>
            <hr
              className={`${selectedGender === "female"
                ? " h-1 bg-pink-400 my-4 "
                : "h-1 bg-blue-500 my-4"
                }`}
            />
            {statTitle3 !== "" && (
              <div className="  w-full mx-auto flex gap-5 justify-between px-2">
                <span className=" text-center   text-sm font-bold  rounded-l-md text-black space-x-1">
                  {" "}
                  {statTitle3}
                </span>
                <span className="   text-center    text-sm font-bold  text-black space-x-1">
                  {" "}
                  {
                    playerStats &&
                      playerStats?.stats &&
                      playerStats?.stats[12] ?
                      statTitle3 === "Economy" ?
                        calculateEconomyRate(playerStats?.stats[13], playerStats?.stats[12]) :
                        statTitle3 === "Strike Rate" ?
                          calculateStrikeRate(getPlayerScored(playerStats?.stats), getPlayerBalls(playerStats?.stats)) :
                          0 :
                      0
                  }

                </span>
              </div>
            )}
            {statTitle3 !== "" && (
              <hr
                className={`${selectedGender === "female"
                  ? " h-1 bg-pink-400 my-4 "
                  : "h-1 bg-blue-500 my-4"
                  }`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const HighestScoreCard = ({ playerStats, title, selectedGender }) => {
  return (
    <div className="flex flex-col border-2 rounded-lg gap-8 h-[285px] w-full bg-white">
      <div
        className={`text-center mx-auto font-bold text-3xl mt-2 ${selectedGender == "male" ? `text-[#508CD4]` : `text-[#CE3AB3]`
          } `}
      >
        {title}
      </div>
      <div className="flex ">
        <div className="w-1/2">
          <div className="h-[120px] w-[120px] items-center flex-col justify-center mx-auto ">
            <Image
              // src={playerStats?.imgUrl !== ""
              //   ? playerStats?.imgUrl
              //   : selectedGender == "male"
              //     ? "/male.jpg"
              //     : "/female.jpg"}
              src={"/male.jpg"}
              alt="profile_pic"
              width={100}
              height={100}
              className="rounded-full flex justify-center   mx-auto aspect-square   align-middle items-center  border-2 sm:align-middle "
            />
            <p className="text-center mt-2 font-semibold">
              {" "}
              VNGC {/*teamName*/}
            </p>
          </div>
        </div>
        <div className="mx-auto text-center w-1/2 ">
          <p className="text-center space-y-1 font-medium">
            Nitin Meena {/*playerName*/}{" "}
          </p>
          <p className="text-center space-y-1 font-medium">
            U21CS106 {/*playerRollNo*/}{" "}
          </p>

          <p className="text-center space-y-1 font-medium">
            Computer Science And Engineering {/*playerDepartment*/}{" "}
          </p>
        </div>
      </div>
      <div
        className={`mx-auto text-5xl font-bold mb-5  ${selectedGender == "male" ? `text-[#508CD4]` : `text-[#CE3AB3]`
          }`}
      >
        152 {/*count */}{" "}
      </div>
    </div>
  );
};


