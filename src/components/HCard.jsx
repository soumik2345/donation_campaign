import React from 'react'
import { Link } from 'react-router-dom'

const HCard = ({item}) => {

    const {id,title,img,category,color} = item;
  return (
    <Link to={`/details/${id}`} className={`w-[100%] min-h-72 h-auto rounded-md`}
    style={{backgroundColor:item.color.two}}>
        <img src={`src${img}`} alt="img" className='w-full'/>
        <div className="p-3">
          
        <span className={`pl-3 pr-3 rounded-sm`} style={{backgroundColor:item.color.three,color:item.color.one}}>{category}</span>
        <p className='text-lg font-bold' style={{color:item.color.one}}>{item.title}</p>
        </div>
    </Link>
  )
}

export default HCard