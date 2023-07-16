'use client'

import { useEffect, useState } from "react";

export default async function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{     // useEffect cannot have an async function directly
    (async()=>{
      const response = window.localStorage.getItem("reqResult");
      // console.log("this is response: ", `${response.substring(1, response.length-1).replaceAll("\\", ``)}`);
      // console.log("response type: ", typeof response);
      const booksList = JSON.parse(`${response.substring(1, response.length-1).replaceAll("\\", ``)}`);
      // console.log("this is the booksList: ", booksList.books);
      setBooks(booksList.books);
    })()
  }, [])
  
  return (
    <div>
      {books.map((book) => (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}



