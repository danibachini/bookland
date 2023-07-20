'use client'

import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {   // useEffect cannot have an async function directly
    const fetchBooksData = async () => {    // fetches the data from localStorage and handles errors

      try {
        const response = window.localStorage.getItem("reqResult");

        if (!response) {   // if there's no data in localStorage, throw an error
          throw new Error("No data in localStorage");
        }

        // parse the response to extract the books list and set it in the state
        const booksList = JSON.parse(`${response.substring(1, response.length - 1).replaceAll("\\", ``)}`);  // can't use JSON.parse(response) directly due to how the response comes from chatgpt's API, otherwise JSON.parse doesn't parse
        setBooks(booksList.books);

      } catch (err) {   // if an error occurs, set the error state
        setError(err);
      }
    };

    fetchBooksData();
  }, []);

  if (error) {   // if there's an error, render the error message
    return error;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
      {books.map((book, index) => (
        <div key={index} className="py-4 md:py-6">
          <h2 className="text-xl font-semibold py-3 sm:text-3xl">{book.title}</h2>
          <p className="italic mb-2">Author: {book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
