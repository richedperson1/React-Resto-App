import { useParams } from "react-router-dom";

export const PersonNameDetailDyanamic = () => {
  const { PersonName } = useParams();
  //   console.log(paramDetails);
  //   const PersonName = "jaiswal";
  return (
    <div className="container">
      <h1>Hello this is route from abouts pages</h1>
      <p>Hello , {PersonName}</p>
    </div>
  );
};

export const PersonNameDetails = () => {
  const paramDetails = "Rutvik Jaiswal";
  return (
    <div className="container">
      <h1>Hello this is route from abouts pages</h1>
      <p>Hello , {paramDetails}</p>
    </div>
  );
};
