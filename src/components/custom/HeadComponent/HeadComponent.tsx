'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false)
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    const handleIconClick = () => {
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <div className="fixed left-0 top-0 right-0 bg-background backdrop-blur-sm shadow-sm border z-40">
            <div className="container mx-auto px-4 h-16 flex items-center">
                <div className="relative w-full max-w-md mx-auto bg-slate-200 rounded-full">
                    <div 
                        className="absolute inset-y-0 left-3 flex items-center cursor-pointer"
                        onClick={handleIconClick}
                    >
                        <Search className={`h-5 w-5 transition-colors duration-200 ${
                            isFocused ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                    </div>
                    <Input 
                        className={`w-full pl-10 pr-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                            isFocused 
                                ? 'bg-background border-primary shadow-sm' 
                                : 'bg-muted/50 border-transparent'
                        }`}
                        placeholder="Search..." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </div>
        </div>
    )
}
