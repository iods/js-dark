import React from "react";
import './card.css';

const Card = ({ title, description }) => {

  return (
    <>
      <div className="mx-auto my-8 max-w-sm rounded shadow-lg card">
        <img alt="valley" className="w-full" src="https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="px-6 py-2">
          <div className="mb-2 font-bold text-xl card-title">{title}</div>
          <p className="text-gray-800 text-base card-description">{description}</p>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block mr-2 px-3 py-1 text-sm font-semibold text-gray-500 card-tag">#One</span>
          <span className="inline-block mr-2 px-3 py-1 text-sm font-semibold text-gray-500 card-tag">#Two</span>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-500 card-tag">#Three</span>
        </div>
      </div>
    </>
  )

}

export default Card;
