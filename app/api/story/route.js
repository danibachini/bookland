import { NextResponse } from "next/server";
// import { NextRequest } from 'next/server'
import openai from "./openai";
// import BooksPage from "@/app/books/page";

export async function POST(req) {
  const { buttonName, text } = await req.json();  // parse the request body as JSON
  console.log("inside route", { buttonName, text });

  try {
    if (buttonName && text) {
      console.log("Inside if");

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0.6,
        // prompt: `what is 2 + 2?`,
        // max_tokens: 5, //150
        // prompt: `You're a specialist in books. Give me a list of 2 books of the genre ${buttonName} and a story of ${text}. 
        // Give it in json format containing only "title" for each of them. follow this format: 
        // {
        //   "Books": [
        //     {
        //       "title": "title of the book"
        //     },
        //     {
        //       "title": "title of the second book"
        //     },
        //   ]
        // }
        // I want the following information about the book: title `,
        // max_tokens: 60,   // 500 words needs approximately 666.67 tokens 
        prompt: `You're a specialist in books. Give me a list of 2 books of the genre ${buttonName} and a story of ${text}. 
        Give it in json format. Follow this format: 
        [
          {
            "title": "title of the book",
            "description": "description of the book"
          },
          {
            "title": "title of the second book",
            "description": "description of the second book"
          },
        ]
        I want the following information about the book: title and description (up to 100 words) `,
        max_tokens: 800,   // 500 words needs approximately 666.67 tokens 
      });
      
      console.log("below API openai");
      const reqResult = completion.data.choices[0].text;  // extract the generated text from the OpenAI response
      console.log("checking the reqResult before sending it to books page: ", reqResult);

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

