import React from "react";
import { connect } from "react-redux";
import { ListGroup } from "react-bootstrap";

class Calc_Display extends React.Component {
  renderDisplay = () => {
    return (
      <ListGroup>
        <ListGroup.Item className="min_calc_display text-right mt-1">
          {this.props.numberValue[0]}
        </ListGroup.Item>
        <ListGroup.Item className="calc_display text-right">
          {this.props.numberValue[0]}
        </ListGroup.Item>
      </ListGroup>
    );
  };

  render() {
    return <div>{this.renderDisplay()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    numberValue: state.numberValue.stack
  };
};

export default connect(mapStateToProps)(Calc_Display);
