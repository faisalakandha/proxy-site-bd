
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar className="my-6"  style={{borderBottom:'5px solid grey'}} fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img src="https://www.bdlawnews.com/wp-content/uploads/2021/06/bdln-logos.png" className="mr-3 h-10 sm:h-9" alt="Proxy Server BD Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
