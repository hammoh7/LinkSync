import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full bg-gradient-to-b from-green-100 to-green-400">
      <Header />
      <section className="p-10 pt-32 max-w-5xl mx-auto">
        <div className="max-w-md mb-20">
          <h1 className="text-4xl font-extrabold">
            Everything about you,
            <br /> in One Link,
            <br /> with LinkSync
          </h1>
          <h2 className="text-xl font-semibold text-slate-500 mt-5 ml-4">
            Share your daily life and more, through LinkSync
          </h2>
        </div>
        <div>
          <form className="flex items-center">
            <span className="font-medium bg-white py-2 pl-2 rounded-s-xl">
              linksn.aa/
            </span>
            <input
              placeholder="username"
              className="py-2 font-medium rounded-e-xl outline-none"
              type="text"
            />
            <Button className="h-8 ml-5">
              <Link href="/login">Join</Link>
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
