import { Atmosphere } from "@/components/Atmosphere";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Rsvp } from "@/components/Rsvp";
import { Story } from "@/components/Story";

export default function Page() {
  return (
    <Intro>
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Details />
        <Rsvp />
      </main>
      <Footer />
    </Intro>
  );
}
