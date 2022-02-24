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
  //State for limit on number of items displayed
  const [limit, setLimit] = useState("");
  //State for limit on how many days back
  const [days, setDays] = useState("");

  useEffect(() => {
    if (!limit) return;
    const getNatEvents = async () => {
      const response = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v3/events?limit=${limit}&days=${days}`
      );
      const data = await response.json();
      setNatEvent(data);
    };
    getNatEvents();
  }, [limit, days]);
  console.log("Limit: ", limit);
  console.log("Days: ", days);
  console.log(natEvent);

  //Handle input for limit
  const handleLimitSubmit = (value) => {
    setLimit(value);
  };

  // //Handle input for days
  const handleDaysSubmit = (value) => {
    setDays(value);
  };

  //Function to randomise image selection
  // function randomiseImg(arr) {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let randomNum = Math.floor(Math.random() * arr.length);
  //     if (!newArr.includes(randomNum)) {
  //       newArr.push(randomNum);
  //     }
  //   }
  //   console.log("New Array: ", newArr);
  //   return newArr;
  // }

  return (
    <div>
      <NaturalEventButtons onSubmit={(handleLimitSubmit, handleDaysSubmit)} />
      <div>
        {natEvent &&
          natEvent.events
            .filter((natEvent, i) => i < 10)
            .map((natEvent, i) => (
              <NaturalEvents natEvent={natEvent} key={i} />
            ))}
      </div>
    </div>
  );
};

export default NaturalEventTracker;
