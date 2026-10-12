import { Atmosphere } from "@/components/Atmosphere";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Music } from "@/components/Music";
import { Nav } from "@/components/Nav";
import { Rsvp } from "@/components/Rsvp";
import { Story } from "@/components/Story";

export default function Page() {
  return (
    <>
      <Atmosphere />
      <Nav />
      <Music />
      <main>
        <Hero />
        <Story />
        <Details />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
