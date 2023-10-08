import Image from "next/image";
import React, { useEffect, useState } from "react";
import { db, dbRef, storage } from "../components/db/Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Link from "next/link";
import { child, get } from "firebase/database";
import PrevYearMatchCard from "../components/PrevYearMatchCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ParticipatingTeams from "../components/PrevSquads";
import PrevEdMatch from "../components/PrevEdiMatches";
import DeveloperComponent from "../components/Developers";
export async function getServerSideProps() {
  let data = [];

  let querySnapshot = await getDocs(collection(db, "participating-teams"));
  querySnapshot.forEach((doc) => {
    let temp = doc.data();
    temp.id = doc.id;
    data.push(temp);
  });

   querySnapshot = await getDocs(collection(db, "pastYearMatches"));
  let list = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    list.push(doc.data());
  });
  list.sort((a, b) => b.MatchNo - a.MatchNo);
  // console.log(list);

  let organizers=[];
   
  // const Snapshot = await getDocs(
  //   query(collection(db, "team"), orderBy("name", "desc"))
  // );
  // Snapshot.forEach((doc) => {
  //   let data = doc.data();
  //   if (data.position == "developer" && data.edition == "16" ) {
  //     organizers.push(data);
  //   }
  // });
   querySnapshot = await getDocs(
    query(collection(db, "team"), orderBy("name", "desc"))
  );
  let coordinators = [];
  let developers = [];
  let designers = [];
  let content_creators = [];
  let in_house = [];

  querySnapshot.forEach((doc) => {
    let data = doc.data();
    if (data.position == "coordinator" && data.edition == "16") {
      coordinators.push(data);
    } else if (data.position == "developer" && data.edition == "16") {
      developers.push(data);
    } else if (data.position == "designer" && data.edition == "16") {
      designers.push(data);
    } else if (data.position == "content writer" && data.edition == "16" ) {
      content_creators.push(data);
    } else if (data.position == "Infra and In-House" && data.edition == "16" ){
      in_house.push(data);
    }
  });
  return {
    props: {
      teamList: data,
      matchData:list,
      coordinators,
      developers,
      designers,
      content_creators,
      in_house
    },
  };
}
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


const PastRec=({teamList, matchData,coordinators,
  developers,
  designers,
  content_creators,
  in_house})=>{

  
  const [winnerTeamList, setWinnerTeamList] = useState([]);
  useEffect(() => {
    
    setWinnerTeamList(() => decideWinner("SHM", "SAM", teamList));
  }, []);

  const [selectedChoice, setSelectedChoice] = useState("squads");
  const [edition, setEdition] = useState("16");
  
  const StylesBasedonChoice = (choice) => {
    if (selectedChoice === choice) {
      if (choice === "matches") {
        return "bg-[#508CD4] font-[700] text-[20px] md:text-[39px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[103px] px-2 shadow-lg";
      } else if (choice === "squads") {
        return "bg-[#508CD4] font-[700] text-[20px] md:text-[39px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[124px] px-2 shadow-lg";
      }
    } else {
      return "";
    }
  };

return (
  <>
  <Navbar/>
  <div className="bg-gradient-to-b from-[#6f9ce6] to-[#7cd2d3] py-5 " >
    
  <p className=" text-white text-[38px] leading-[58.51px] text-center  font-bold ">
                Select Edition
                <select value={edition} onChange={(e)=>setEdition(e.target.value)} className="rounded-lg ml-5 cursor-pointer font-semibold w-20 text-black text-[26px]" > 
                   
                    <option value={"16"}className="rounded-lg hover:cursor-pointer font-semibold text-[20px] ">16</option>
                    {/* <option value={"17"}className="rounded-lg hover:cursor-pointer font-semibold text-[20px] ">17</option> */}
              </select>
              </p>

  <WinnersAnnouncement teamlist={winnerTeamList} />
  <div className=" ">
       <div className="flex justify-center items-center py-5  ">
              {/* buttons to switch between men and women team */}
              <div className="flex items-center mx-auto border-2 bg-white text-gray-500 px-4 py-2 gap-2 text-center rounded-lg font-[600] text-[30px]">
                {/* men's button */}
                <div
                  onClick={() => {
                    setSelectedChoice("squads");
                  }}
                  className={` h-[44px] flex justify-center items-center cursor-pointer`}
                >
                  <p
                    className={`${StylesBasedonChoice(
                      "squads"
                    )} flex items-center rounded-lg`}
                  >
                    Squads
                  </p>
                </div>
  
                {/* women's button */}
                <div
                  onClick={() => {
                    setSelectedChoice("matches");
                  }}
                  className={` h-[44px] flex justify-center items-center cursor-pointer`}
                >
                  <p
                    className={`${StylesBasedonChoice(
                      "matches"
                    )} flex items-center rounded-lg`}
                  >
                    Matches
                  </p>
                </div>
              </div>
              
            </div>
     
  </div>
  {selectedChoice=="squads" ? <ParticipatingTeams teamList={teamList}edition={edition} /> :<PrevEdMatch matchData={matchData}/> }
  </div>
  {coordinators.length !== 0 && <DeveloperComponent text="Previous Edition Co-ordinators" developers={coordinators} />}
   {designers.length !== 0 && <DeveloperComponent text="Previous Edition Designers" developers={designers}/>}
   {in_house.length !== 0 && <DeveloperComponent text="Previous Edition Infra-In House" developers={in_house} />}
   {content_creators.length !== 0 && <DeveloperComponent text="Previous Edition Content Writers" developers={content_creators} />}
  <Footer/>
  </>
)
}

export default PastRec;
const WinnersAnnouncement = ({ teamlist }) => {
  const winnerTabStyle =
    "flex items-center justify-evenly w-full md:w-2/3 md:mx-auto lg:w-1/3 text-center my-2 py-2 rounded-md shadow-md text-2xl ";

  const winnerStyle = "font-bold font-3xl";

  console.log(teamlist);

  if (teamlist.length === 0) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="flex flex-col  w-full lg:flex-row justify-evenly py-10  ">
        <div className={"bg-[#3fc6d5] " + winnerTabStyle}>
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
