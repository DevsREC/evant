"use client";

import { Button } from "@/components/ui/button";
import { BookmarkIconOutline, BookmarkIconSolid, HomeIconOutline, HomeIconSolid, InfoIconOutline, InfoIconSolid, RocketIconOutline, RocketIconSolid } from "@/icons/icon";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Paths {
    path: string;
    title: string;
    OutlineIcon: typeof BookmarkIconOutline;
    SolidIcon: typeof BookmarkIconOutline;
}

const BottomNavbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState('/');
    
    const paths: Paths[] = [
        {
            path: '/', 
            title: 'Home', 
            OutlineIcon: HomeIconOutline, 
            SolidIcon: HomeIconSolid,
        },
        {
            path: '/explore', 
            title: 'Explore', 
            OutlineIcon: RocketIconOutline, 
            SolidIcon: RocketIconSolid,
        },
        {
            path: '/bookmarks', 
            title: 'Bookmarks', 
            OutlineIcon: BookmarkIconOutline, 
            SolidIcon: BookmarkIconSolid,
        },
        {
            path: '/about',
            title: 'About',
            OutlineIcon: InfoIconOutline,
            SolidIcon: InfoIconSolid
        }
    ];

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    const handleNavigation = (path: string) => {
        setActiveTab(path);
        router.push(path);
    };

    return (
        <div className="fixed z-20 right-0 left-0 h-16 bg-background border border-slate-200 flex justify-evenly items-center w-max min-w-[250px] mx-auto rounded-full bottom-2 shadow-md">
            {paths.map(({ path, OutlineIcon, SolidIcon }) => (
                <Button 
                    key={path}
                    variant="ghost" 
                    className="h-14 w-14 rounded-full bg-transparent text-black"
                    onClick={() => handleNavigation(path)}
                >
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeTab === path ? 'solid' : 'outline'}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === path ? <SolidIcon /> : <OutlineIcon />}
                        </motion.div>
                    </AnimatePresence>
                </Button>
            ))}
        </div>
    );
};

export default BottomNavbar;