import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategories] = useState(null);
    useEffect((() => {
        fetch("categories.json")
          .then((res) => res.json())
          .then((res) => setCategories(res));
    }), [])
    return (
      <div>
        <div>
          <h2 className="font-bold text-xl mb-5">All Caterogy</h2>
        </div>
        <div className="ml-5">
          {categories?.map((category) => (
            <Link to={`/category/${category.id}`} className="block mb-5 font-bold" key={category.id}>{category.name}</Link>
          ))}
        </div>
      </div>
    );
};

export default LeftNav;