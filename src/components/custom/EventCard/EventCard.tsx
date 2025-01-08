'use client'

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeartIconOutline, HeartIconSolid } from "@/icons/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EventData } from "@/data/interface";
import Link from "next/link";
import { useEffect, useState } from "react";

const getBookmarks = (): string[] => {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
};

const setBookmarks = (bookmarks: string[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

const getEventStatus = (dateString: string): {
    status: 'Upcoming' | 'Active' | 'Expired',
    className: string
} => {
    const eventDate = new Date(dateString);
    const today = new Date();

    eventDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    
    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3);
    
    if (eventDate < today) {
        return {
            status: 'Expired',
            className: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
        };
    } else if (eventDate > threeDaysFromNow) {
        return {
            status: 'Upcoming',
            className: 'bg-primary text-primary-foreground hover:bg-primary/90'
        };
    } else {
        return {
            status: 'Active',
            className: 'bg-green-500 text-white hover:bg-green-600'
        };
    }
};

const EventCard = ({ event }: {event: EventData}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const eventStatus = getEventStatus(event.date);

    const onLikeButtonPressed = () => {
        const bookmarks = getBookmarks();

        if (bookmarks.includes(event.id + '')) {
            const updatedBookmarks = bookmarks.filter(id => id !== event.id + '');
            setBookmarks(updatedBookmarks);
            setIsBookmarked(false);
        } else {
            const updatedBookmarks = [...bookmarks, event.id.toString()];
            setBookmarks(updatedBookmarks);
            setIsBookmarked(true);
        }
    };

    useEffect(() => {
        const bookmarks = getBookmarks();
        setIsBookmarked(bookmarks.includes(event.id + ''));
    }, [event.id]);

    return (
        <Card className="relative lg:max-w-[350px] w-[100%] h-[290px] rounded-lg overflow-hidden border-none">
            <CardContent className="p-0 font-semibold">
                <div className="absolute z-20 top-1 p-1 flex justify-between items-center w-full">
                    <div className="shadow-lg">
                        <Badge 
                            className={`p-1 pl-4 pr-4 rounded-full text-sm font-semibold ${eventStatus.className}`}
                        >
                            {eventStatus.status}
                        </Badge>
                    </div>
                    <div className="shadow-lg">
                        <Button 
                            onClick={() => onLikeButtonPressed()} 
                            className={`h-12 w-12 rounded-full bg-background text-foreground hover:bg-background hover:text-red-500 ${isBookmarked && 'text-red-500'}`}
                        >
                            {isBookmarked ? <HeartIconSolid /> : <HeartIconOutline />}
                        </Button>
                    </div>
                </div>
                <Link href={`/event/${event.id}`}>
                    <Image className="object-cover absolute top-0 left-0 right-0 bottom-0 z-10" src={event.image} alt="Test Image" fill />
                    <div className="absolute bottom-2 w-full z-20">
                        <div className="bg-background w-[95%] space-y-2 mx-auto rounded-md p-2 shadow-lg">
                            <p className="text-xl">{event.title}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <Avatar className="h-7 w-7">
                                        <AvatarImage src={event.avatar} alt={`${event.by}`} />
                                        <AvatarFallback className="bg-slate-200">{event.by}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-base">{event.by}</span>
                                </div>
                                <span className="text-muted-foreground">{event.date}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </CardContent>
        </Card>
    )
}

export default EventCard;