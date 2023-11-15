import React from 'react'
import { Link } from 'react-router-dom'

const DCard = ({item}) => {
  return (
    <>
    
<div className="flex items-center rounded-lg  max-w-xl " style={{backgroundColor:item.color.two}}>
    <img className="object-cover w-40 rounded-t-lg h-full md:h-auto md:w-48 sm:h-96 sm:w-full  md:rounded-s-lg" src={`src${item.img}`} alt="" />
    <div className="p-4 ">
        <span className='pl-3 pr-3 rounded-sm w-auto' style={{backgroundColor:item.color.three,color:item.color.one}}>{item.category}</span>
        <h5 className="mb-2 text-sm sm:text-2xl font-bold ">Noteworthy technology acquisitions 2021</h5>
        <Link to={`/details/${item.id}`} className='p-2 text-white rounded-lg font-medium' style={{backgroundColor:item.color.one
        }}>View Details</Link>
    </div>
</div>

    </>
  )
}

export default DCard