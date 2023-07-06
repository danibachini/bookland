import { NextResponse } from "next/server";

export async function POST(req) {
  const { buttonName, text } = await req.json();
  console.log('Data received in the API :', { buttonName, text });


  try {
    if (buttonName && text) {
      return NextResponse.json({message: "successful"})
    }
    else {
      return NextResponse.json({message: "failed"})
    }
  } catch (err) {
    return NextResponse.json({message:"hakuna matata"})
  }
}


