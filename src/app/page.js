import Image from "next/image";
import { LandingSection } from "./_components/LandingSection";
import { Features } from "./_components/Features";
import { Badmaa } from "./_components/Badmaa";
import { Person } from "./_components/Person";
import { Hurlee } from "./_components/Hurlee";
import { Bolormaa } from "./_components/Bolormaa";

export default function Page() {
  return (
    <>
      <LandingSection />
      <Features />
      <Badmaa />
      <Person />
      <Hurlee />
      <Bolormaa />
      <div className=""></div>
    </>
  );
}
