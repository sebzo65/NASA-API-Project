import { useState } from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import styles from "./NaturalEventButtons.module.scss";

const NaturalEventButtons = ({ onClick }) => {
  //State for limit value
  const [limitValue, setLimitValue] = useState("");
  //Handler to keep track of limit value
  //   const handleLimitChange = (e) => {
  //     setLimitValue(e.target.value);
  //   };

  //State for days value
  const [daysValue, setDaysValue] = useState("");
  //Handler to keep track of limit value
  //   const handleDaysChange = (e) => {
  //     setDaysValue(e.target.value);
  //   };

  //Update search state after clicking button
  const handleButtonClick = () => {
    setLimitValue(limitValue);
    setDaysValue(daysValue);
  };

  return (
    <div>
      <h3 className={styles.textEvents}>How many events do you want to see?</h3>
      <div className={styles.btnGroup}>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button value="1" onClick={handleButtonClick}>
              1
            </Button>
            <Button value="2" onClick={handleButtonClick}>
              2
            </Button>
            <Button value="3" onClick={handleButtonClick}>
              3
            </Button>{" "}
            <Button value="4" onClick={handleButtonClick}>
              4
            </Button>
            <Button value="5" onClick={handleButtonClick}>
              5
            </Button>
            <Button value="6" onClick={handleButtonClick}>
              6
            </Button>{" "}
            <Button value="7" onClick={handleButtonClick}>
              7
            </Button>
            <Button value="8" onClick={handleButtonClick}>
              8
            </Button>
            <Button value="9" onClick={handleButtonClick}>
              9
            </Button>
            <Button value="10" onClick={handleButtonClick}>
              10
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <h3 className={styles.textEvents}>How far back do you want to go?</h3>
      <div className={styles.btnGroup}>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button value="1" onClick={handleButtonClick}>
              1
            </Button>
            <Button value="2" onClick={handleButtonClick}>
              2
            </Button>
            <Button value="3" onClick={handleButtonClick}>
              3
            </Button>
            <Button value="4" onClick={handleButtonClick}>
              4
            </Button>{" "}
            <Button value="5" onClick={handleButtonClick}>
              5
            </Button>
            <Button value="6" onClick={handleButtonClick}>
              6
            </Button>
            <Button value="7" onClick={handleButtonClick}>
              7
            </Button>
            <Button value="8" onClick={handleButtonClick}>
              8
            </Button>
            <Button value="9" onClick={handleButtonClick}>
              9
            </Button>
            <Button value="10" onClick={handleButtonClick}>
              10
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default NaturalEventButtons;
