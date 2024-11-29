import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Header.css'; 


export function Header() {
  return (
    <header className="header">
      <div className="hero">
        <div className="linha">
        <h1 className="Logo">MyFinance</h1>

       
      </div>
      </div>
      <nav>
        <ul className="ul">
          <div className="arrumar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Transacoes">Transações</Link></li>

          </div>

          <div className="login">
            <li className="no-list-style-0">
              <FontAwesomeIcon icon={faUser} />
              <Link to="/Register" className="more-link-0">Sign in</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
