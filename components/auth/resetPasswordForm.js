import React from "react";
import Input from "../shared/input";
import AuthActionFooter from "./actionFooter";

class AuthForgetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      password_err: "",
      confirm_password: "",
      confirm_password_err: "",
      show_password: false,
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
          id="password"
          name="password"
          type={this.state.show_password ? "text" : "password"}
          label="Password"
          required={true}
          value={this.state.password}
          err_msg={this.state.password_err}
          onChange={this.handleChange}
        />
        <Input
          id="confirm_password"
          name="confirm_password"
          type={this.state.show_password ? "text" : "password"}
          label="Password confirmation"
          required={true}
          value={this.state.confirm_password}
          err_msg={this.state.confirm_password_err}
          onChange={this.handleChange}
        />
        <Checkbox
          checked={this.state.show_password}
          label="Show password"
          onClick={this.passwordToggle}
        />/>
        <AuthActionFooter
          link="/auth/login"
          linkLabel="Login instead"
          buttonLabel="Reset password"
          isButtonLoading={this.state.is_loading}
        />
      </form>
    );
  }
}

export default AuthForgetPasswordForm;
