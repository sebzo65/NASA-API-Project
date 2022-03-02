import { useState } from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import styles from "./NaturalEventButtons.module.scss";

const NaturalEventButtons = ({ onSubmit }) => {
  const [days, setDays] = useState("10");

  const handleClick = (e) => {
    setDays(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(days);
  };

  return (
    <div>
      <h3 className={styles.textEvents}>
        Choose number of days for which you wish to see the latest natural
        disasters
      </h3>
      <div>
        <div className={styles.btnGroup}>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button value="1" onClick={handleClick}>
                1
              </Button>
              <Button value="2" onClick={handleClick}>
                2
              </Button>
              <Button value="3" onClick={handleClick}>
                3
              </Button>
              <Button value="4" onClick={handleClick}>
                4
              </Button>
              <Button value="5" onClick={handleClick}>
                5
              </Button>
              <Button value="6" onClick={handleClick}>
                6
              </Button>
              <Button value="7" onClick={handleClick}>
                7
              </Button>
              <Button value="8" onClick={handleClick}>
                8
              </Button>
              <Button value="9" onClick={handleClick}>
                9
              </Button>
              <Button value="10" onClick={handleClick}>
                10
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <Button
            onClick={handleSubmit}
            className={styles.button}
            variant="secondary"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NaturalEventButtons;
