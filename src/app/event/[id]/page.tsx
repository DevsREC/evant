import { EventPage } from "@/components/custom/EventPage/EventPage";
import { EventDatas } from "@/data/events";

type paramsType = Promise<{ id: string }>;

export default async function Page({ params }: { params: paramsType }) {
    const { id } = await params;
    const event = EventDatas.find(event => event.id == parseInt(id));
    
    if(!event) return <p>Event Not Found</p>

    return <EventPage event={event} />
}