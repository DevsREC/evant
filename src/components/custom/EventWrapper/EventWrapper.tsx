import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import EventCard from "../EventCard/EventCard";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@/icons/icon";
import { EventWrapperProps } from "@/data/interface";

const EventWrapper = ({wrapperTitle, eventDatas}: EventWrapperProps) => {
    return(
        <div className="mt-10 mb-10">
            <div className="p-2 flex items-center justify-between">
                <p className="text-xl font-bold">{wrapperTitle}</p>
                <Button variant='ghost' className="p-2 w-10 h-10 rounded-full text-primary-blue hover:bg-primary-blue/20 hover:text-primary-blue">
                    <ChevronRightIcon />
                </Button>
            </div>
            <div className="m-0">
                {
                    eventDatas.length == 0?
                    <p className="text-center">No Events for now!</p>
                    :
                    <Carousel className="w-[99%] p-2">
                        <CarouselContent>
                            {
                                eventDatas.sort((e1, e2) => {
                                    const dateA = new Date(e1.date);
                                    const dateB = new Date(e2.date);
                                    return dateB.getTime() - dateA.getTime();
                                }).map((eventDatas, index) => (
                                    <CarouselItem key={index} className="lg:basis-1/3">
                                        <EventCard
                                            event={eventDatas}
                                        />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                }
            </div>
        </div>
    )
}

export default EventWrapper;