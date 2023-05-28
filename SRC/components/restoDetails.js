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
  console.log(RestaurentDetails);
  return RestaurentDetails.length > 0 ? (
    <>
      <section className="container">
        <div className="restaurants-details shapeDetails">
          <img src={imageURL} />
          <div key={`rating_${RestaurentDetails[0].avgRating}`}>
            <p>Rating : {RestaurentDetails[0].avgRating} 🌟⭐</p>
          </div>
          <div key={`rating_${RestaurentDetails[0].slugs?.city}`}>
            <p>City : {RestaurentDetails[0].slugs?.city.toUpperCase()}</p>
          </div>
          <div key={`rating_${RestaurentDetails[0].costForTwoMessage}`}>
            <p>Price : {RestaurentDetails[0].costForTwoMessage}</p>
          </div>
          <div key={`rating_${RestaurentDetails[0].cuisines.join("_")}`}>
            <p>Cuisines : {RestaurentDetails[0].cuisines.join(", ")}</p>
          </div>

          <div key={`rating_${RestaurentDetails[0].totalRatingsString}`}>
            <p>Review's : {RestaurentDetails[0].totalRatingsString}</p>
          </div>
          <div key={`rating_${RestaurentDetails[0].veg}`}>
            <p>
              Veg/Non-veg :{" "}
              {RestaurentDetails[0].veg == true ? "Veg" : "Non-veg"}
            </p>
          </div>
        </div>
      </section>
    </>
  ) : (
    <ShimmerResta />
  );
};
