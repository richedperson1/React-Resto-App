import { Link } from "react-router-dom";
import "./about.css";
import { Outlet } from "react-router-dom";

export const AboutPageMain = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const AboutPageOutlet = () => {
  return (
    <>
      <div className="aboutUs" key="aboutPage">
        {/* <HeaderCreate /> */}
        <header className="container">
          <h1>About Our Restaurant</h1>
        </header>
        <main className="container">
          <h2>Welcome to Our Culinary Experience</h2>
          <p>
            Indulge in a gastronomic journey at{" "}
            <span className="highlight">Restaurant Name</span> where we create
            exceptional dishes that combine exquisite flavors and artistic
            presentation. We are committed to providing an unforgettable dining
            experience for every guest.
          </p>

          <h2>Our Story</h2>
          <p>
            Established in <span className="highlight">year</span>,{" "}
            <span className="highlight">Restaurant Name</span> has been at the
            forefront of culinary innovation. Our humble beginnings as a
            family-owned restaurant have evolved into a renowned destination,
            known for its passion for culinary excellence.
          </p>

          <h2>Our Philosophy</h2>
          <p>
            At <span className="highlight">Restaurant Name</span>, we believe in
            celebrating the finest ingredients sourced locally and globally. Our
            culinary team, led by award-winning chefs, crafts each dish with
            meticulous attention to detail, resulting in a harmonious blend of
            flavors that tantalize the senses.
          </p>

          <h2>Our Team</h2>
          <p className="quote">
            "Our team is driven by a shared passion for culinary artistry and a
            dedication to creating extraordinary dining experiences."
          </p>

          <div className="team-container" key={"main-div-id-1"}>
            <div className="team-member" key={"div-id-1"}>
              <h3>
                <Link to="personName/Rutvik">John Smith</Link>
              </h3>
              <p>Head Chef</p>
            </div>

            <div className="team-member" key={"div-id-2"}>
              <h3>
                <Link to="personName">Alice Johnson</Link>
              </h3>
              <p>Sous Chef</p>
            </div>

            <div className="team-member" key={"div-id-3"}>
              <h3>Michael Brown</h3>
              <p>Pastry Chef</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
