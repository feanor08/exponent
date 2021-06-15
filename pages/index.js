import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Link from "next/link";
import LandingArea from "@/components/LandingArea";
import VisionArea from "@/components/VisionArea";
import InfoArea from "@/components/InfoArea";
import BestTeamArea from "@/components/BestTeamArea";
import ContactArea from "@/components/ContactArea";

export default function Home({ events }) {
  return (
    <Layout>
      <LandingArea />
      <VisionArea />
      <BestTeamArea/>
      <ContactArea/>
    </Layout>
  );
}
