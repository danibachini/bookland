'use client'; // Error components must be Client Components
 
import Link from 'next/link';
import { useEffect } from 'react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className='text-center col-span-3 rounded bg-orange-950 p-10 md:p-20 md:max-w-xl h-3/4 m-auto text-orange-100 '>
        <h2 className='mt-10'>Ops, I got something wrong here</h2>
        <h3>Help me try it again!</h3>

        <button className='btn bg-orange-900 text-orange-100 hover:bg-orange-100 hover:text-orange-950 m-16'
            onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
            }>
            Try again
        </button>

        <h4 className='mb-4'>Still not working? <br/> Let's try a new search</h4>
        <Link href="/" className='hover:underline'>Search</Link>

    </div>
  );
}