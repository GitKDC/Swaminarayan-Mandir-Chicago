import { useState } from "react";
import type { AboutTab } from "./types";
import AboutTabs from "./AboutTabs";

import AboutTemple from "./panels/AboutTemple";
import Blessings from "./panels/Blessings";
import SectInfo from "./panels/SectInfo";
import Biography from "./panels/Biography";
import Accomplishments from "./panels/Accomplishments";
import ISSSV from "./panels/ISSSV";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<AboutTab>("temple");
 

  return (
    <section className="bg-bg-page py-20">
      <div className="max-w-5xl mx-auto mt-8 px-6 text-center">
        <p className="text-sm tracking-widest text-text-secondary mb-4">
          ॥ SHREE SWAMINARAYANO VI JAYATE ॥
        </p>

        <h2 className="font-heading text-4xl md:text-5xl mb-6">
          About Shree Swaminarayan Mandir
        </h2>

        <p className="text-text-secondary max-w-3xl mx-auto">
          Vadtal Dham, Palatine, Chicago is a divine spiritual center rooted in the
          Swaminarayan Sampraday.
        </p>
      </div>

      <AboutTabs active={activeTab} onChange={setActiveTab} />

      <div
  className={`mt-14 mx-auto px-6 ${
    activeTab === "accomplishments" ? "max-w-7xl px-2" : "max-w-5xl"
  }`}
>
  {activeTab === "temple" && <AboutTemple />}
  {activeTab === "blessings" && <Blessings />}
  {activeTab === "sampraday" && <SectInfo />}
  {activeTab === "biography" && <Biography />}
  {activeTab === "accomplishments" && <Accomplishments />}
  {activeTab === "isssv" && <ISSSV />}
</div>

    </section>
  );
}
