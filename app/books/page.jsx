'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

export default async function BooksPage() {



  if (!window.localStorage.getItem("reqResult") === null) {  // if there's data in localstorage, then use it. else, return the error message
    const [books, setBooks] = useState([]);

    useEffect(()=>{     // useEffect cannot have an async function directly
      (async()=>{
        const response = window.localStorage.getItem("reqResult");
        const booksList = JSON.parse(`${response.substring(1, response.length-1).replaceAll("\\", ``)}`); // can't use JSON.parse(response) directly due to how the response comes from chatgpt's API, otherwise JSON.parse doesn't parse
        setBooks(booksList.books);
      })()
    }, [])
    
    return (
      <div className="rounded bg-orange-950 px-10 pb-8 md:px-20 h-3/4 md:w-9/12 m-auto text-orange-100">
        <div className="flex justify-center md:justify-end">
          <Link href="/">
            <button 
            className="btn bg-orange-900 text-orange-100 hover:bg-orange-100 hover:text-orange-950 m-4"  
            type="button">
              Back Home
            </button>
          </Link>
        </div>

        {/* <h1 className="text-center py-16 md:text-4xl text-3xl text-orange-200 font-semibold">Best Matches For You</h1> */}

        {books.map((book, index) => (
          <div key={index} className="py-4 md:py-6">
            <h2 className="text-xl font-semibold py-3 sm:text-3xl">{book.title}</h2>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    );

  } else {
    // throw Error("No response from the API");
    return err;
  }
}
