import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../../src/assets/qZone1.png";
import qzone2 from "../../../src/assets/qZone2.png";
import qzone3 from "../../../src/assets/qZone3.png";
import bg from "../../../src/assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-3xl mb-5">Login With Us</h2>
        <button className="btn btn-outline btn-info w-full font-bold mb-2">
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn btn-outline w-full font-bold">
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>
      <div className="mb-5">
        <h2 className="text-3xl  mb-5">Follow Us On</h2>

        <button className="btn w-full border-t-gray-300 border-gray-300 rounded-none rounded-t-lg py-5">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
        <button className="btn rounded-none border-gray-300 w-full py-5">
          <FaTwitter></FaTwitter>
          Twitter
        </button>
        <button className="btn w-full border-b-gray-300 border-x-gray-300 rounded-none rounded-b-lg">
          <FaInstagram></FaInstagram>
          Instagram
        </button>
      </div>
      <div>
        <h2 className="text-3xl mb-5">Q-Zone</h2>
        <div className="space-y-4 bg-[#F3F3F3] p-2">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
      <div className="background-div  text-center py-5 px-2 text-white space-y-5">
        <h1 className="text-4xl font-bold">Create an Amazing Newspaper</h1>
        <p className="text-xl">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn bg-[#D72050] border-none text-white w-1/2">Learn More</button>
      </div>
    </div>
  );
};

export default RightNav;
