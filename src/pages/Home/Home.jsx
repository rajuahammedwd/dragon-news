import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "./Header/Header";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import SingleNews from "../../components/SingleNews";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect((() => {
    fetch("news.json")
      .then((res) => res.json())
    .then(res=>setNews(res))
  }), [])
  console.log(news)
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-5 mt-5 gap-5">
          {/* This is left side navbar */}
          <div>
            <LeftNav></LeftNav>
          </div>
          {/* This is middle section */}
          <div className="col-span-3 justify-center items-center">
            <h2 className="text-xl font-bold mb-5">Dragon News Home</h2>
            <div>
              {news.map((singleNews) => (
                <SingleNews
                  key={singleNews.id}
                  singleNews={singleNews}
                ></SingleNews>
              ))}
            </div>
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