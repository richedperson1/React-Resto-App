// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { restaurantList as restoEle } from "./content";
import { NotFound } from "./notFound";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

let urlData =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const HeaderCreate = () => {
  return (
    <div className="header-items">
      <nav>
        <ul>
          <li>HOme</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <img src="https://shorturl.at/hDFTU"></img>
    </div>
  );
};

// Restaurant card component: Image, name, cuisine

function CreateSingleCard({
  name,
  address,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
  id,
}) {
  const imageURL = urlData + cloudinaryImageId;
  return (
    <>
      <img src={imageURL} key={id + "image"} />
      <p key={id + "_name"}>name : {name} </p>
      <p key={id + "_add"}>Address : {address}</p>
      <p key={id + "_para"}>Price : {costForTwoString}</p>
      <p key={id + "_rating"}>Rating : {avgRating} 🌟</p>
    </>
  );
}

function selectedElement(searchTxt, restoDetails) {
  function secondSelect() {
    const elementFound = restoDetails.filter((val) => {
      return val.data.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    return elementFound;
  }
  return secondSelect();
}

const swiggyAPICall = async () => {
  const swiggyURL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  const swiggyData = await fetch(swiggyURL);
  const swiggyJson = await swiggyData.json();
  return swiggyJson;
};

function BodyTags() {
  const [searchTxt, etseachTxt] = useState();

  const [restaurantList, setResto] = useState(restoEle);

  const [restoFinal, setRestoFinal] = useState(restaurantList);

  useEffect(() => {
    // console.log("Staring call", restoFinal);
    const swiggyCall = swiggyAPICall();
    swiggyCall.then((val) => {
      const apiData = val?.data?.cards[2]?.data.data.cards;
      setResto(apiData);
      setRestoFinal(apiData);
    });
  }, []);

  const restoLengthBool = restaurantList.length > 0 ? true : false;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchTxt}
          onChange={(e) => {
            const searchInput = e.target.value;
            etseachTxt(searchInput);
            if (searchInput != "") {
              updatedList = selectedElement(searchInput, restoEle);
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
            console.log("Modified list", restaurantList);
            console.log("Second resto list", restoFinal);
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

      <div className="dish-containers">
        {restoLengthBool ? (
          restaurantList.map((val) => {
            return (
              <div className="dish-card" key={val.data.id + "main-div"}>
                <CreateSingleCard {...val.data} />
              </div>
            );
          })
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}

const FooterElement = () => {
  return (
    <div className="footer-section">
      <p>Created by "rutvikjaiswal195@gmail.com"</p>
      <p>Using React</p>
    </div>
  );
};
const Footer = () => {
  return FooterElement();
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderCreate />
      <BodyTags />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root-card"));
root.render(<AppLayout />);
