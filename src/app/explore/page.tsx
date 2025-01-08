import ExploreCard from "@/components/custom/ExploreCard/ExploreCard";
import HeadComponent from "@/components/custom/HeadComponent/HeadComponent";
import ExploreData from "@/data/explore";

export default function ExplorePage() {
    return(
        <div className="max-w-[390px] mx-auto">
            <HeadComponent />
            <div className="mt-20 p-2">
                <div>
                    <p className="text-xl font-bold">Explore by Categories</p>
                </div>
                <div className="grid grid-cols-2 gap-2 place-self-center mt-4">
                    {
                        ExploreData.map((data, index) => <ExploreCard exploreCard={data} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}