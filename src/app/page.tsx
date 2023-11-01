import Demo from "@/components/Demo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center py-12 px-4 lg:px-32">
      <Hero />
      <Demo />
    </main>
  );
}
