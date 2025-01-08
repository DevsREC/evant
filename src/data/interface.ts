interface HomeCategoryButtonProps {
    name: string
    icon: string
}

interface EventData {
    id: number;
    title: string;
    by: string;
    avatar: string;
    date: string;
    registrationLink: string;
    description: string;
    image: string;
    category?: string[];
    dispaly?: number[];
}

interface EventWrapperProps {
    wrapperTitle: string;
    eventDatas: EventData[];
}

interface ExploreCard {
    icon: string;
    name: string;
    bg: string;
}

export type {
    HomeCategoryButtonProps,
    EventData,
    EventWrapperProps,
    ExploreCard,
}