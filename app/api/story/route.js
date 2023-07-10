import { NextResponse } from "next/server";
import openai from "./openai";
// import BooksPage from "@/app/books/page";

export async function POST(req) {
  const { buttonName, text } = await req.json();  // parse the request body as JSON
  console.log({ buttonName, text });

  try {
    if (buttonName && text) {
      console.log("Inside if");

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0.6,
        prompt: `what is 2 + 2?`,
        // prompt: `You're a specialist in books. Give me a book of the genre ${buttonName} and a story of ${text}. Give it in json format. 
        // I want the following information about the book: title and short description (up to 100 words) `,
        // max_tokens: 800,   // 500 words needs approximately 666.67 tokens 
        max_tokens: 5, //150
      });
      console.log("below API openai");
      const reqResult = completion.data.choices[0].text; 
      console.log("checking the reqResult before sending it to the form: ", reqResult);
      
      // console.log(completion.data.choices[0].text); // extract the generated text from the OpenAI response
      // return completion;
      // return BooksPage.getInitialProps({ response: reqResult });
      return NextResponse.json({message: "Success", reqResult});
    }
    else {
      console.log("didn't work");
      return NextResponse.json({message: "Failed"});
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({message: "Internal Server Error"});
  }

}

