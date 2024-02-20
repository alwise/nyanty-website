'use client';
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function Anchor() {
  const [canScrollUp, setCanScrollUp] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setCanScrollUp(true)
      } else {
        setCanScrollUp(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <div
      className={`fixed bottom-24 right-4 transition-all duration-700 ${canScrollUp ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }}
    >
      <Button size="sm" variant="outline" className="bg-gray-900 text-white">
        <ChevronUpIcon className="h-6 w-6" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}


function ChevronUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}
