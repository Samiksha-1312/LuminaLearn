import BrandingPanel from "../components/BrandingPanel";
import LoginForm from "../components/LoginForm";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <BrandingPanel />
      <LoginForm />
    </div>
  );
}

export default Login;