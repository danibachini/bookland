

export default function BooksPage({ response }) {
    const reqResult = JSON.parse(response);
    console.log("what arrived at the page books: ", reqResult);
    return (
        <div>
            <h1>Book Page</h1>
            <p>API Response: {reqResult}</p>
        </div>
    );
    // ...
};

  
BooksPage.getInitialProps = async ({ query }) => {
    const response = query.response || null;
    return { response };
};
  
  



// export default function BooksPage({ response }) {
//     console.log("the result arrived at books", response);
//     return (
//       <div>
//         <h1>Book Page</h1>
//         <p>API Response: {response}</p>
//         {/* other stuff */}
//       </div>
//     );
//   };
  
//   BooksPage.getInitialProps = ({ response }) => {
//     return { response };
//   };
  
  