import { Link } from "react-router-dom";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <div className="content-header">
      <div className="content-header-left">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="Logo baby sorteios"
          />
        </Link>
      </div>

      <div className="content-header-center">
        <a href="#" className="links">
          Como participar
        </a>
        <a href="#" className="links">
          Termos de uso
        </a>
      </div>
      <div className="content-header-right">
        <a href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 24L6 24"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 15L6 15"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 5L6 5"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
