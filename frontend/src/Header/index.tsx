
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import SearchForm from "../HeaderSearch";



export function Header() {

  return (
    <Navbar style={{ backgroundColor: '#037b21' }} className="py-6" fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://www.bdlawnews.com/wp-content/uploads/2021/06/bdln-logos.png" className="mr-3 h-10 sm:h-9" alt="Proxy Server BD Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="pr-6">
        <Navbar.Link className="text-white" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} href="/about">
          About Us
        </Navbar.Link>
        <Navbar.Link className="text-white" href="/privacy-policy">Privacy Policy</Navbar.Link>
        <Navbar.Link className="text-white" href="/terms-conditions">Terms and Condisions</Navbar.Link>
        <Navbar.Link className="text-white" href="/disclaimer">Disclaimer</Navbar.Link>
        <Navbar.Link className="text-white" href="/contact">Contact Us</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex">
      <form  className="flex w-full items-center space-x-2"> <input style={{borderRadius:'10px'}} type="text" className="bg-white w-full" placeholder="Search Anything..."  /> <button style={{borderRadius:'5px', border:'1px solid black'}} className='hover:bg-gray-500 hover:text-white bg-white text-md font-semibold px-3 py-2' type="submit"><SearchIcon /></button> </form>
      </div>
    </Navbar>
  )
}
