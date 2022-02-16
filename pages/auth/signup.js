import AuthLayout from "../../components/layouts/auth";
import AuthRegisterForm from "../../components/auth/registerForm"

export default function Signup() {
  return (
    <AuthLayout heading={`Lets get start to "${process.env.NEXT_PUBLIC_APP_NAME}"`}>
      <AuthRegisterForm />
    </AuthLayout>
  );
}
