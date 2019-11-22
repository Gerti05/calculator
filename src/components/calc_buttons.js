import React from "react";
import { connect } from "react-redux";
import {
  fetchNumberValue,
  fetchNegative,
  fetchClear,
  fetchBackspace,
  fetchSubmit,
  fetchOperations
} from "../actions";
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
  handleClick = e => {
    if (
      this.props.numberValue.length < 25 &&
      e.target.value === "." &&
      this.props.numberValue.indexOf(".") === -1
    ) {
      console.log("yes");
      this.props.fetchNumberValue(e.target.value);
    } else if (this.props.numberValue.length < 25 && e.target.value !== ".") {
      this.props.fetchNumberValue(e.target.value);
    }
  };

  handleNegative = () => {
    if (this.props.numberValue !== "0") {
      this.props.fetchNegative();
    }
  };

  handleClear = () => {
    this.props.fetchClear();
  };

  handleBackspace = () => {
    this.props.fetchBackspace();
  };

  handleSubmit = () => {
    this.props.fetchSubmit();
  }

  handleOperations = e => {
    this.props.fetchOperations(e.currentTarget.value)
  }

  buttonsDisplay = () => {
    return (
      <div>
        <ButtonToolbar>
          <Button
            className="big_button buttons_position mb-1 mt-1"
            size="lg"
            variant="danger"
            onClick={this.handleClear}
          >
            AC
          </Button>
          <Button
            className="regular_button buttons_position mb-1 mt-1"
            size="lg"
            variant="secondary"
            onClick={this.handleBackspace}
          >
            <FontAwesomeIcon icon={faBackspace} />
          </Button>
          <Button
            className="regular_button buttons_position mb-1 mt-1"
            size="lg"
            variant="secondary"
            onClick={this.handleOperations}
            value="/"
          >
            <FontAwesomeIcon icon={faDivide} size="xs" />
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="7"
          >
            7
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="8"
          >
            8
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="9"
          >
            9
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
            onClick={this.handleOperations}
            value="*"
          >
            <FontAwesomeIcon icon={faTimes} size="xs" />
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="4"
          >
            4
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="5"
          >
            5
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="6"
          >
            6
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
            onClick={this.handleOperations}
            value="-"
          >
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="1"
          >
            1
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="2"
          >
            2
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="3"
          >
            3
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
            onClick={this.handleOperations}
            value="+"
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className="dash_button regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
            onClick={this.handleNegative}
            value="+/-"
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />/
            <FontAwesomeIcon icon={faMinus} size="xs" />
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="dark"
            onClick={this.handleClick}
            value="0"
          >
            0
          </Button>
          <Button
            className="period_button regular_button buttons_position mb-1"
            size="lg"
            variant="secondary"
            onClick={this.handleClick}
            value="."
          >
            .
          </Button>
          <Button
            className="regular_button buttons_position mb-1"
            size="lg"
            variant="success"
            onClick={this.handleSubmit}
            value="="
          >
            <FontAwesomeIcon icon={faEquals} size="xs" />
          </Button>
        </ButtonToolbar>
      </div>
    );
  };

  render() {
    return <div>{this.buttonsDisplay()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    numberValue: state.numberValue.stack[0]
  };
};

export default connect(mapStateToProps, {
  fetchNumberValue,
  fetchNegative,
  fetchClear,
  fetchBackspace,
  fetchSubmit,
  fetchOperations
})(Calc_Buttons);
