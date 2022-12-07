import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Navbar from "../components/Navbar";
import { FaWindowClose } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

function Polls() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    // you have to fetch all the matches here and store it in matches array
  }, []);
  return (
    <div>
      <Head>
        <title>Polls - Make your favorite Team win!</title>
      </Head>
      <Navbar />
      <p className="font-bold text-3xl my-7 text-center">
        Who do you think
        <br className="md:hidden"/> is going to win today??
      </p>
      <p className="text-center">
        (Tap on any one of the matches for whom you wish to vote, and then tap
        on your favorite team!)
      </p>
      {matches.map((match) => (
        <div></div>
      ))}
      <div className="md:grid md:grid-cols-3 lg:w-11/12 lg:mx-auto">
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Polls;





















// this is the component to show individual matches and collect polls for them
function ShowMatch() {
  const [showModal, setShowModal] = useState(false);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [showPercentage, setShowPercentage] = useState(false);
  const [showError, setShowError] = useState(false);

  const { data: session } = useSession();

  const handleClose = () => {
    return setShowModal(false);
  };

  const vote = () => {
    if (!alreadyVoted) {
      //change the stats

      setShowPercentage(true);
      setAlreadyVoted(true);

      //register this ip at firestore db and prevent it from voting again
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    //check whether the current singed in user has voted before for this match or not
  }, []);

  const teamStyle =
    " flex flex-col justify-evenly items-center text-lg w-1/2 my-5";

  return (
    <div className="flex md:hover:shadow-xl cursor-pointer bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600 mx-2 flex-col  my-4 rounded-xl ">
      {!showModal && (
        <div
          onClick={() => {
            setShowModal(true);
          }}
          className="flex mx-2 bg-white my-4 rounded-xl shadow-lg "
        >
          {/* team 1 details */}
          <div className={teamStyle}>
            <img
              alt="team logo"
              className="team-logo rounded-lg"
              src="data:image/png;base64,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"
            />
            <div className="text-start">
              <p>Team name</p>
            </div>
          </div>

          {/* vs graphic only visible when md is crossed */}
          <Image width={100} alt="versus image" height={40} src="/vector-8.png" className="py-4" />

          {/* team 2 details */}
          <div className={teamStyle}>
            <img
              className="team-logo rounded-lg"
              alt="team logo"
              src="data:image/png;base64,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"
            />
            <div className="text-end">
              <p>Team name</p>
            </div>
          </div>
        </div>
      )}

      {/* modal for voting */}
      {showModal && session && (
        <div className="bg-opacity-70 rounded-xl w-full bg-gray-300 py-4 px-2">
          <div className="bg-white px-4 py-2 h-full w-full">
            {/* error box */}
            {showError && (
              <div className="flex items-center my-3 justify-between border border-red-600 rounded-md px-3 py-2 bg-red-200 text-red-700 font-semibold text-lg">
                <p>Sorry, you have already voted for this match.</p>
                <AiOutlineCloseCircle
                  className="text-3xl ml-2 cursor-pointer"
                  onClick={() => {
                    setShowError(false);
                  }}
                />
              </div>
            )}

            <p>Tap on the team who you think is going to win!</p>
            <div className="flex">
              <div
                onClick={vote}
                className={`${teamStyle} hover:shadow-lg rounded-md hover:text-xl border mr-4`}
              >
                <img
                  alt="team logo"
                  className="team-logo rounded-lg"
                  src="data:image/png;base64,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"
                />
                <div className="text-start">
                  <p>Team name</p>
                </div>
              </div>
              <div
                onClick={vote}
                className={`${teamStyle} hover:shadow-lg rounded-md hover:text-xl border`}
              >
                <img
                  className="team-logo rounded-lg"
                  alt="team logo"
                  src="data:image/png;base64,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"
                />
                <div className="text-end">
                  <p>Team name</p>
                </div>
              </div>
            </div>

            {/* votes polled in favor and against depictor */}
            <div>percentages of vote polled will be displayed here</div>

            {/* close button */}
            <p
              onClick={handleClose}
              className="flex justify-center items-center text-xl gap-3 mt-5 border w-3/5 mx-auto py-3 px-2 rounded-full border-black"
            >
              <FaWindowClose className="" />
              Close
            </p>
          </div>
        </div>
      )}
      {showModal && !session && (
        <div className="bg-white mx-2 my-3 rounded-lg px-2">
          <div
            className="font-semibold hover:bg-black hover:text-white hover:shadow-lg hover:shadow-amber-400 cursor-pointer text-center text-3xl  w-2/5 mx-auto border px-3 rounded-full border-black py-1 my-1"
            onClick={signIn}
          >
            Sign-in
          </div>
          <p className="mb-3"> as you need to register in order to vote!</p>
          <p className="mb-4 px-2 border border-yellow-800 bg-yellow-100 text-yellow-600">
            Don't worry we don't store your email, it is a gmail based
            authentication to make sure that one person doesn't vote twice!
          </p>
        </div>
      )}
    </div>
  );
}
