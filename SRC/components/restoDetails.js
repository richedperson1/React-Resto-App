import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { UrlData } from "../content";

import "./restoDetails.css";

const restarentURL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9728896&lng=73.8229516&restaurantId=";

const ShimmerResta = () => {
  return (
    <>
      <div className="shimmerResto shapeDetails"></div>
    </>
  );
};

async function getRestarentDetails(restarentID) {
  const selectResta = restarentURL + restarentID;
  const restoData = await fetch(selectResta);
  const restoDataJson = await restoData.json();
  return restoDataJson;
}
export const RestoMenu = () => {
  const { id } = useParams();
  const [RestaurentDetails, setRestaurentDetails] = useState([]);
  useEffect(() => {
    const dataResta = getRestarentDetails(id);
    dataResta.then((val) => {
      setRestaurentDetails([val?.data?.cards[0].card.card.info]);
    });
  }, []);

  const imageURL = UrlData + RestaurentDetails[0]?.cloudinaryImageId;
  console.log(RestaurentDetails[0]?.cloudinaryImageId);
  return RestaurentDetails.length > 0 ? (
    <>
      <section className="container">
        <div className="restaurants-details shapeDetails">
          <img src={imageURL} />
          <div>
            <p>Rating : {RestaurentDetails[0].avgRating} 🌟⭐</p>
          </div>
          <div>
            <p>City : {RestaurentDetails[0].slugs?.city.toUpperCase()}</p>
          </div>
        </div>
      </section>
    </>
  ) : (
    <ShimmerResta />
  );
};
