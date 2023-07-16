import { NextResponse } from "next/server";
import openai from "./openai";

export async function POST(req) {
  const { buttonName, text } = await req.json();  // parse the request body as JSON
  console.log("inside route", { buttonName, text });

  try {
    if (buttonName && text) {
      console.log("Inside if");

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0.6,
        prompt: `You're a specialist in books. Give me a list of 2 books of the genre ${buttonName} and a story of ${text}.
        Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation.
        {"books":[{"title":"title of the book","description":"description of the book, up to 200 caracters"}]}`,
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

