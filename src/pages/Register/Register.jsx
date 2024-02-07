import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name= form.name.value;
      const photo= form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,photo,email, password);
    };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto w-[700px] mt-20 bg-white p-10">
        <h2 className="text-center text-3xl font-bold pt-5 border-b-2 pb-5">
          Register Your Account
        </h2>
        <div>
          <form onSubmit={handleRegister} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo URL"
                className="input bg-[#F3F3F3]"
                required
              />
            </div>
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
            <Link to="/login" className="text-center">
              {" "}
              Dont’t Have An Account ?{" "}
              <span className="text-[#FF8C47] font-bold">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
