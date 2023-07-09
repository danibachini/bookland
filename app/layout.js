import './globals.css'

export const metadata = {
  title: `Bookland | Find the story you want to read`,
  description: `Tell us what kind of story you want to read and we tell you in which books you can find it`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-neutral-100'>
      <body className='py-6 mx-6 md:mx-24 '>
        {children}
      </body>
    </html>
  )
}
