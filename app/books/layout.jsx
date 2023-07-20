import Link from "next/link"

export default function booksLayout({ children }) {
    return (
        <div className="rounded bg-orange-950 px-10 pb-8 md:px-20 h-3/4 md:w-9/12 m-auto text-orange-100">
            <div className="flex justify-center md:justify-end">
                <Link href="/">
                    <button 
                    className="btn bg-orange-900 text-orange-100 hover:bg-orange-100 hover:text-orange-950 m-4"  
                    type="button">
                    Back Home
                    </button>
                </Link>
            </div>

            <h1 className="text-center py-16 md:text-4xl text-3xl text-orange-200 font-semibold">Best Matches For You</h1>
            
            <div>
                {children}
            </div>
        </div>
    )
}