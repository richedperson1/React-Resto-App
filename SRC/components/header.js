import { Link } from "react-router-dom";
export const HeaderCreate = () => {
  return (
    <div className="header-items container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Contact us</Link>
          </li>
        </ul>
      </nav>
      <img src="https://shorturl.at/hDFTU"></img>
    </div>
  );
};
