import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="CartBliss Logo" />
            </div>
            <div className="navbarTitle">
                <h1>CartBliss</h1>
            </div>
            <div className="navbar-links">
                <Link to="/">Shop</Link>
                <Link to="/purchased-items">Purchases</Link>
                <Link to="/checkout">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
        </div>
    );
};
