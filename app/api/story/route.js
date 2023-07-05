import { NextResponse } from "next/server";

export async function POST(req) {
  const { buttonName, text } = req.body;
  console.log('Button Name:', buttonName);
  console.log('Text:', text);

  try {

    if (Response.data.sucess) {
      return NextResponse.json({message: "successful"})
    }
    else {
      return NextResponse.json({message: "failed"})
    }
  } catch (err) {
    return NextResponse.json({message:"Internal Server Error"})
  }

}



