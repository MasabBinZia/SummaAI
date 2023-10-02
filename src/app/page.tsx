import Demo from "@/components/Demo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="fixed inset-0 flex justify-center min-h-screen w-screen p-20 lg:p-32  ">
      <div>
        <Hero />
        <Demo />
      </div>
    </main>
  );
}
