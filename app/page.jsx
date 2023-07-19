import Form from "./Form";

export default function Home() {
  return (
    <>
      {/* bg-orange-950 */}
      <div className="rounded bg-orange-950/30 p-10 h-3/4 md:w-9/12 m-auto">
        <img className=" m-auto drop-shadow-lg" src="/logo_bookland_clear.png" alt="Bookland logo" />

        {/* form component */}
        <Form/>

        <a className="absolute bottom-1 right-2 text-red-900" href="https://www.freepik.com/free-ai-image/comfortable-modern-living-room-with-bookshelf-decor-generated-by-ai_42648697.htm#query=fantasy%20library&position=7&from_view=keyword&track=ais">Image by vecstock</a>
      </div>
    </>  
  )
}
