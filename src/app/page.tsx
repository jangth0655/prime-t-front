import Intro from "@/components/mainHome/Intro";
import Portfolio from "@/components/mainHome/Portfolio";
import Process from "@/components/mainHome/Process";

export default function HomePage() {
  return (
    <section className="px-4 bg-slate-S900">
      <Intro />
      <Process />
      <Portfolio />
    </section>
  );
}
