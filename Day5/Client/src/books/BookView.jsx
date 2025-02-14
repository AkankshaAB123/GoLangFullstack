import { useLocation, useNavigate } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookView({ books }) {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const bookId = queryParams.get("id");

    const book = books.find((b) => b.id.toString() === bookId);

    return (
        <>
            <PageHeader />
            <h3>
                <button onClick={() => navigate(-1)} className="btn btn-light">Go Back</button> View Book
            </h3>
            <div className="container">
                {book ? (
                    <>
                        <div className="form-group mb-3">
                            <label className="form-label">Book Title:</label>
                            <div className="form-control">{book.title}</div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Author:</label>
                            <div className="form-control">{book.author}</div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Genre:</label>
                            <div className="form-control">{book.genre}</div>
                        </div>
                        <button className="btn btn-warning" onClick={() => navigate(`/book/edit?id=${book.id}`)}>Edit</button>
                    </>
                ) : (
                    <h5 className="text-danger">Book not found</h5>
                )}
            </div>
            <PageFooter />
        </>
    );
}