import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confrim your data" />

          <h1>Thank you for your submission</h1>
          <p>You will get an email shortly!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
