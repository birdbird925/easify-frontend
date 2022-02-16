import AuthLayout from "../../components/layouts/auth";
import AuthLoginForm from "../../components/auth/loginForm"

export default function Login() {
  return (
    <AuthLayout heading={`Sign in to continue to ${process.env.NEXT_PUBLIC_APP_NAME}`}>
      <AuthLoginForm />
    </AuthLayout>
  );
}
