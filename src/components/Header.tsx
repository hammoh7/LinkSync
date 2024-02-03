import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-white flex justify-between p-5 border-b">
      <div className="flex gap-7">
        <Link className="font-bold text-2xl text-green-600" href="/">
          LinkSync
        </Link>
        <nav className="flex items-center gap-5 ml-5 text-gray-700 text-md">
          <Button size="sm" variant="ghost"><Link href="/about">About Us</Link></Button>
          <Button size="sm" variant="ghost"><Link href="/contact">Contact Us</Link></Button>
        </nav>
      </div>
      <div className="flex items-center mr-10">
        <Button size="sm" variant="ghost"><Link href="/login">Sign In</Link></Button>
      </div>
    </header>
  );
}
