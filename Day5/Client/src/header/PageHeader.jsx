import { Link } from "react-router-dom";

function PageHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
            <div className="container-fluid">
                {/* Brand Logo */}
                <Link className="navbar-brand fw-bold text-warning" to="/">
                    📚 Library Management
                </Link>

                {/* Mobile Toggle Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Items */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Books List */}
                        <li className="nav-item">
                            <Link className="nav-link active text-light fw-semibold" to="/">
                                📖 Books List
                            </Link>
                        </li>

                        {/* Add Book */}
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-semibold" to="/book/add">
                                ➕ Add Book
                            </Link>
                        </li>

                        {/* Dropdown Menu for More */}
                        <li className="nav-item dropdown">
                            <a 
                                className="nav-link dropdown-toggle text-light fw-semibold" 
                                href="#" 
                                id="navbarDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                📂 More
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><Link className="dropdown-item text-light" to="/categories">📚 Categories</Link></li>
                                <li><Link className="dropdown-item text-light" to="/authors">✍️ Authors</Link></li>
                                <li><hr className="dropdown-divider bg-light" /></li>
                                <li><Link className="dropdown-item text-light" to="/contact">📞 Contact Us</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Search Bar */}
                    <form className="d-flex">
                        <input 
                            className="form-control me-2 border-warning" 
                            type="search" 
                            placeholder="🔍 Search Books..." 
                            aria-label="Search"
                        />
                        <button className="btn btn-warning text-dark fw-bold" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default PageHeader;