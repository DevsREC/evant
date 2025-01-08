import { Card, CardContent } from "@/components/ui/card";
import { ExploreCard as ExploreCardType } from "@/data/interface";
import Link from "next/link";

const ExploreCard = ({exploreCard}: {exploreCard: ExploreCardType}) => {
    return(
        <Link href={`/search?q=${exploreCard.name}`}>
            <Card className={`w-[170px] h-16 rounded-md ${exploreCard.bg} hover:shadow-lg`}>
                <CardContent className="p-1 h-full">
                    <div className="h-full grid grid-cols-[50px_120px] place-content-center font-bold">
                        <span className="relative place-self-center text-3xl">{exploreCard.icon}</span>
                        <span className="text-white place-self-center text-xl">{exploreCard.name}</span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
};

export default ExploreCard;