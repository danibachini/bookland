import Form from "./Form";
// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <img className="py-4 m-auto" src="/logo.png" alt="Brand logo" />
      <h1 className="text-center text-xl py-7 sm:text-3xl">Find the story you want to read</h1>

      <div>
        <Form/>
      </div>
    </>  
    )
}



