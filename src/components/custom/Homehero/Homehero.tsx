import Image from "next/image";
import bannerOne from '@/app/_assets/final.jpg'

const Homehero = () => {
    return(
        <div className="h-[50vh] overflow-hidden border relative">
            <Image src={bannerOne} alt="Banner Image" className="z-10 h-full w-full object-cover border-none" />
            <div className="absolute z-20 left-3 bottom-16"><p className="text-4xl font-bold text-white leading-10">Join various Club <br /> Events</p></div>
        </div>
    )
}

export default Homehero;