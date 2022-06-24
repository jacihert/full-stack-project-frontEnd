import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ showUser }) => {
  return (
    <div className="header">
      <div className="logo">
        <div>Courseology</div>
      </div>
      {showUser === "Courseology Account" && (
        <div className="menubar">
          <Link to="/course-create">+ Create Course</Link>
        </div>
      )}
    </div>
  );
};
export default Header;
