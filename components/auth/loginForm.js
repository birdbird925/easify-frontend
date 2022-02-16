import React from "react";
import Link from "next/link";
import Input from "../shared/input";
import Checkbox from "../shared/checkbox";
import AuthActionFooter from "./actionFooter";

class AuthLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      username_err: "",
      password: "",
      password_err: "",
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

  passwordToggle = () => {
    this.setState({ show_password: !this.state.show_password });
  };

  validation = () => {
    alert("validation")
  }

  render() {
    return (
      <form>
        <Input
          id="username"
          name="username"
          label="Email address"
          required={true}
          value={this.state.username}
          err_msg={this.state.username_err}
          onChange={this.handleChange}
        />
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
        <Checkbox
          checked={this.state.show_password}
          label="Show password"
          onClick={this.passwordToggle}
        />
        <AuthActionFooter
          link="/auth/forget_password"
          linkLabel="Forget Password?"
          buttonLabel="Sign In"
          isButtonLoading={this.state.is_loading}
        >
          Don't have an account yet?
          <Link href="/auth/signup">
            <a className="text-primary hover:text-primaryHover ml-2">
              Register here
            </a>
          </Link>
        </AuthActionFooter>
      </form>
    );
  }
}

export default AuthLoginForm;
