import { useState, useEffect } from "react";

// The api link
// https://swapi.dev/api/


export default function StarShipCard() {

    let [shipList, setShipList] = useState([]);

    function showShip(ship, index) {
        return (
            <h2 key={index} className="ship">{ship.name}</h2>
        )
    }
    useEffect(() => {
        async function getStarShips() {
            let starShips = await fetch("https://swapi.dev/api/starships/?format=json")
            let format = await starShips.json();
            setShipList(format.results);
        }
        getStarShips();

    }, [])

    return (
        <>
            <header>Star Wars StarShips</header>
            <div className="ship-holder">
                {shipList.map(showShip)}
            </div>
        </>
    )
}