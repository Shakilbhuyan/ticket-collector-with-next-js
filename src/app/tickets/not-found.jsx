import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className='text-center'>
        <h2 className='text-3xl'>We Hit the brick Wall</h2>
        <p>We could not found the ticket you Want</p>
        <p>Go back to <Link href='/tickets'>Ticket</Link></p>
             </main>
    );
};

export default NotFound;