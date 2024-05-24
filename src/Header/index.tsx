
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar style={{backgroundColor:'#037b21'}} className="py-6"  fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://www.bdlawnews.com/wp-content/uploads/2021/06/bdln-logos.png" className="mr-3 h-10 sm:h-9" alt="Proxy Server BD Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-white"  href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white"  href="#">Services</Navbar.Link>
        <Navbar.Link className="text-white"  href="#">Pricing</Navbar.Link>
        <Navbar.Link className="text-white"  href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
