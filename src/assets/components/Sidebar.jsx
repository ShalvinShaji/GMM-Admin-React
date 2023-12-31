import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faDashboard,
  faHouseMedical,
  faImage,
  faNewspaper,
  faSuitcase,
  faUserDoctor,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      <aside id="sidebar" className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/" className=" nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faDashboard} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Governing-Board"
              className=" nav-link"
              onClick={closeSidebar}
            >
              <FontAwesomeIcon icon={faUserGroup} />
              <span>Governing board</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Departments" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Departments</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Facilities" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faHouseMedical} />
              <span>Facilities</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Doctors" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faUserDoctor} />
              <span>Doctors</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Careers" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faSuitcase} />
              <span>Careers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Gallery" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faImage} />
              <span>Gallery</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Recent-News" className="nav-link" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faNewspaper} />
              <span>Recent News</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
