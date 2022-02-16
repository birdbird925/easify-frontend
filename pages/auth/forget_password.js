import AuthLayout from "../../components/layouts/auth";
import AuthForgetPasswordForm from "../../components/auth/forgetPasswordForm"

export default function Login() {
  return (
    <AuthLayout heading="Aiyaya why forget password...">
      <AuthForgetPasswordForm />
    </AuthLayout>
  );
}
