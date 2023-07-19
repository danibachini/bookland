
export default function booksLayout({ children }) {
    return (
        <div>
            <h1 className="text-center py-16 md:text-4xl text-3xl text-orange-200 font-semibold">Best Matches For You</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                {children}
            </div>
        </div>
    )
}