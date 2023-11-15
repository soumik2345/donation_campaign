import React, { useEffect, useState } from "react";
import data from "../data/data";
import DCard from "../components/DCard";

function Donation() {
  const [dData, setDData] = useState([]);
  const [cardV, setCardV] = useState(4);
  const [bVisible, setBVisible] = useState(true);

  const visibleCard = () => {
    const dataL = dData.length;
    setCardV(dataL);
    setBVisible(false)
  };

  useEffect(() => {
    if (localStorage.getItem("_id") == null) {
      return;
    }

    let LsData = JSON.parse(localStorage.getItem("_id"));

    let a = [];

    if (LsData === null) {
      return;
    } else {
      LsData.forEach((ids) => {
        data.forEach((element) => {
          if (element.id === ids) {
            a.push(element);
          }
        });
      });

      setDData(a);
    }
  }, []);

  return (
    <div className="container absolute mx-auto mt-20  h-screen flex flex-col justify-center items-center">
      {dData.length === 0 ? (
        <h1 className="text-center text-2xl font-bold">
          🙏 Please Make a Donation
        </h1>
      ) : (
        <div className=" grid place-items-center gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          {dData.slice(0, cardV).map((item) => (
            <DCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {dData.length > 4 ? (
        <button
          className={`mt-10 p-3 pl-6 pr-6 rounded-md text-white bg-green-600 ${bVisible? 'block' : "hidden"}`}
          onClick={() => {
            visibleCard();
          }}
        >
          See All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Donation;
