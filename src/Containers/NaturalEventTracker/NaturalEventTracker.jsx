import React from "react";
import { useState, useEffect } from "react";
import NaturalEvents from "../../Components/NaturalEvents";
import SearchBar from "../../Components/SearchBar";

const NaturalEventTracker = () => {
  //State for data from Earth Observatory Natural
  //Event Tracker (EONET) API
  const [natEvent, setNatEvent] = useState("");
  //State for limit on number of items displayed
  const [limit, setLimit] = useState(0);
  //State for limit on how many days back
  const [days, setDays] = useState(0);

  useEffect(() => {
    const getNatEvents = async () => {
      const response = await fetch(
        `https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=${limit}&days=${days}`
      );
      const data = await response.json();
      setNatEvent(data);
    };
    getNatEvents();
  }, [limit, days]);
  console.log("Limit ", limit);
  console.log("Days ", days);
  console.log(natEvent);

  //Handle input for limit
  const handleLimitClick = (e) => {
    setLimit(e.target.value);
  };

  //Handle input for days
  const handleDaysClick = (e) => {
    setDays(e.target.value);
  };

  //SearchBar functionality for Natural Event Tracker
  const [search, setSearch] = useState("");
  console.log("Search:", search);
  const handleSubmit = (newSearchValue) => {
    setSearch(newSearchValue);
  };

  return (
    <div>
      <NaturalEvents
        natEvent={natEvent}
        onClick={(handleLimitClick, handleDaysClick)}
      />
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default NaturalEventTracker;
