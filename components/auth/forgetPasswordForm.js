import React from "react";
import Input from "../shared/input";
import AuthActionFooter from "./actionFooter";

class AuthForgetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      username_err: "",
      is_loading: false,
      is_error: false,
      err_msg: {},
    };
  }

  handleChange = (e) => {
    if (e.target.name) {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ [e.currentTarget.name]: "" });
    }
  };

  render() {
    return (
      <form>
        <Input
          id="username"
          name="username"
          label="Email or Phone number"
          required={true}
          value={this.state.username}
          err_msg={this.state.username_err}
          onChange={this.handleChange}
        />
        <AuthActionFooter
          link="/auth/login"
          linkLabel="Login instead"
          buttonLabel="Request reset"
          isButtonLoading={this.state.is_loading}
        />
      </form>
    );
  }
}

export default AuthForgetPasswordForm;
