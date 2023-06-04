// import { useParams } from "react-router-dom";

export const PersonNameDetails = () => {
  //   const paramDetails = useParams();
  //   console.log(paramDetails);
  const paramDetails = "Rutvik Jaiswal";
  return (
    <div className="container">
      <h1>Hello this is route from abouts pages</h1>
      <p>Hello , {paramDetails}</p>
    </div>
  );
};
