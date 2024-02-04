import Navbar from "../Shared/Navbar/Navbar";
import Header from "./Header/Header";
import RightNav from "./RightNav";


const Home = () => {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-5 mt-5">
          {/* This is left side navbar */}
          <div>
            <h2 className="text-3xl">This is Left</h2>
          </div>
          {/* This is middle section */}
          <div className="col-span-3 justify-center items-center text-center">
            <h2 className="text-3xl">This is Home</h2>
          </div>
          {/* This is Right side navbar */}
          <div>
           <RightNav></RightNav>
          </div>
        </div>
      </div>
    );
};

export default Home;