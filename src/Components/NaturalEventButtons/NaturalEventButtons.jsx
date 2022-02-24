import { useState } from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import styles from "./NaturalEventButtons.module.scss";

const NaturalEventButtons = ({ onSubmit }) => {
  const [limit, setLimit] = useState("10");
  const [days, setDays] = useState("10");

  const handleLimitClick = (e) => {
    setLimit(e.target.value);
  };

  const handleDaysClick = (e) => {
    setDays(e.target.value);
  };

  const handleLimitSubmit = () => {
    onSubmit(limit);
  };

  const handleDaysSubmit = () => {
    onSubmit(days);
  };

  return (
    <div>
      <h3 className={styles.textEvents}>How many events do you want to see?</h3>
      <div>
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
      <button onClick={(handleLimitSubmit, handleDaysSubmit)}>Submit</button>
    </div>
  );
};

export default NaturalEventButtons;
