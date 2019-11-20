import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

class Calc_Display extends React.Component {
  renderDisplay = () => {
    if (
      this.props.numberValue1 !== undefined &&
      this.props.submit === undefined &&
      this.props.numberValue2 === undefined
    ) {
      console.log("oopp")
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
        </ListGroup>
      );
    } else if (
      this.props.numberValue1[0] !== undefined &&
      this.props.submit[0] !== undefined &&
      this.props.numberValue2[0] !== undefined
    ) {
      console.log("oop")
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.submit}
          </ListGroup.Item>
        </ListGroup>
      );
    } else {
      console.log(this.props.submit[0])
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
        </ListGroup>
      );
    }
  };

  render() {
    return <div>{this.renderDisplay()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    numberValue1: state.numberValue.stack,
    submit: state.numberValue.submitted,
    numberValue2: state.numberValue.stack2
  };
};

export default connect(mapStateToProps)(Calc_Display);
