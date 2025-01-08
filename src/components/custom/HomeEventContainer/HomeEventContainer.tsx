'use client'

import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import HomeCategory from "@/data/HomeCategory"
import { motion } from "framer-motion"
import { HomeCategoryButtonProps } from "@/data/interface"
import Link from "next/link"

const HomeCategoryButton = ({ name, icon }: HomeCategoryButtonProps) => {
    return (
        <motion.div 
            className="flex flex-col items-center space-y-2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Button 
                className="h-16 w-16 rounded-full bg-slate-100 transition-all duration-300 hover:shadow-xl"
                variant="ghost"
            >
                <span className="text-2xl text-background">{icon}</span>
            </Button>
            <span className="text-sm font-bold  text-center line-clamp-1">{name}</span>
        </motion.div>
    )
}

const HomeEventContainer = () => {
    return (
        <Card className="bg-background relative -mt-16 rounded-3xl shadow-lg w-[95%] mx-auto">
            <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Explore Categories</h2>
                <Carousel 
                    opts={{
                        loop: true,
                        align: 'start',
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {HomeCategory.map((item, index) => (
                            <CarouselItem key={`${item.name}-${index}`} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <Link href={`/search?q=${item.name}`}>
                                    <HomeCategoryButton name={item.name} icon={item.icon} />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </CardContent>
        </Card>
    )
}

export default HomeEventContainer

