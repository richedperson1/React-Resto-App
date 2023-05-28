import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "../notFound";
import { CreateSingleCard } from "./layOut";
import { NotFound } from "../notFound";
/**
 * The function makes an API call to Swiggy's restaurant listing endpoint and returns the JSON data.
 * @returns The function `swiggyAPICall` is returning a Promise that resolves to the JSON data fetched
 * from the Swiggy API endpoint.
 */

let urlData =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const swiggyAPICall = async () => {
  const swiggyURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&page_type=DESKTOP_WEB_LISTING";
  const swiggyData = await fetch(swiggyURL);
  const swiggyJson = await swiggyData.json();
  // console.log(swiggyJson);
  return swiggyJson;
};

const restoDetailsEvent = (restDetail) => {
  // console.log(restDetail);
};

/**
 * The function filters an array of restaurant details based on a search text input.
 * @param searchTxt - a string that represents the text to be searched for in the restoDetails array.
 * @param restoDetails - It is an array of objects containing details of different restaurants. Each
 * object has properties such as name, address, phone number, etc.
 * @returns The function `selectedElement` returns the result of the inner function `secondSelect()`,
 * which is an array of objects from `restoDetails` that have a `name` property containing the
 * `searchTxt` string (case-insensitive).
 */

function selectedElement(searchTxt, restoDetails) {
  function secondSelect() {
    const elementFound = restoDetails.filter((val) => {
      return val.data.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    return elementFound;
  }
  return secondSelect();
}

export function BodyTags() {
  const [searchTxt, etseachTxt] = useState();

  const [restaurantList, setResto] = useState([]);

  const [restoFinal, setRestoFinal] = useState(restaurantList);

  useEffect(() => {
    const swiggyCall = swiggyAPICall();
    swiggyCall.then((val) => {
      const apiData = val?.data?.cards[2]?.data.data.cards;
      setResto(apiData);
      setRestoFinal(apiData);
    });
  }, []);

  const restoLengthBool = restaurantList.length > 0 ? true : false;

  /* `console.log(restoFinal);` is logging the value of the `restoFinal` state variable to the console.
  It is used for debugging purposes to check the current value of `restoFinal` at a particular point
  in time. */
  return restoFinal?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container container" key={"search-container-main"}>
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            const searchInput = e.target.value;
            etseachTxt(searchInput);
            if (searchInput != "") {
              updatedList = selectedElement(searchInput, restoFinal);
              setResto(updatedList);
            } else {
              setResto(restoFinal);
            }
          }}
        />
        <button
          className="searchBar pointer"
          onClick={(e) => {
            const foundEle = selectedElement(searchTxt, restaurantList);
            if (typeof foundEle == "object") {
              setResto(foundEle);
            }
          }}
        >
          Search...
        </button>
        <button
          className="searchBar pointer"
          onClick={() => {
            etseachTxt("");
            setResto(restoFinal);
          }}
        >
          ❌
        </button>
      </div>
      <div key={"search-container-heading"}>
        <h1 className="dish-heading">Dish Menu</h1>
      </div>
      <div
        className="dish-containers container"
        key={"search-container-restocard"}
      >
        {restoLengthBool ? (
          restaurantList.map((val) => {
            return (
              <Link
                to={`/resto/${val?.data?.id}`}
                className="dish-card"
                key={val?.data?.id + "main-div"}
                onClick={() => {
                  restoDetailsEvent(val);
                }}
              >
                <CreateSingleCard {...val?.data} />
              </Link>
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
