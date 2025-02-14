
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-indigo-950 to-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}
