
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import SearchForm from "../HeaderSearch";



export function Header() {

  const [OpenSearch, SetOpenSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    SetOpenSearch((prevOpenSearch) => !prevOpenSearch);
  };

  return (

    OpenSearch ? (
      <div className="w-full">
        <SearchForm />
        <X onClick={toggleSearch} style={{ cursor: 'pointer', border: '3px solid red' }} className="ml-auto font-xl" />
      </div>
    ) : (
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
        <SearchIcon onClick={toggleSearch} style={{ cursor: 'pointer' }} className="text-white" />
      </Navbar>
    )
  );
}
