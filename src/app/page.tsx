import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturedApartment from "@/components/FeaturedApartment";
import TeamSection from "@/components/TeamSection";
import SocialCTA from "@/components/SocialCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Stronghold | Affordable Apartments",
  description: "Brave living. Old-fashioned value. Discover affordable apartments in prime locations with classic character and modern comfort.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedApartment />
      <TeamSection />
      <SocialCTA />
    </>
  );
}
