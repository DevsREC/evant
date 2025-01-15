'use client';

import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { EventDatas } from '@/data/events';
import EventCard from '@/components/custom/EventCard/EventCard';
import { EventData } from '@/data/interface';
import { useSearchParams } from 'next/navigation';
import HeadComponent from '@/components/custom/HeadComponent/HeadComponent';

export default function SearchPage() {
  const [results, setResults] = useState<EventData[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fuse = new Fuse(EventDatas, {
      keys: ['title', 'by', 'category'],
      threshold: 0.3,
    });

    const searchResults = fuse.search(query);
    setResults(searchResults.map(result => result.item).sort((e1, e2) => {
      const dateA = new Date(e1.date);
      const dateB = new Date(e2.date);
      return dateB.getTime() - dateA.getTime();
    }));
  }, [query]);

  return (
    <div className="p-4">
      <HeadComponent />
      <div className='mt-14 flex flex-wrap gap-2'>
        <h1 className="text-2xl font-bold mb-4 text-center">Search Results for {query}</h1>
        {results.length === 0 ? (
          <p>No results found. Try another search term.</p>
        ) : (
          <div className="flex flex-wrap gap-2 w-full h-full">
            {results.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
