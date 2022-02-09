import logo from "../Assets/img/netflix-logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/css/Header.css";
const Header = () => {
    return(
        <header className="main__menu">
            <div className="container-fluid">
                <nav>
                    <div className="row">
                        <div className="col-7 d-flex align-items-center">
                            <img className="home__logo" src={logo} alt="" />
                            <ul className="menu">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">TV Shows</a>
                                </li>
                                <li>
                                    <a href="#">Movies</a>
                                </li>
                                <li>
                                    <a href="#">Hit</a>
                                </li>
                                <li>
                                    <a href="#">My list</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-5">
                            <i className="fas fa-search"></i>
                            <i className="fas fa-bell"></i>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;