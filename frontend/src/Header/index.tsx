
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
        <div style={{ display: 'inline-block', width: '200px', }} className="py-2 text-green bg-white ml-auto">
          <SearchIcon style={{marginRight:'3px', cursor:'pointer'}} className="ml-auto" />
        </div>
      </div>
    </Navbar>
  )
}
