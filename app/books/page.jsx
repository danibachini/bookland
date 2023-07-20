'use client'

import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = window.localStorage.getItem("reqResult");

        if (!response) {
          throw new Error("No data in localStorage");
        }

        const booksList = JSON.parse(`${response.substring(1, response.length - 1).replaceAll("\\", ``)}`);
        setBooks(booksList.books);

      } catch (err) {
        setError(err);
      }
    };

    fetchBooksData();
  }, []);

  if (error) {
    return error;
  }

  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="py-4 md:py-6">
          <h2 className="text-xl font-semibold py-3 sm:text-3xl">{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
