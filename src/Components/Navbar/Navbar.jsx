import React, { useState } from 'react'
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Blog", url: "/blog" }
];



const Navbar = () => {

const [open, setOpen] = useState(false)

const links =   navigationData.map(route =><Link key={route.id} route={route}></Link>)
    


  return (
    <>
<nav className='flex justify-between mx-10 mt-5'>
<span className='flex' onClick={() => setOpen(!open)}>

{
  open ? <X className='md:hidden'></X> :<Menu className='md:hidden'></Menu>
}

<ul className={`md:hidden absolute duration-1000 ${open ? 'top-8':'-top-40'} bg-green-400`}>
  {
    links
  }
</ul>

  <h3 className='ml-4'>My Navbar</h3>
</span>

  <ul className='md:flex hidden'>
    {
      links
    }
  </ul>

    {/* <ul className='flex gap-5'>
        <li><a className='mr-10 text-2xl' href="/">Home</a></li>
        <li><a className='mr-10 text-2xl' href="/">About</a></li>
        <li><a className='mr-10 text-2xl' href="/">Blog</a></li>
    </ul> */}

    <h2>Sign In</h2>
</nav>


    </>
  )
}

export default Navbar