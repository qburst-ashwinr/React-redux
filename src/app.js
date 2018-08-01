import React from "react";
import { connect } from "react-redux";
import { formHandler } from "./action";
import Inputform from "./components/form";
import Submitbutton from "./components/button";

const mapStateToProps = state => ({
  name: state.handle.name,
  age: state.handle.age,
  address: state.handle.address
});

const mapDispatchToProps = dispatch => ({
  handleForm: () =>
    dispatch(
      formHandler(
        document.getElementById("nameId").value,
        document.getElementById("ageId").value,
        document.getElementById("addressId").value
      )
    )
});

class Example extends React.Component {
  render() {
    return (
      <div className="mainClass">
        <h2>Enter Your Details</h2>
        <Inputform />
        <br />
        <Submitbutton onClick={this.props.handleForm} />
        <br />
        <div className="outputClass">
          {this.props.name}
          <br />
          {this.props.age}
          <br />
          {this.props.address}
          <br />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
