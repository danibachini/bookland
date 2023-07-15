
'use client'



export default async function BooksPage() {
  console.log("arrived at books");
  const response = await window.localStorage.getItem("reqResult");
  console.log("this is response: ", response);
  console.log("response type: ", typeof response);
  const booksList = JSON.parse(response);
  console.log("this is the booksList: ", booksList);

  if (!booksList) {
    return <div>Loading...</div>; // or any other loading indicator
  }
  
  return (
    <div>
      {booksList.map((book) => (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}



