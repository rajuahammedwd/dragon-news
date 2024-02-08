import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
      
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password  = form.password.value
      signInUser(email, password)
        .then(res => {
          const loggedUser = res.user
          console.log(loggedUser)
      })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-[700px] mt-20 bg-white p-10">
        <h2 className="text-center text-3xl font-bold pt-5 border-b-2 pb-5">
          Login Your Account
        </h2>
        <div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input  bg-[#F3F3F3]"
                required
              />
              <label className="label">{/* Error Showing Place */}</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#403F3F] text-white font-bold">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center">
            <Link to="/register" className="text-center">
              {" "}
              Dont’t Have An Account ?{" "}
              <span className="text-[#FF8C47] font-bold">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
