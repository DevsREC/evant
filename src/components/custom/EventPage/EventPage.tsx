'use client';

import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { EventData } from '@/data/interface';
import { HeartIconOutline, HeartIconSolid } from '@/icons/icon';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const getBookmarks = (): string[] => {
  const bookmarks = localStorage.getItem('bookmarks');
  return bookmarks ? JSON.parse(bookmarks) : [];
};

const saveBookmarks = (bookmarks: string[]) => {
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

export function EventPage({ event }: { event: EventData }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarks();
    setIsFavorite(bookmarks.includes(event.id + ''));
  }, [event.id]);

  const toggleFavorite = () => {
    const bookmarks = getBookmarks();

    if (isFavorite) {
      const updatedBookmarks = bookmarks.filter(id => id !== event.id + '');
      saveBookmarks(updatedBookmarks);
      setIsFavorite(false);
    } else {
      bookmarks.push(event.id + '');
      saveBookmarks(bookmarks);
      setIsFavorite(true);
    }
  };

  return (
    <div className="relative lg:backdrop-blur-xl lg:bg-background/60 lg:min-h-screen overflow-hidden">
      <div className="hidden lg:block fixed inset-0 -z-10">
        <Image
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full blur-sm scale-110"
          quality={85}
          fill
        />
      </div>

      <div className="h-[90vh] relative overflow-hidden lg:max-w-[500px] mx-auto">
        <div className="absolute left-0 right-0 top-1 z-20 flex items-center justify-between p-2">
          <Button
            onClick={() => router.back()}
            className="h-12 w-12 rounded-full bg-background text-foreground hover:bg-primary-blue/20 hover:text-primary-blue"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={toggleFavorite}
            className={`h-12 w-12 rounded-full bg-background text-foreground hover:bg-transparent hover:text-red-500 ${isFavorite && 'text-red-500'}`}
          >
            {isFavorite ? <HeartIconSolid /> : <HeartIconOutline />}
          </Button>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden bg-black z-10">
          <Image
            src={event.image}
            alt={event.title}
            className="object-cover z-10"
            priority
            quality={85}
            fill
          />
        </div>

        <div className="h-[60vh] relative bg-background -mt-10 z-20 rounded-r-3xl rounded-l-3xl p-2">
          <div className="w-[95%] mx-auto">
            <div className="mt-4">
              <p className="text-xl font-bold">{event.title}</p>
              <div className="text-sm text-muted-foreground font-bold flex justify-between items-center">
                <span>{event.by}</span>
                <span>{event.date}</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-lg font-bold">About Event</p>
              <ScrollArea className="h-[290px] bg-slate-400/0">
                <div
                  dangerouslySetInnerHTML={{ __html: event.description }}
                  className="text-sm text-muted-foreground font-semibold leading-5"
                ></div>
              </ScrollArea>
            </div>

            <div className="fixed bottom-2 left-0 right-0 z-40 max-w-[300px] mx-auto">
              <a
                className="block h-16 text-xl font-bold text-white text-center bg-primary-blue w-[90%] rounded-full mx-auto flex items-center justify-center"
                target="_blank"
                href={event.registrationLink}
                rel="noopener noreferrer"
              >
                <span>Register Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
