import "./navbar.css";
import profileImage from "../../assets/profile.png";
function Navbar() {
  return (
    <div className="navbar-container">
      <h3 className="logo-text">
        THE &nbsp;<span>PRODUCT</span>&nbsp;PLATFORM
      </h3>
      <div className="navbar-menu">
        <p>
          Learn
          <svg
            width="21"
            height="7"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.7395 2L10.4034 10L18.3698 2"
              stroke="#FEFEFE"
              strokeOpacity="0.5"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </p>
        <p>Practice <svg
            width="21"
            height="7"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.7395 2L10.4034 10L18.3698 2"
              stroke="#FEFEFE"
              strokeOpacity="0.5"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg></p>
        <img src={profileImage} alt="profile-img" />
      </div>
    </div>
  );
}

export default Navbar;
