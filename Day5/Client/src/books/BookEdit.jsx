import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookEdit({ books, setBooks }) {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const bookId = queryParams.get("id");

    const [book, setBook] = useState(null);

    // Load book data when component mounts
    useEffect(() => {
        const foundBook = books.find((b) => b.id.toString() === bookId);
        if (foundBook) {
            setBook(foundBook);
        }
    }, [bookId, books]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const updatedBooks = books.map((b) => (b.id === book.id ? book : b));
        setBooks(updatedBooks);
        localStorage.setItem("books", JSON.stringify(updatedBooks));
        navigate("/book/list"); // Redirect to book list
    };

    return (
        <>
            <PageHeader />
            <h3>
                <button onClick={() => navigate(-1)} className="btn btn-light">Go Back</button> Edit Book
            </h3>
            <div className="container">
                {book ? (
                    <>
                        <div className="form-group mb-3">
                            <label className="form-label">Book Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={book.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Author:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="author"
                                value={book.author}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Genre:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="genre"
                                value={book.genre}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={handleSave}>Save Changes</button>
                    </>
                ) : (
                    <h5 className="text-danger">Book not found</h5>
                )}
            </div>
            <PageFooter />
        </>
    );
}