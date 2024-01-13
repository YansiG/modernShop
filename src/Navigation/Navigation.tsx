import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navList">
                <li>
                    <Link to="/">НОВОСТИ</Link>
                </li>
                <li>
                    <Link to="/shop">МАГАЗИН</Link>
                </li>
                {/* <li>
                    <Link to="/contacts">Контакты</Link>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navigation;
