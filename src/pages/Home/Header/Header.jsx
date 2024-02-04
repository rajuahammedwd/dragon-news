import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  const Date = moment("2024-02-05").format("dddd, MMMM DD YYYY , h:mm:ss a");
  return (
    <div className="space-y-5 mb-5">
      <div className="flex justify-center">
        <img className="max-w-3xl w-full" src={logo} alt="" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-3xl">Journalism Without Fear or Favour</p>
        <p className="text-xl font bold">{Date}</p>
      </div>
      <div className="flex bg-[#F3F3F3]">
        <p className="text-2xl p-3 font-bold bg-[#D72050] ">Latest</p>
        <Marquee className="text-xl">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam numquam pariatur fuga est error unde, quae quidem dolorem cumque praesentium quasi mollitia commodi maxime quibusdam modi ipsa rem laboriosam eius, rerum libero nemo assumenda reprehenderit! Quae, officiis similique cum perspiciatis, accusamus voluptates doloremque doloribus corrupti eum tempora nemo dolorum!
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
