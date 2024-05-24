
"use client";

import { Footer } from "flowbite-react";

export function SiteFooter() {
  return (
    <Footer style={{backgroundColor:'#04641c'}} className="" container>
      <Footer.Copyright className="text-white"   href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link className="text-white"   href="#">About</Footer.Link>
        <Footer.Link className="text-white"   href="#">Privacy Policy</Footer.Link>
        <Footer.Link className="text-white"   href="#">Licensing</Footer.Link>
        <Footer.Link className="text-white"   href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
