import { Link } from "react-router-dom";

function PageFooter() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    
                    {/* 📚 About Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3 fw-bold text-warning">📖 Library Management System</h5>
                        <p className="text-secondary">
                            Manage books, authors, and readers efficiently with our digital library system.
                        </p>
                    </div>

                    {/* 🔗 Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3 fw-bold text-warning">🔗 Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none">🏠 Home</Link></li>
                            <li><Link to="/book/list" className="text-light text-decoration-none">📚 View Books</Link></li>
                            <li><Link to="/book/add" className="text-light text-decoration-none">➕ Add a Book</Link></li>
                            <li><Link to="/book/view/:id" className="text-light text-decoration-none">🔍 View Book</Link></li>
                        </ul>
                    </div>

                    {/* 📞 Contact Information */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3 fw-bold text-warning">📞 Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>📍 123 Library Street, Booktown</li>
                            <li>📧 <a href="mailto:support@libraryms.com" className="text-light">support@libraryms.com</a></li>
                            <li>📱 <a href="tel:+12345678900" className="text-light">+1 (234) 567-8900</a></li>
                        </ul>
                    </div>
                </div>

                {/* 🔹 Social Media Icons */}
                <div className="text-center mb-3">
                    <a href="https://facebook.com" target="_blank" className="text-warning me-3 fs-5">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="text-warning me-3 fs-5">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="text-warning fs-5">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>

                {/* ⚖️ Copyright Notice */}
                <div className="border-top pt-3">
                    <p className="text-center text-secondary mb-0">
                        &copy; {new Date().getFullYear()} <span className="text-warning">Library Management System</span>. 
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;