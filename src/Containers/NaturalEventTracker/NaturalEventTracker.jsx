import React from "react";
import { useState, useEffect } from "react";
import NaturalEvents from "../../Components/NaturalEvents";
// import styles from "./NaturalEventTracker.module.scss";
import NaturalEventButtons from "../../Components/NaturalEventButtons";
// import SearchBar from "../../Components/SearchBar";

const NaturalEventTracker = () => {
  //State for data from Earth Observatory Natural
  //Event Tracker (EONET) API
  const [natEvent, setNatEvent] = useState("");
  //State for limit on how many days back user wants to query
  const [days, setDays] = useState("");

  useEffect(() => {
    if (!days) return;
    const getNatEvents = async () => {
      const response = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v3/events?limit=10&days=${days}`
      );
      const data = await response.json();
      setNatEvent(data);
    };
    getNatEvents();
  }, [days]);
  console.log("Days: ", days);
  console.log(natEvent);

  //Handle input for limit
  const handleSubmit = (value) => {
    setDays(value);
  };

  // //Function to randomise image selection
  function randomiseImg(arr) {
    let newArr = [];
    //Specify how many pics to render
    for (let i = 0; i < arr.length; i++) {
      let randomNum = Math.floor(Math.random() * arr.length);
      if (!newArr.includes(randomNum)) {
        newArr.push(randomNum);
      }
    }
    return newArr;
  }
  {
    natEvent.events &&
      console.log("New Array: ", randomiseImg(natEvent.events));
  }

  return (
    <div>
      <NaturalEventButtons onSubmit={handleSubmit} />
      <div>
        {natEvent &&
          natEvent.events &&
          natEvent.events
            .filter((natEvent, i) => randomiseImg(natEvent.events).includes(i))
            .map((natEvent, i) => (
              <NaturalEvents natEvent={natEvent} key={i} />
            ))}
      </div>
    </div>
  );
};

export default NaturalEventTracker;
