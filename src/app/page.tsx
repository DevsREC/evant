import EventWrapper from "@/components/custom/EventWrapper/EventWrapper";
import HomeEventContainer from "@/components/custom/HomeEventContainer/HomeEventContainer";
import Homehero from "@/components/custom/Homehero/Homehero";
import { EventDatas } from "@/data/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ev@nt',
  description:
    'Ev@nt (Evant) - College events at your hands',
};

export default function Home() {
  return (
    <>
      <Homehero />
      <HomeEventContainer />
      <EventWrapper
        wrapperTitle="Latest Events"
        eventDatas={EventDatas.filter(event => event.dispaly?.includes(1))}
      />
      <EventWrapper
        wrapperTitle="Trending Events"
        eventDatas={EventDatas.filter(event => event.dispaly?.includes(2))}
      />
      <EventWrapper
        wrapperTitle="Deaprtment Events"
        eventDatas={EventDatas.filter(event => event.dispaly?.includes(3))}
      />
      <br /><br />
    </>
  );
}
