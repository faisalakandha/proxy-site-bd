import { Header } from "@/src/Header";
import { ArrowLeft, ArrowRight, EarIcon, Globe2Icon, Mic2Icon, MicIcon, MoveUpRightIcon, Star, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { SiteFooter } from '@/src/Footer';
import Marquee from 'react-fast-marquee';


export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-x-6">
        <div className="col-span-1 h-[600px] w-[160px] bg-orange-400 mt-6 ml-6 sticky top-10 z-50">

        </div>

        <div className="col-span-3">
          <div className="flex items-center justify-center">
            <Link className="text-2xl" href={'/'}>Croxy Proxy Get Premium Access</Link><br />
          </div>

          <div className="py-6 flex items-center justify-center">
            <Link className="text-xl" href='/'>Translate to another language</Link>
          </div>

          <div className="flex gap-x-6 items-center justify-center">
            <div className="bg-orange-400 h-[250px] w-[300px]">

            </div>

            <div className="bg-orange-400 h-[250px] w-[300px]">

            </div>

          </div>

          <div style={{ borderRadius: '9px' }} className="flex flex-col items-center justify-center mt-14 bg-[#a7dbc8] py-24 px-4">
            <div className="flex gap-x-4">
              <div className="flex">
                <div style={{ border: '1px solid grey', borderRadius: '5px' }} className="w-[450px] pl-4 text-[#b4b1b1] bg-white items-center text-left flex text-wrap text-lg">
                  <Marquee>Enter an Url or a search query to access</Marquee>
                </div>
                <div style={{cursor:'pointer'}} className="py-3 px-8 bg-[#037B21] flex items-center justify-center gap-x-3 text-xl">
                  <ArrowRight className="text-yellow-200" />
                  <p className="text-white font-bold">Go!</p>
                </div>

              </div>
              <div style={{ borderRadius: '5px', cursor:'pointer' }} className="text-xl gap-x-3 flex items-center justify-center bg-[#037B21] py-3 px-3">
                <Star className="text-white" />
                <p className="text-white font-bold">Premium</p>
              </div>
            </div>
            <p className="text-lg mt-8 text-center"><span className="font-bold">Quick links:</span> <Link className="text-[#04661c] underline font-bold" href=''>Google</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Bing</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>DuckDuckGo</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>YouTube</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Facebook</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Wikipedia</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Reddit</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Instagram</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>TikTok</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Twitter</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Imgur</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Twitch</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Tumblr</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>Pinterest</Link>,  <Link className="text-[#04661c] underline font-bold" href=''>LinkedIn</Link> </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex flex-col items-center justify-center font-bold">
              <p className="text-black">Install now our android app from playstore totally free for better experience</p>
              <div className="flex gap-x-3 items-center justify-center">
                <p className="text-xl text-[#037B21]">Click Here</p>
                <ArrowRight className="text-[#037B21]" />
                <img src="/images/google-play-badge.png" className="h-20" />
              </div>
            </div>
            <div className="bg-orange-400 h-[90px] w-[720px]">

            </div>

          </div>

          <div className="my-8 flex items-center justify-center gap-x-4">
            <SocialIcon network="youtube" />
            <SocialIcon network="facebook" />
            <SocialIcon network="instagram" />
            <SocialIcon network="snapchat" />
            <SocialIcon network="pinterest" />
            <SocialIcon network="linkedin" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-8 my-12" id="indexContent">

            <h1 className="bg-green-400 py-4 px-8 text-white font-bold text-xl">Cutting-edge online proxy</h1>

            <p>
              CroxyProxy is a reliable and free web proxy service that protects your privacy.
              It supports numerous video sites, enabling anonymous surfing with full video streaming support.
              This online proxy is a good alternative to VPNs. It's free of charge, and you don't need to
              download or configure anything since it acts as a proxy browser.
            </p>


            <h2  className="bg-green-400 py-4 px-8 text-white font-bold text-xl">Key advantages of CroxyProxy</h2>

            <p>
              The main aim of CroxyProxy is to enhance information accessibility for everyone.
              Our proxy solution comes with the following key differences:
            </p>
            <ul>
              <li>Unique technology that allows access to most modern websites and web applications.</li>
              <li>Works as a YouTube proxy and a proxy for other video websites.</li>
              <li>Your webproxy traffic is regular web traffic that is fully protected.</li>
              <li>A single web page can be opened through the proxy; there's no need to pass all your traffic.</li>
              <li>No configuration required; it acts as a proxy browser.</li>
              <li>The basic version of the online proxy is free of charge.</li>
            </ul>

            <h2  className="bg-green-400 py-4 px-8 text-white font-bold text-xl">Free web proxy features</h2>

            <ul>
              <li>Hides your real network identity, allowing you to surf anonymously.</li>
              <li>Makes all websites encrypted for added security.</li>
              <li>Shareable link feature to share opened pages with friends.</li>
              <li>Can be used on any operating system, including Android and Chrome OS.</li>
              <li>Full support for video and audio playback.</li>
            </ul>

            <h2  className="bg-green-400 py-4 px-8 text-white font-bold text-xl">How this free proxy works</h2>

            <p>
              The free proxy is a kind of virtual pipeline, and your traffic flows through it to the
              destination website. That's why the destination website doesn't see your real network identity.
              For better protection, all traffic to the free proxy is encrypted, ensuring that it
              remains hidden. In this way, this online proxy cares about your anonymity and privacy.
              Regardless of whether the destination website supports a secure connection or not, you
              can be sure that your web traffic to CroxyProxy will always be protected.
            </p>

            <h2  className="bg-green-400 py-4 px-8 text-white font-bold text-xl">YouTube proxy support</h2>

            <p>
              This web proxy supports YouTube. You don't need to install any additional software, and
              it doesn't change the look and feel of YouTube. Millions of videos and music clips are
              available for you regardless of your location and device with a better level of privacy.
              All you need is just a web browser. Try our YouTube proxy right now; it is absolutely free!
            </p>

          </div>

        </div>

        <div className="col-span-1 ml-auto h-[600px] mt-6 mr-6 w-[160px] bg-orange-400  sticky top-10 z-50">

        </div>

      </div>
      <SiteFooter />
    </div>
  );
}
