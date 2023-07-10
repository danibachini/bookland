import Form from "./Form";

export default function Home() {
  return (
    <>      
      <div className="bg-white/25 rounded p-10 h-3/4 md:w-9/12 m-auto ">
        <img className=" m-auto drop-shadow-lg" src="/logo_bookland.png" alt="Bookland logo" />
        <a className="absolute bottom-1 right-2 text-red-900" href="https://www.freepik.com/free-ai-image/comfortable-modern-living-room-with-bookshelf-decor-generated-by-ai_42648697.htm#query=fantasy%20library&position=7&from_view=keyword&track=ais">Image by vecstock</a>
        <h1 className="text-center text-xl py-3 sm:text-3xl text-red-900 font-semibold">Find the story you want to read</h1>

        {/* form component */}
        <Form/>

      </div>
    </>  
    )

  }
