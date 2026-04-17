import Hero from "./components/Hero";
import ScrollText from "./components/ScrollText";
import StarRepo from "./components/StarRepo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ScrollText />
    </main>
  );
}
