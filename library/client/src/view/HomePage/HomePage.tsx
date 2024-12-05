import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation  } from "react-router-dom";
import './HomePage.scss';
import Logo from '../logo/Logo';

interface Book {
    title: string;
    coverUrl: string;
    author: string;
}

const HomePage = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const fetchBooks = async (currentPage:any) => {
        setLoading(true);
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=popular+books&limit=50&page=${currentPage}`);
            const data = await response.json();

            const bookCovers:Book[] = data.docs
                .filter((book: { cover_i: any; }) => book.cover_i)
                .map((book: { title: any; cover_i: any; author_name: any[]; }) => ({
                    title: book.title,
                    coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
                    author: book.author_name ? book.author_name[0] : 'Unknown Author'
                }));


            setBooks(prevBooks => [...prevBooks, ...bookCovers]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching books:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!['/element-logIn', '/element-register'].includes(location.pathname)) {
            fetchBooks(page);
        }
    }, [page, location.pathname]);


    const loadMoreBooks = () => {
        setPage(prevPage => prevPage + 1);
        
    };
    
    const shouldShowBooks = !['/element-logIn', '/element-register'].includes(location.pathname);

    return (
        <div>
            <div>
                <Logo />
            </div>
            <div>
                <nav className="HomePage">
                    <Link to="element-logIn" className="link">log in</Link>
                    <Link to="element-register" className="link">register</Link>
                </nav>
                <div className="element">
                    <Outlet />
                </div>

                {shouldShowBooks && (
                    <>
                <div className="book-gallery">
                    {books.map((book, index) => (
                        <div key={index} className="book-item">
                            <img
                                src={book.coverUrl}
                                alt={book.title}
                                className="book-cover"
                            />
                            <p className="book-title">{book.title}</p>
                            <p className="book-author">{book.author}</p>
                        </div>
                    ))}
                </div>

                
                {!loading && (
                    <button
                        onClick={loadMoreBooks}
                        className="load-more-button"
                    >
                        more
                    </button>
                )}

                {loading && <div className="spinner"></div>}

                </>
                )}

            </div>
        </div>
    );
};

export default HomePage;