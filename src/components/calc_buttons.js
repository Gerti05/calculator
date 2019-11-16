import React from "react";
import { connect } from "react-redux";
import { fetchNumberValue } from "../actions";
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
      e.target.value === "." && this.props.numberValue.indexOf(".") === -1
    ) {
      this.props.fetchNumberValue(e.target.value);
    } else if (this.props.numberValue.length < 25 && e.target.value !== ".") {
      this.props.fetchNumberValue(e.target.value);
    }
  };

  buttonsDisplay = () => {
    return (
      <div>
        {console.log(this.props.numberValue)}
        <ButtonToolbar>
          <Button
            className="big_button buttons_position mb-1 mt-1"
            size="lg"
            variant="danger"
            onClick={this.handleClear}
            value=""
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
            onClick={this.handleSymbol}
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
            onClick={this.handleSymbol}
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
            onClick={this.handleSymbol}
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
            onClick={this.handleSymbol}
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
            value="~"
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
  console.log(state.numberValue.stack[0]);
  return {
    numberValue: state.numberValue.stack[0]
  };
};

export default connect(mapStateToProps, {
  fetchNumberValue
})(Calc_Buttons);
