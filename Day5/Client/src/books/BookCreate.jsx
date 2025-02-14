import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookCreate({ onAddBook }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !genre) {
            alert("Please fill all fields!");
            return;
        }

        const newBook = {
            id: Date.now(), // Unique ID for the book
            title,
            author,
            genre
        };

        onAddBook(newBook); // Call the function passed from App.js
        navigate("/book/list"); // Redirect to book list after adding
    };

    return (
        <>
            <PageHeader />
            <h3> <a href="/" className="btn btn-light">Go Back</a> Add Book</h3>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="title" className="form-label">Book Title:</label>
                        <input type="text" className="form-control" id="title"
                            placeholder="Enter book title" value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="author" className="form-label">Author:</label>
                        <input type="text" className="form-control" id="author"
                            placeholder="Enter author name" value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="genre" className="form-label">Genre:</label>
                        <input type="text" className="form-control" id="genre"
                            placeholder="Enter book genre" value={genre}
                            onChange={(e) => setGenre(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </form>
            </div>
            <PageFooter />
        </>
    );
}