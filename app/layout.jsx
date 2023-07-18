import './globals.css'

export const metadata = {
  title: `Bookland | Find the story you want to read`,
  description: `Tell us what kind of story you want to read and we tell you in which books you can find it`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <a className="absolute mt-auto right-2 text-red-900" href="https://www.freepik.com/free-ai-image/comfortable-modern-living-room-with-bookshelf-decor-generated-by-ai_42648697.htm#query=fantasy%20library&position=7&from_view=keyword&track=ais">Image by vecstock</a> */}
      <body className='py-6 mx-6 md:mx-24 '>
        {children}
      </body>
    </html>
  )
}
