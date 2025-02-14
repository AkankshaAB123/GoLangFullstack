function PageFooter() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Parking Management System</h5>
                        <p className="text-secondary">
                            Providing efficient parking solutions for modern cities and businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">Pricing</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">FAQ</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-secondary text-decoration-none">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Contact Us</h5>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                123 Parking Street, City
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-envelope-fill me-2"></i>
                                support@parking.com
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-telephone-fill me-2"></i>
                                (555) 123-4567
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="border-top pt-4">
                    <p className="text-center text-secondary mb-0">
                        &copy; {new Date().getFullYear()} Parking Management System. 
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;