import Intro from "@/components/mainHome/Intro";
import Process from "@/components/mainHome/Process";

export default function HomePage() {
  return (
    <section className="px-4 bg-slate-S900 border-2">
      <Intro />
      <Process />
    </section>
  );
}
