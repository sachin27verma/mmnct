// pages/FirestorePage.js
import { useEffect, useState } from "react";
import { db } from "../components/db/Firebase";
import { collection, where, getDocs, query } from "firebase/firestore";
import { getPlayerScore } from "../components/matchFunctions";
import teams from "../components/teams";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GiCricketBat, GiThrowingBall } from "react-icons/gi";

export default function Stars() {
  // const [malePlayers, setmalePlayers] = useState([]);
  // const [femalePlayers, setfemalePlayers] = useState([]);
  // const [top5malebatsman, setTop5malebatsman] = useState([]);
  // const [top5femalebatsman, setTop5femalebatsman] = useState([]);
  // const [top5malebowler, setTop5malebowler] = useState([]);
  // const [top5femalebowler, setTop5femalebowler] = useState([]);
  // const [top5malesixer, setTop5malesixer] = useState([]);
  // const [top5femalesixer, setTop5femalesixer] = useState([]);
  // const [top5malefourer, setTop5malefourer] = useState([]);
  // const [top5femalefourer, setTop5femalefourer] = useState([]);
  // const [top5malehighestbatsamn, setTop5malehighestbatsman] = useState([]);
  // const [top5femalehighestbatsamn, setTop5femalehighestbatsman] = useState([]);
  // // const [top5maletutktukbatsamn, setTop5maletuktukbatsman] = useState([]);
  // // const [top5femaletuktukbatsamn, setTop5femaletuktukbatsman] = useState([]);

  // const getGender = (teamid) => {
  //     let result;
  //     for (const val in teams) {
  //         const value = teams[val];
  //         if (value.teamId === teamid) {
  //             result = value.teamCategory;
  //             break;
  //         }
  //     }
  //     return result;
  // };

  // const getTopBatsman = () => {
  //     setTop5malebatsman([...malePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  //     setTop5femalebatsman([...femalePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  // }

  // const getTopBaller = () => {
  //     setTop5malebowler([...malePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  //     setTop5femalebowler([...femalePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  // }

  // const getTopSixer = () => {
  //     setTop5malesixer([...malePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  //     setTop5femalesixer([...femalePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  // }

  // const getTopfourer = () => {
  //     setTop5malefourer([...malePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  //     setTop5femalefourer([...femalePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  // }

  // const getTophighestbatsaman = () => {
  //     setTop5malehighestbatsman([...malePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  //     setTop5femalehighestbatsman([...femalePlayers].sort((a, b) => {
  //         getPlayerScore(b.stats) - getPlayerScore(a.stats)
  //     }).slice(0, 5));
  // }

  // useEffect(async () => {

  //     const maleData = [];
  //     const femaleData = [];
  //     const querySnapshot = await getDocs(query(collection(db, "participating-team-member"), where("edition", "==", "17")));
  //     const documents = [];
  //     querySnapshot.forEach((doc) => {
  //         const data = { id: doc.id, ...doc.data() };
  //         if (getGender(data.teamId) === "male") {
  //             maleData.push(data);
  //         } else {
  //             femaleData.push(data);
  //         }
  //     })
  //     setmalePlayers(maleData);
  //     setfemalePlayers(femaleData);
  //     getTopBatsman();
  //     getTopBaller();
  //     getTopSixer();
  //     getTopfourer();
  //     getTophighestbatsaman();
  // }, []);

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

  function renderPlayerDetails(types) {
    const renderText = (er) => {
      if (er === 1) {
        return "text-white";
      } else {
        return "text-black";
      }
    };

    return players.map((er) => (
      <div
        key={er}
        className={`py-2  ${
          er === 1
            ? types === "batsman"
              ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-md text-white text-xl font-bold scale-y-110 scale-x-105 bg-opacity-50"
              : "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-md text-white text-xl font-bold scale-y-110 scale-x-105 bg-opacity-50"
            : "bg-white border-b-2 border-gray-300 text-sm md:text-lg font-medium"
        } ${
          er === 5 ? "border-none rounded-bl-md rounded-br-md" : ""
        } flex justify-between items-center px-3 font-medium`}>
            {/* positioning 1,2,3... */}
        <div className="w-[10%]">{er}</div>
        <div className="flex items-center space-x-2 md:space-x-4 w-[45%]">
          <div
            className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ring-2 ring-lime-400 ring-offset-2  ring-offset-red-600 rounded-full ${renderText(
              er
            )}`}>
                {/* prefix letter of player name */}
            <span className="font-medium">JL</span>
          </div>

          <div className="font-medium">
            {/* player name */}
            <div className={`text-sm md:text-md font-bold ${renderText(er)}`}>
              Jese Leos
            </div>
            {/* team name short form */}
            <div className={`text-xs md:text-sm ${renderText(er)}`}>SMK</div>
          </div>
        </div>
{/* for bastman (inning, runs , strikrate )  for bowler (innings , wickets , Economy) */}
        <div className="w-[12%] text-right">2</div>
        <div className="w-[12%] text-right">56</div>
        <div className="w-[20%] text-right">110.6</div>
      </div>
    ));
  }

//   // To use the function, pass the desired 'types' value:
//   const batsmanPlayerDetails = renderPlayerDetails("batsman");
//   const bowlerPlayerDetails = renderPlayerDetails("bowler");

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
            className={`cursor-pointer h-[44px] flex justify-center items-center`}>
            <p
              className={`${StylesBasedonGender(
                "male"
              )} flex items-center text-2xl font-semibold  justify-center rounded-lg`}>
              Men's
            </p>
          </div>
          <div
            onClick={() => {
              setSelectedGender("female");
            }}
            className={`cursor-pointer h-[44px] flex justify-center items-center`}>
            <p
              className={`${StylesBasedonGender(
                "female"
              )} flex items-center text-2xl font-semibold justify-center rounded-lg`}>
              Women's
            </p>
          </div>
        </div>
        {/*  */}
        {selectedGender === "male" ? (
          <div className=" w-full md:w-5/6 mx-auto py-5 px-2 ">
            <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md shadow-md">
              <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
                <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-blue-700 ">
                  Leading Run Scorer{" "}
                  <span>
                    {" "}
                    <GiCricketBat className=" inline-block rotate-180 text-blue-700 font-extrabold" />
                  </span>
                </p>
                <p
                  className={` bg-${maleColor} text-white rounded-md font-bold shadow-lg px-2`}>
                  Boys
                </p>
              </div>
              <div>
                <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
                  <div className=" w-[10%]">Pos</div>
                  <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
                    Batsman
                  </div>

                  <div className=" w-[12%] text-right">INN</div>
                  <div className=" w-[12%] text-right">RUN</div>
                  <div className=" w-[20%] text-right">S/R</div>
                </div>
                {/* Best batsman male */}
                {renderPlayerDetails("batsman")}
              </div>
            </div>
            <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md my-1 shadow-md">
              <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
                <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-blue-700 ">
                  Leading Wicket Tacker
                  <span>
                    {" "}
                    <GiThrowingBall className=" inline-block   font-extrabold" />
                  </span>
                </p>
                <p
                  className={` bg-${maleColor} text-white rounded-md font-bold shadow-lg px-2`}>
                  Boys
                </p>
              </div>
              <div>
                <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
                  <div className=" w-[10%]">Pos</div>
                  <div class="flex items-center  space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
                    Bowler
                  </div>

                  <div className=" w-[12%] text-right">INN</div>
                  <div className=" w-[12%] text-right">W</div>
                  <div className=" w-[20%] text-right">ECO</div>
                </div>
                {/* best bowler male */}
                {renderPlayerDetails("bowler")}
              </div>
            </div>
          </div>
        ) : (
          <div className=" w-full md:w-5/6 mx-auto py-5 px-2 ">
            <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md shadow-md">
              <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
                <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-pink-700 ">
                  Leading Run Scorer
                  <span>
                    {" "}
                    <GiCricketBat className=" inline-block rotate-180  font-extrabold" />
                  </span>
                </p>
                <p
                  className={` bg-${femaleColor} text-white rounded-md font-bold shadow-lg px-2`}>
                  Girls
                </p>
              </div>
              <div>
                <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
                  <div className=" w-[10%]">Pos</div>
                  <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
                    Batsman
                  </div>

                  <div className=" w-[12%] text-right">INN</div>
                  <div className=" w-[12%] text-right">RUN</div>
                  <div className=" w-[20%] text-right">S/R</div>
                </div>
                {/* best batsman girl */}
                {renderPlayerDetails("batsman")}
              </div>
            </div>
            <div className=" leading_batsman w-full md:w-4/6 mx-auto bg-white rounded-md my-1 shadow-md">
              <div className=" py-3   px-3 rounded-sm shadow-md flex justify-between items-center ">
                <p className=" text-md md:text-xl font-extrabold text-drop-shadow-2xl text-pink-700 ">
                  Leading Wicket Tacker{" "}
                  <span>
                    {" "}
                    <GiThrowingBall className=" inline-block   font-extrabold" />
                  </span>
                </p>
                <p
                  className={` bg-${femaleColor} text-white rounded-md font-bold shadow-lg px-2`}>
                  Girls
                </p>
              </div>
              <div>
                <div className=" py-2  flex justify-between items-center px-3 text-sm md:text-lg font-semibold ">
                  <div className=" w-[10%]">Pos</div>
                  <div class="flex items-center space-x-4 w-[45%] text-sm md:text-lg font-bold px-1">
                    Bowler
                  </div>

                  <div className=" w-[12%] text-right">INN</div>
                  <div className=" w-[12%] text-right">W</div>
                  <div className=" w-[20%] text-right">ECO</div>
                </div>
                {/* best bowler girl */}
                {renderPlayerDetails("bolwer")}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
