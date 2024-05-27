
"use client";

import { Footer } from "flowbite-react";
import { ArrowRight } from "lucide-react";

export function SiteFooter() {
    return (
        <div>
            <Footer style={{ backgroundColor: '#04641c' }} className="" container>
                <Footer.Copyright className="text-white" href="#" by="Flowbite™" year={2022} />
                <div className="flex flex-col items-center justify-center text-white font-bold">
                    <p>Install now our android app from playstore totally free for better experience</p>
                    <div className="flex gap-x-3 items-center justify-center">
                        <p className="text-xl text-yellow-200">Click Here</p>
                        <ArrowRight className="text-yellow-200" />
                        <img src="/images/google-play-badge.png" className="h-20" />
                    </div>
                </div>
                <Footer.LinkGroup className="pr-6 font-bold">
                    <Footer.Link className="text-white" href="#">Home</Footer.Link>
                    <Footer.Link className="text-white" href="#">About Us</Footer.Link>
                    <Footer.Link className="text-white" href="#">Privacy Policy</Footer.Link>
                    <Footer.Link className="text-white" href="#">Terms and Conditions</Footer.Link>
                    <Footer.Link className="text-white" href="#">Disclaimer</Footer.Link>
                    <Footer.Link className="text-white" href="#">Contact Us</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
            <div className="flex items-center justify-center">
                Copyright © 2024 Proxy Croxy
            </div>
        </div>
    );
}
