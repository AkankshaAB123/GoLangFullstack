import { Link } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookList({ books }) {
    return (
        <>
            <PageHeader />

            <div className="container mt-4">
                <h2 className="text-center mb-4 text-primary fw-bold">📚 Library Book List</h2>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-secondary fw-semibold">Available Books</h4>
                    <Link to="/book/create" className="btn btn-primary px-4 py-2 shadow-sm">
                        ➕ Add New Book
                    </Link>
                </div>

                <div className="table-responsive rounded shadow-lg">
                    <table className="table table-striped table-hover text-center align-middle">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th className="p-3">📖 ID</th>
                                <th className="p-3">📚 Title</th>
                                <th className="p-3">✍️ Author</th>
                                <th className="p-3">📂 Genre</th>
                                <th className="p-3 text-center">⚙️ Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-light">
                            {books.length > 0 ? (
                                books.map((book, index) => (
                                    <tr key={book.id} className="fw-medium">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{book.title}</td>
                                        <td className="p-3">{book.author}</td>
                                        <td className="p-3">{book.genre}</td>
                                        <td className="p-3 text-center">
                                            <Link className="btn btn-success me-2 px-3 py-1 shadow-sm" to={`/book/view/${book.id}`}>
                                                👀 View
                                            </Link>
                                            <Link className="btn btn-warning px-3 py-1 shadow-sm" to={`/book/edit/${book.id}`}>
                                                ✏️ Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center text-muted p-4 fs-5">
                                        📭 No books available. Add new books to the list!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <PageFooter />
        </>
    );
}
