import HeadComponent from "@/components/custom/HeadComponent/HeadComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Calendar, Users, Star, Clock, LinkedinIcon, YoutubeIcon } from 'lucide-react';

import devs from '@/app/_assets/devs-logo.jpg'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#3E63F4]/5">
            <HeadComponent />
            <main className="container mx-auto mt-16 p-4">
                <Card className="overflow-hidden shadow-xl">
                    <CardHeader className="bg-[#3E63F4] text-white p-6">
                        <CardTitle className="text-3xl font-bold flex flex-col items-center justify-between">
                            <span className="flex items-center gap-2">
                                Ev@nt
                            </span>
                            <span className="text-base font-medium">A quality product from DEVS</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="flex-shrink-0 text-center">
                                <Image
                                    src={devs}
                                    width={200}
                                    height={200}
                                    alt="Ev@nt Logo"
                                    className="rounded-lg shadow-md mx-auto"
                                />
                                <div className="mt-4 flex justify-center gap-3">
                                    <Link href="https://www.facebook.com/profile.php?id=100082341643541" className="p-2 bg-[#3E63F4] text-white rounded-lg hover:bg-[#3E63F4]/80 transition-colors">
                                        <Facebook className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.instagram.com/recdevs/" className="p-2 bg-[#3E63F4] text-white rounded-lg hover:bg-[#3E63F4]/80 transition-colors">
                                        <Instagram className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://twitter.com/DevsRec" className="p-2 bg-[#3E63F4] text-white rounded-lg hover:bg-[#3E63F4]/80 transition-colors">
                                        <Twitter className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/devs-rec/" className="p-2 bg-[#3E63F4] text-white rounded-lg hover:bg-[#3E63F4]/80 transition-colors">
                                        <LinkedinIcon className="h-6 w-6" />
                                    </Link>
                                    <Link href="https://www.youtube.com/@RECDEVS" className="p-2 bg-[#3E63F4] text-white rounded-lg hover:bg-[#3E63F4]/80 transition-colors">
                                        <YoutubeIcon className="h-6 w-6" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-grow space-y-6 text-center md:text-left">
                                <h2 className="text-2xl font-semibold text-[#3E63F4]">🎉 Welcome to Ev@nt!</h2>
                                <p className="text-lg">
                                    Your central hub for all college events. Stay connected with what matters! 🚀
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <FeatureCard icon={<Calendar />} title="Event Calendar" />
                                    <FeatureCard icon={<Users />} title="Club Activities" />
                                    <FeatureCard icon={<Star />} title="Featured Events" />
                                    <FeatureCard icon={<Clock />} title="Timely Updates" />
                                </div>
                                <br />
                                <Link href={'/'}>
                                    <Button className="w-full sm:w-auto bg-[#3E63F4] hover:bg-[#3E63F4]/90">Explore Events 🎯</Button>
                                </Link>
                                <p className="text-sm text-gray-600 mt-4">Made with 💖 by DEVS</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <br />
            <br />
            <br />
        </div>
    )
}

function FeatureCard({ icon, title }: {icon: React.JSX.Element, title: string}) {
    return (
        <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="p-4 flex items-center space-x-2">
                <div className="text-[#3E63F4]">{icon}</div>
                <h3 className="font-semibold">{title}</h3>
            </CardContent>
        </Card>
    )
}