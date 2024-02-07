import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { GrFormView } from "react-icons/gr";
const SingleNews = ({ singleNews }) => {
  console.log(singleNews);
  const { title, details, author, image_url, rating, total_view } = singleNews;

  return (
    <div className="mb-5">
      {/* Publisher Details */}
      <div className="flex justify-between bg-[#F3F3F3] p-5">
        <div className="flex items-center space-x-3">
          <div>
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={author?.img}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{author.name}</h1>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 font-bold text-2xl">
          <span>
            <FaRegBookmark></FaRegBookmark>
          </span>
          <span>
            <CiShare2 />
          </span>
        </div>
      </div>
      {/* News */}
      <div className="px-7">
        <h2 className="font-bold text-2xl">{title}</h2>
        <img className="w-full" src={image_url} alt="" />
        <p className="text-xl mb-3">
          {details}
          <br></br>
          <button className="text-[#FF8C47] font-bold">Read More</button>
        </p>
      </div>
      {/* News Footer */}
      <div className="flex justify-between px-10 py-3 border-t-2">
        <p>{rating.number}</p>
        <p className="flex items-center">
          <span>
            <GrFormView className="mr-2 text-3xl"/>
          </span>
          {total_view}
        </p>
      </div>
    </div>
  );
};

export default SingleNews;
