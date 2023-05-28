const urlData =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const FooterElement = () => {
  return (
    <div className="footer-section" key={"footerSection"}>
      <p className="footer-owner" key={"footer-name-owner"}>
        Created by "rutvikjaiswal195@gmail.com"
      </p>
      <p key={"footer-name-Element"}>Using React</p>
    </div>
  );
};

export function CreateSingleCard({
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
