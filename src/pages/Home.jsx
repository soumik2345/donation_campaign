import React, { useEffect, useState } from "react";
import HCard from "../components/HCard";
import data from "../data/data";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [searchValues, setSearchValues] = useState("");

  const allData = () => {
    let Idata = [];
    data.map((item) => {
      Idata.push(item);
    });
    setDatas(Idata);
  };

  const searchData = () => {
    

    
    if (searchValues === "") {
      allData();
      return;
    }

    let searchValue = searchValues[0].toUpperCase() + searchValues.slice(1);

    const filtered = datas.filter((item) => {
      return item.category == searchValue;
    });

    if (filtered === "") {
      allData();
      return;
    }

    let searchDatas = [];

    filtered.map((item) => {
      searchDatas.push(item);
    });

    setDatas(searchDatas);
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <div>
      <div className="h-[37rem] bgImg flex justify-center items-center">
        <div className="absolute flex flex-col justify-center items-center">
          <h1 className=" text-[1rem] font-bold sm:text-4xl">
            I Grow By Helping People In Need
          </h1>
          <div className="flex w-[20rem] sm:w-[32rem] h-12 mt-8">
            <input
              type="text"
              className="w-3/4 bg-white outline-none border-2 p-5 rounded-l-lg"
              placeholder="Search here...."
              onChange={(e) => setSearchValues(e.target.value)}
              value={searchValues}
            />
            <input
              type="button"
              value="Search"
              className="w-1/4 bg-[#FF444A] text-white rounded-r-lg"
              onClick={() => searchData()}
            />
          </div>
        </div>
      </div>

      <div className=" container mx-auto mt-20 grid place-items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {datas.map((item, index) => (
          <HCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
