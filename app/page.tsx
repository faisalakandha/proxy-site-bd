import { Header } from "@/src/Header";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-x-6">
        <div className="col-span-1 h-screen bg-orange-400">

        </div>

        <div className="col-span-3">
          <div className="flex items-center justify-center">
            <Link href={'/'}>Get premium access</Link><br />
          </div>

          <div className="py-6 flex items-center justify-center">
            <Link className="" href='/'>Translate to another language</Link>
          </div>

          <div className="flex flex-col items-center justify-center mt-14">
            <div className="flex gap-x-4">
              <div className="flex">
                <div style={{ border: '1px solid grey' }} className="py-4 px-72">

                </div>
                <div className="py-3 px-8 bg-green-400 flex items-center justify-center gap-x-3 text-xl">
                  <ArrowRight />
                  <p>Go!</p>
                </div>

              </div>
              <div className="text-xl gap-x-3 flex items-center justify-center bg-green-400 py-3 px-2">
                <Star />
                <p>Premium</p>
              </div>
            </div>
            <p className="text-lg mt-8">Quick links: DuckDuckGo, Bing, Google, YouTube, Facebook, Wikipedia, Reddit, Instagram, TikTok, Twitter, Imgur, Twitch</p>
          </div>
        </div>

        <div className="col-span-1 h-screen bg-orange-400">

        </div>

      </div>
    </div>
  );
}
