import React from "react";
import Input from "../shared/input";
import AuthActionFooter from "./actionFooter";

class AuthLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      name_err: "",
      email: "",
      email_err: "",
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
          id="name"
          name="name"
          label="Name"
          required={true}
          value={this.state.name}
          err_msg={this.state.name_err}
          onChange={this.handleChange}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email address"
          required={true}
          value={this.state.email}
          err_msg={this.state.email_err}
          onChange={this.handleChange}
        />
        <AuthActionFooter
          link="/auth/login"
          linkLabel="Login instead"
          buttonLabel={`Join ${process.env.NEXT_PUBLIC_APP_NAME}`}
          isButtonLoading={this.state.is_loading}
        />
      </form>
    );
  }
}

export default AuthLoginForm;
