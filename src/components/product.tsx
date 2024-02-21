/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/eFJfctKmjOT
 */
import { navs } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Fade } from "./ui/reveal-on-scroll"

export function Product() {
  const products = [
    {
      id: "product-1",
      title: "Product 1",
      description: "Description for product 1",
      image: "https://images.unsplash.com/photo-1643123158489-634259c983b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "product-2",
      title: "Product 2",
      description: "Description for product 2",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "product-3",
      title: "Product 3",
      description: "Description for product 3",
      image: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "product-4",
      title: "Product 4",
      description: "Description for product 4",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  return (
    <div id={navs.products.id} className="w-full py-12 lg:py-24 flex justify-center">
      <div className="grid gap-4 md:gap-6 px-4 md:px-6 container ">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Fade triggerOnce cascade direction="up">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h2>
          </Fade>
          <Fade triggerOnce cascade direction="up">
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We offer a wide range of products to meet your needs. Our products are designed to help you achieve your goals and improve your life.
            </p>
          </Fade>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 items-start">
          {
            //  <!-- Product 1 -->
            products.map((product) => (
              <Fade key={product?.id} triggerOnce cascade direction="up">
                <div className="relative group flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    alt="Category 1"
                    className="object-cover w-full aspect-[16/9]"
                    height={300}
                    src={product?.image}
                    width={500}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-200">{product?.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product?.description}</p>
                  </div>
                </div>
              </Fade>
            ))

          }

        </div>
      </div>
    </div>
  )
}
