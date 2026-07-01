import logo from '../../assets/to-do-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="logo-image-wrapper">
          <img src={logo} alt="logo image" />
        </div>
        <h4 className="logo-text">TaskFlow</h4>
      </div>
    </header>
  );
};

export default Header;
