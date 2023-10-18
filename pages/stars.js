// pages/FirestorePage.js
import { useEffect, useState } from 'react';
import { db } from '../components/db/Firebase';
import { collection, where, getDocs, query } from 'firebase/firestore';
import { getPlayerScore } from '../components/matchFunctions';
import teams from '../components/teams';

export default function Stars() {
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
    const [top5malehighestbatsamn, setTop5malehighestbatsman] = useState([]);
    const [top5femalehighestbatsamn, setTop5femalehighestbatsman] = useState([]);
    // const [top5maletutktukbatsamn, setTop5maletuktukbatsman] = useState([]);
    // const [top5femaletuktukbatsamn, setTop5femaletuktukbatsman] = useState([]);

    const getGender = (teamid) => {
        let result;
        for (const val in teams) {
            const value = teams[val];
            if (value.teamId === teamid) {
                result = value.teamCategory;
                break;
            }
        }
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
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
        setTop5femalebowler([...femalePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
    }

    const getTopSixer = () => {
        setTop5malesixer([...malePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
        setTop5femalesixer([...femalePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
    }

    const getTopfourer = () => {
        setTop5malefourer([...malePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
        setTop5femalefourer([...femalePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
    }

    const getTophighestbatsaman = () => {
        setTop5malehighestbatsman([...malePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
        setTop5femalehighestbatsman([...femalePlayers].sort((a, b) => {
            getPlayerScore(b.stats) - getPlayerScore(a.stats)
        }).slice(0, 5));
    }

    useEffect(async () => {

        const maleData = [];
        const femaleData = [];
        const querySnapshot = await getDocs(query(collection(db, "participating-team-member"), where("edition", "==", "17")));
        const documents = [];
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
        getTopBatsman();
        getTopBaller();
        getTopSixer();
        getTopfourer();
        getTophighestbatsaman();
    }, []);

    return (
        <div>
            <h1>Male Documents</h1>
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
            </ul>
        </div>
    );
}
