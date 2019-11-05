import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackspace,
  faTimes,
  faDivide,
  faMinus,
  faPlus,
  faEquals
} from "@fortawesome/free-solid-svg-icons";

class Calc_Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <ButtonToolbar>
          <Button
            className="big_button buttons_position mb-1 mt-1"
            size="lg"
            variant="danger"
          >
            AC
          </Button>
          <Button
            className="regular_button buttons_position mb-1 mt-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faBackspace} />
          </Button>
          <Button
            className="regular_button buttons_position mb-1 mt-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faDivide} size="xs"/>
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            7
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            8
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            9
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faTimes} size="xs"/>
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            4
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            5
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            6
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faMinus} size="xs"/>
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            1
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            2
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            3
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faPlus} size="xs"/>
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="dash_button regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faPlus} size="xs"/>/<FontAwesomeIcon icon={faMinus} size="xs"/>
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
          >
            0
          </Button>
          <Button
            className="period_button regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
          >
            .
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="success"
          >
            <FontAwesomeIcon icon={faEquals} size="xs"/>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Calc_Buttons;
