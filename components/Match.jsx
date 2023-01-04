import Image from "next/image";
import React, { useEffect, useState } from "react";
import OngoingMatchCard from "./OngoingMatchCard"
import UpcomingMatchCard from "./UpcomingMatchCard"
import PastMatchCard from "./PastMatchCard"
import { database } from "../components/db/Firebase";
import { ref, onValue } from "firebase/database";

const Match = () => {
  let MatchD = [];
  const [matchData, setMatchData] = useState(MatchD);
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedTime, setSelectedTime] = useState("present");
  useEffect(() => {
    const temp = ref(database, "matchDetail/");
    onValue(temp, async (snapshot) => {
      const data = await snapshot.val();
      setMatchData(data);
    });
  }, [selectedTime, selectedGender]);

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

  const StylesBasedonTime = (gender, time) => {

    if (selectedGender === gender && selectedTime === time) {
      if (gender === "male") {
        return "bg-[#508CD4] font-[550] text-[20px] md:text-[30px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[103px] px-2 shadow-lg";
      } else if (gender === "female") {
        return "bg-[#CE3AB3] font-[550] text-[20px] md:text-[30px] md:w-auto md:h-[71px] leading-[24.38px] text-white h-[51px] w-[124px] px-2 shadow-lg";
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

  return (
    <>
      <div className={`bg-gradient-to-b ${decisionsBasedonGender()} to-white`}>
        <div className="md:hidden">
          <div className="bg-white text-gray-500 flex justify-evenly w-[223px] mx-auto text-center font-[600] text-[16px] rounded-lg mb-10">
            <div
              onClick={() => {
                setSelectedGender("male");
              }}
              className={`cursor-pointer h-[44px] flex justify-center items-center`}
            >
              <p
                className={`${StylesBasedonGender(
                  "male"
                )} flex items-center  justify-center rounded-lg`}
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
                )} flex items-center  justify-center rounded-lg`}
              >
                Women's
              </p>
            </div>
          </div>


          <div className="relative h-[540px] overflow-x-hidden mx-auto">
            <div className="grid grid-cols-2 gap-2 mx-auto w-[360px]">
              <div
                onClick={() => {
                  setSelectedTime("present");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "present"
                  )} flex items-center rounded-lg`}
                >
                  Ongoing Matches
                </p>
              </div>
              <div
                onClick={() => {
                  setSelectedTime("future");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "future"
                  )} flex items-center rounded-lg`}
                >
                  Upcoming Matches
                </p>
              </div>
              <div
                onClick={() => {
                  setSelectedTime("past");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "past"
                  )} flex items-center rounded-lg`}
                >
                  Past Matches
                </p>
              </div>
            </div>

            {selectedGender === "male" ? (
              <Image
                src={`/vector-4.png`}
                alt="Picture of a batsman"
                height={400}
                width={300}
                className="absolute bottom-0 h-[382px] w-[382px] left-[52px]"
              />
            ) : (
              <Image
                src={`/vector-7.png`}
                alt="Picture of a batsman"
                height={400}
                width={300}
                className="absolute bottom-0 h-[291px] w-[291px] left-[82px]"
              />
            )}
          </div>
         
        </div>

        {/* .
    .
    .
    .
    .
    .
    . */}

        {/* follwowing component will be shown only when screen size is 725px or higher */}
        <div className="hidden md:flex">
          <div className="w-2/5 flex justify-start items-center mt-20 ml-0">
            {selectedGender === "male" ? (
              <Image
                src={`/vector-4.png`}
                alt="Picture of a batsman"
                height={400}
                width={300}
                className=" h-[591px] w-[591px]"
              />
            ) : (
              <Image
                src={`/vector-7.png`}
                alt="Picture of a batsman"
                height={400}
                width={300}
                className="h-[491px] w-[491px]"
              />
            )}
          </div>
          <div>
            <div className="flex justify-center items-center mt-10">
              {/* buttons to switch between men and women team */}
              <div className="flex items-center justify-between mr-10 bg-white text-gray-500 px-4 py-2 gap-2 text-center rounded-lg font-[600] text-[30px]">
                {/* male button */}
                <div
                  onClick={() => {
                    setSelectedGender("male");
                  }}
                  className={` h-[44px] flex justify-center items-center cursor-pointer`}
                >
                  <p
                    className={`${StylesBasedonGender(
                      "male"
                    )} flex items-center rounded-lg`}
                  >
                    Men's
                  </p>
                </div>

                {/* women's button */}
                <div
                  onClick={() => {
                    setSelectedGender("female");
                  }}
                  className={` h-[44px] flex justify-center items-center cursor-pointer`}
                >
                  <p
                    className={`${StylesBasedonGender(
                      "female"
                    )} flex items-center rounded-lg`}
                  >
                    Women's
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mr-10 bg-white text-gray-500 px-4 py-2 gap-3 text-center rounded-lg font-[500] text-[20px] mt-5">
              <div
                onClick={() => {
                  setSelectedTime("present");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "present"
                  )} flex items-center rounded-lg`}
                >
                  Ongoing Matches
                </p>
              </div>
              <div
                onClick={() => {
                  setSelectedTime("future");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "future"
                  )} flex items-center rounded-lg`}
                >
                  Upcoming Matches
                </p>
              </div>
              <div
                onClick={() => {
                  setSelectedTime("past");
                }}
                className={` h-[44px] flex justify-center items-center cursor-pointer`}
              >
                <p
                  className={`${StylesBasedonTime(
                    selectedGender, "past"
                  )} flex items-center rounded-lg`}
                >
                  Past Matches
                </p>
              </div>
            </div>
            <div className="float-none mt-20">
              <div className="grid gap-3 mr-4 grid-cols-1 ">

                {
                  selectedTime === "past" ? (
                    <PastMatchCard matchData={[matchData, selectedGender]} />
                  ) : selectedTime === "present" ? (
                    <OngoingMatchCard matchData={[matchData, selectedGender]} />
                  ) : (
                    <UpcomingMatchCard matchData={[matchData, selectedGender]} />
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;
