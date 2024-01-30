import FAQ from "./mainHome/FAQ";
import Intro from "./mainHome/Intro";
import Portfolio from "./mainHome/Portfolio";
import Process from "./mainHome/Process";

export default function ServiceIntro() {
  return (
    <section className="px-4 bg-slate-S900">
      <Intro />
      <Process />
      <Portfolio />
      <FAQ />
    </section>
  );
}
