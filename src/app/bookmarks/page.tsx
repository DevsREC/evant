'use client';

import EventCard from "@/components/custom/EventCard/EventCard";
import { EventData } from "@/data/interface";
import { useEffect, useState } from "react";
import HeadComponent from "@/components/custom/HeadComponent/HeadComponent";
import { EventDatas } from "@/data/events";

const getBookmarks = (): string[] => {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
};

export default function BookmarksPage() {
    const [eventData, setEventData] = useState<EventData[]>([]);

    useEffect(() => {
        const bookmarkedEventIds = getBookmarks();
        if (bookmarkedEventIds.length === 0) return;

        const filteredEvents = EventDatas.filter(event => bookmarkedEventIds.includes(event.id + ''));
        setEventData(filteredEvents);
    }, []);

    return (
        <div className="h-screen">
            <HeadComponent />
            <div className="mt-20 p-1 flex items-center gap-2 flex-wrap">
                {eventData.length === 0 ? (
                    <p>You haven&apos;t bookmarked any events</p>
                ) : (
                    eventData.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))
                )}
            </div>
        </div>
    );
}
