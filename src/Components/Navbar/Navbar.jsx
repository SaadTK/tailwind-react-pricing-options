import React from 'react'
import Link from './Link';

const navigationData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Blog", url: "/blog" }
];



const Navbar = () => {
  return (
    <>
<nav>

  <ul className='flex'>
    {
      navigationData.map(route =><Link key={route.id} route={route}></Link>)
    }
  </ul>

    {/* <ul className='flex gap-5'>
        <li><a className='mr-10 text-2xl' href="/">Home</a></li>
        <li><a className='mr-10 text-2xl' href="/">About</a></li>
        <li><a className='mr-10 text-2xl' href="/">Blog</a></li>
    </ul> */}
</nav>


    </>
  )
}

export default Navbar