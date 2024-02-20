"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export function AcceptCookies() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  // check if cookies are accepted in local storage
  useEffect(() => {
    if (localStorage.getItem("cookiesAccepted")) {
      setCookiesAccepted(true)
    }
  }, [])

  return (
    <div
      hidden={cookiesAccepted}
      className="bg-gray-50 sticky bottom-0 z-50 shadow-md">
      <div className="container px-4 py-2 md:py-3 flex items-center justify-between space-y-2 text-sm md:text-base">
        <span className="text-gray-500 dark:text-gray-400">
          We use cookies to improve your experience. By using our site, you agree to our
          <Link className="underline underline-offset-2" href="#">
            {" "} privacy policy
          </Link>
          .
        </span>
        <Button className="bg-gray-950 rounded-full text-white hover:bg-opacity-70" size="sm" onClick={() => {
          localStorage.setItem("cookiesAccepted", "true")
          setCookiesAccepted(true)
        }}>Accept</Button>
      </div>
    </div>
  )
}
