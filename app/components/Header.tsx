import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex  justify-end text-white bg-[#529864] p-4 space-x-3 tracking-widest">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/rsvp" className="hover:underline">
        RSVP
      </Link>
      <Link href="/location" className="hover:underline">
        Location
      </Link>
    </header>
  );
}

export default Header;
