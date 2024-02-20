
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-gradient-to-b from-gray-900 to-gray-800 justify-center flex">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:gap-8 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-300 dark:text-gray-400">
            3401 Dzorwulo, Hello Street, CA 94304, Accra Ghana
          </p>
        </div>
        <div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md text-gray-400 hover:text-gray-300"
            href="#"
          >
            Terms and Conditions
          </Link>
        </div>
        <div className="text-sm text-gray-300 dark:text-gray-400">© 2024 Your Company Name. All rights reserved.</div>
      </div>
    </footer>
  )
}
