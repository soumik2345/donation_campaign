import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import {toast} from 'react-hot-toast'

function Details() {
  const { id } = useParams();

  const filtered = data.filter((item) => {
    return item.id == id;
  });

  const donate = (id) =>{


    if(localStorage.getItem("_id")==null){
      localStorage.setItem("_id",'[]')
    }

    let oldData = JSON.parse(localStorage.getItem("_id"));
    const isExite = oldData.find((Lid)=>Lid === id);

    if(isExite){
      toast("You are already donate in this",{
        icon:"👍​",
      });
    }
    else{
      oldData.push(id);
      localStorage.setItem("_id",JSON.stringify(oldData))
      const myPromise = new Promise(resolve => setTimeout(resolve, 1000));

      toast.promise(myPromise, {
        loading: 'Loading...',
        success: 'donate succesfull',
        error: 'Something went worng',
      });;
    }
   
  }


  return (
    <div>
      {filtered.map((item) => (
        <div className="container mx-auto absolute mt-32" key={item.id}>
          <div className="flex justify-center flex-col items-center">

            <div className="w-[20rem] md:w-[40rem] sm:w-[70rem] relative">
            <img src={`../../src/assets/Rectangle 4288.png`} className="w-[70rem]" alt={item.img}/>
            <div className="bg-[#0000006a] h-16 w-full absolute bottom-0 p-3">
              <button onClick={()=>donate(item.id)} className="pl-3 pr-3 p-2 bg-[#FF444A] text-white rounded-md">Donate ${item.price}</button></div>
            </div>
           <div className="w-[20rem] md:w-[40rem] sm:w-[70rem] mt-5">
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-1xl mt-5">{item.dec}</p>
           </div>
          </div>

          
        </div>
      ))}
    </div>
  );
}

export default Details;
