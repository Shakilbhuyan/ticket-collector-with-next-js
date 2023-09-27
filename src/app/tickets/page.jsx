import React, { Suspense } from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

const Tickets = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently Open tickets</small></p>
                </div>
                <Link href="/tickets/create">Add New Ticket</Link>
            </nav>
            <Suspense fallback={<Loading></Loading>}>
            <TicketList></TicketList>
            </Suspense>
        </main>
    );
};

export default Tickets;