import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from './dojo-logo.png'

const Navber = () => {
  return (
    <nav>
      <Image
      src={logo}
      alt='image'
      width={70}
      quality={100}
      placeholder='blur'
      />
      <h1>Help Desk</h1>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/'>Dashboard</Link>
    </nav>
  );
};

export default Navber;