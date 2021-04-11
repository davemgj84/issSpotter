import logo from "../assets/ISS.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <h1>I.S.S. SPOTTER</h1>
    </div>
  );
};

export default Header;
