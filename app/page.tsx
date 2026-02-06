import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import HiringFAQ from "@/components/HiringFAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InfiniteScroller from "@/components/InfinteScroller";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <Projects />
        <About />
        <HiringFAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
