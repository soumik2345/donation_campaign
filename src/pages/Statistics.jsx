import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import data from "../data/data";

function Statistics() {
  const [total, setTotal] = useState(0);
  const [donet, setDonet] = useState(0);

  useEffect(() => {
    let LsData = JSON.parse(localStorage.getItem("_id"));

    if (LsData === null) {
      setTotal(data.length);
    }

    if (LsData !== null) {
      setDonet(LsData.length);
      if (LsData.length === data.length) {
        setTotal(0);
      } else {
        setTotal(data.length);
      }
    }
  }, []);

  return (
    <div className="container absolute mx-auto mt-20  h-screen flex flex-col justify-center items-center">
      <div className="w-52 sm:w-96">
        <PieChart
          data={[
            { title: "Total", value: total, color: "#FF444A" },
            { title: "Donate", value: donet, color: "#00C49F" },
          ]}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          
        />
      </div>
      <div className="mt-10">
        <div className="flex text-center justify-center items-center"><p className="text-xl mr-5">Your Donation</p> <div className="w-36 h-5 bg-[#00C49F]"></div></div>
        <div className="flex text-center justify-center items-center"><p className="text-xl mr-5">Total Donation</p> <div className="w-36 h-5 bg-[#FF444A]"></div></div>
        
      </div>
    </div>
  );
}

export default Statistics;
