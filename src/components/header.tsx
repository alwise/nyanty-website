"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react";
// import { BgImagesSlider } from "./background_image_clider";
import { navs } from "@/lib/utils";

export function Header() {
  const [canStickHeader, setCanStickHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setCanStickHeader(true)
      } else {
        setCanStickHeader(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={`bg-gray-100/80 shadow-sm transition-all duration-700 dark:bg-gray-800 ${canStickHeader ? 'sticky top-0 z-50 shadow-gray-400 shadow-sm' : 'top-1'}`}>
      <div className="px-4 py-2 md:py-3 md:px-6">
        <div className="flex justify-between items-center space-y-2">
          <Link className="flex items-center space-x-2" href="#">
            <MountainIcon className="w-6 h-6" />
            <span className="font-semibold">Nyanty</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 select-none">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-fit bg-inherit focus:bg-inherit hover:bg-none">About us</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-[320px] cursor-pointer flex-nowrap h-full hover:bg-gray-300 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                        // href="#business-description"
                        onClick={() => scrollToSection(navs.businessDescription.id)}>
                        {navs.businessDescription.title}
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-[320px] cursor-pointer flex-nowrap h-full hover:bg-gray-300 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                        onClick={() => scrollToSection(navs.coreValues.id)}>
                        {navs.coreValues.title}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a className="font-medium cursor-pointer"
              onClick={() => scrollToSection(navs.services.id)}>
              {navs.services.title}
            </a>
            <a className="font-medium cursor-pointer"
              onClick={() => scrollToSection(navs.products.id)}>
              {navs.products.title}
            </a>
            <a className="font-medium cursor-pointer"
              onClick={() => scrollToSection(navs.contactUs.id)}>
              {navs.contactUs.title}
            </a>
          </nav>
          {/* <Button size="sm" variant="outline">
            Sign in
          </Button> */}
        </div>
      </div>
    </div>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
