import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

class Calc_Display extends React.Component {
  renderDisplay = () => {
    if (
      this.props.numberValue1 !== undefined &&
      this.props.numberValue2 === null
    ) {
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
      this.props.operations !== null &&
      this.props.submitted === false
    ) {
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue2} {this.props.operations}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.numberValue1[0]}
          </ListGroup.Item>
        </ListGroup>
      );
    } else if (
      this.props.numberValue1[0] !== undefined &&
      this.props.operations !== null &&
      this.props.submitted === true &&
      this.props.prevOperation === null
    ) {
      console.log("lk");
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue2}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.numberValue2}
          </ListGroup.Item>
        </ListGroup>
      );
    } else if (
      this.props.numberValue1[0] !== undefined &&
      this.props.operations !== null &&
      this.props.submitted === true && 
      this.props.prevOperation !== null
    ) {
      console.log("lk");
      return (
        <ListGroup>
          <ListGroup.Item className="min_calc_display text-right mt-1">
            {this.props.numberValue2} {this.props.operations}
          </ListGroup.Item>
          <ListGroup.Item className="calc_display text-right">
            {this.props.numberValue2}
          </ListGroup.Item>
        </ListGroup>
      );
    }
    else {
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
  console.log(state);
  return {
    numberValue1: state.numberValue.stack,
    numberValue2: state.numberValue.stack2,
    operations: state.numberValue.operations,
    submitted: state.numberValue.submitted,
    prevOperation: state.numberValue.prevOperation
  };
};

export default connect(mapStateToProps)(Calc_Display);
