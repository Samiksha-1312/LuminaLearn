import "../styles/loginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">

      <h1>Welcome Back!</h1>

      <p>
        Continue your personalized learning journey.
      </p>

      <form>

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button>
          Login
        </button>

      </form>

      <div className="login-links">

        <a href="#">Forgot Password?</a>

        <p>
          Don't have an account?
          <span> Sign Up</span>
        </p>

      </div>

    </div>
  );
}

export default LoginForm;