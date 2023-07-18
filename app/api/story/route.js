import { NextResponse } from "next/server";
import openai from "./openai";

export async function POST(req) {
  // const { buttonName, text } = await req.json();  // parse the request body as JSON

  try {
    if (buttonName && text) {

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        temperature: 0.6,
        prompt: `You're a specialist in books. Give me a list of 2 books of the genre ${buttonName} and a story of ${text}.
        Use up to 100 words per book (title and description included). 
        Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation.
        {"books":[{"title":"title of the book","description":"description of the book"}]}`,
        max_tokens: 1000,   // 15 tokens/word * 100 words/paragraph = 1,500 tokens/paragraph -> 1,500 tokens/paragraph * 5 paragraphs = 7,500 tokens
        // max_tokens: 4500,   // 15 tokens/word * 100 words/paragraph = 1,500 tokens/paragraph -> 1,500 tokens/paragraph * 5 paragraphs = 7,500 tokens
      });
      
      const reqResult = completion.data.choices[0].text;  // extract the generated text from the OpenAI response
      return NextResponse.json({message: "Success", reqResult});
    }
    
    // else {
    //   return NextResponse.json({message: "Failed"});
    // }

  } catch (err) {
    return NextResponse.json({message: "Internal Server Error"});
  }
}

