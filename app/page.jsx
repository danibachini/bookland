import Form from "./Form";

export default function Home() {
  return (
    <>
      {/* bg-orange-950 */}
      <div className="rounded bg-orange-950/30 p-10 h-3/4 md:w-9/12 m-auto">
        <img className=" m-auto drop-shadow-lg" src="/logo_bookland_clear.png" alt="Bookland logo" />

        {/* form component */}
        <Form/>

        {/* <a className="absolute mt-auto right-2 text-red-900" href="https://www.freepik.com/free-ai-image/comfortable-modern-living-room-with-bookshelf-decor-generated-by-ai_42648697.htm#query=fantasy%20library&position=7&from_view=keyword&track=ais">Image by vecstock</a> */}

        <a className="absolute bottom-1 right-2 text-red-900" href="https://www.freepik.com/free-ai-image/comfortable-modern-living-room-with-bookshelf-decor-generated-by-ai_42648697.htm#query=fantasy%20library&position=7&from_view=keyword&track=ais">Image by vecstock</a>
      </div>
    </>  
    )

  }


//   <div className="form-control">
//   {isLoading ? "" : 
//   (<button className="btn bg-orange-950 hover:bg-orange-200 text-orange-200 hover:text-orange-950 mt-6" type="submit">Submit</button>)}
//   {/* if loading is true, set the loading spinner */}
//   {isLoading ? <div className='flex justify-center'><span className="loading loading-bars loading-lg text-orange-950"></span></div> : ''}  
// </div>

// Article: Comment utiliser l'API de ChatGPT ? Le tutoriel complet
// https://www.commentcoder.com/api-chatgpt/

// nextjs + openAI
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers#streaming

// OpenAI doc
// https://platform.openai.com/docs/api-reference/authentication
// https://platform.openai.com/docs/quickstart/build-your-application

// Video: Boost Your Next.js Project with OpenAI: Step-by-Step Tutorial for Beginners
// https://www.youtube.com/watch?v=2xwv4T552lM&ab_channel=JamesQQuick

// OpenAI API keys
// https://platform.openai.com/account/api-keys

// npm OpenAI Node.js Library
// https://github.com/openai/openai-node#readme
// https://www.npmjs.com/package/openai


// https://www.youtube.com/watch?v=8pzIuLFuv6U&ab_channel=PedroTech