import React from "react";
import { useState, useEffect } from "react";
import NaturalEvents from "../../Components/NaturalEvents";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import styles from "./NaturalEventTracker.module.scss";
// import SearchBar from "../../Components/SearchBar";

const NaturalEventTracker = () => {
  //State for data from Earth Observatory Natural
  //Event Tracker (EONET) API
  const [natEvent, setNatEvent] = useState("1");
  //State for limit on number of items displayed
  const [limit, setLimit] = useState("10");
  //State for limit on how many days back
  const [days, setDays] = useState("10");

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
  console.log("Limit: ", limit);
  console.log("Days: ", days);
  console.log(natEvent);

  //Handle input for limit
  const handleLimitClick = (e) => {
    setLimit(e.target.value);
  };

  //Handle input for days
  const handleDaysClick = (e) => {
    setDays(e.target.value);
  };

  //Function to randomise image selection
  function randomiseImg(arr) {
    let newArr = [];
    //Specify how many pics to render
    for (let i = 0; i < arr.length; i++) {
      let randomNum = Math.floor(Math.random() * arr.length);
      if (!newArr.includes(randomNum)) {
        newArr.push(randomNum);
      }
    }
    console.log("New Array: ", newArr);
    return newArr;
  }

  return (
    <div>
      <div>
        <h3 className={styles.textEvents}>
          How many events do you want to see?
        </h3>
        <div className={styles.btnGroup}>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button value="1" onClick={handleLimitClick}>
                1
              </Button>
              <Button value="2" onClick={handleLimitClick}>
                2
              </Button>
              <Button value="3" onClick={handleLimitClick}>
                3
              </Button>
              <Button value="4" onClick={handleLimitClick}>
                4
              </Button>
              <Button value="5" onClick={handleLimitClick}>
                5
              </Button>
              <Button value="6" onClick={handleLimitClick}>
                6
              </Button>
              <Button value="7" onClick={handleLimitClick}>
                7
              </Button>
              <Button value="8" onClick={handleLimitClick}>
                8
              </Button>
              <Button value="9" onClick={handleLimitClick}>
                9
              </Button>
              <Button value="10" onClick={handleLimitClick}>
                10
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <h3 className={styles.textEvents}>How far back do you want to go?</h3>
        <div className={styles.btnGroup}>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button value="1" onClick={handleDaysClick}>
                1
              </Button>
              <Button value="2" onClick={handleDaysClick}>
                2
              </Button>
              <Button value="3" onClick={handleDaysClick}>
                3
              </Button>
              <Button value="4" onClick={handleDaysClick}>
                4
              </Button>
              <Button value="5" onClick={handleDaysClick}>
                5
              </Button>
              <Button value="6" onClick={handleDaysClick}>
                6
              </Button>
              <Button value="7" onClick={handleDaysClick}>
                7
              </Button>
              <Button value="8" onClick={handleDaysClick}>
                8
              </Button>
              <Button value="9" onClick={handleDaysClick}>
                9
              </Button>
              <Button value="10" onClick={handleDaysClick}>
                10
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
      {/* <NaturalEventButtons onClick={(handleLimitClick, handleDaysClick)} /> */}
      {natEvent &&
        natEvent.events
          .filter((natEvent, i) => randomiseImg(natEvent.events).includes(i))
          .map((natEvent, i) => <NaturalEvents natEvent={natEvent} key={i} />)}
    </div>
  );
};

export default NaturalEventTracker;
