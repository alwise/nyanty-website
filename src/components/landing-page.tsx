/* eslint-disable react/no-unescaped-entities */

import Link from "next/link"
import { Contact } from "./contact"
import { BgImagesSlider } from "./background_image_clider"
import { Header } from "./header"
import { navs } from "@/lib/utils"
import { Product } from "./product"
import { Footer } from "./footer"
import { AcceptCookies } from "./accept-cookies"
import { Anchor } from "./anchor"
import Image from "next/image"
import { Fade, Slide } from "./ui/reveal-on-scroll"

// import { RevealOnScroll } from "./ui/reveal-on-scroll"
// import { Metadata } from "next"

export function LandingPage() {

  const services = [
    {
      id: "service-1",
      title: "Catering",
      description: "We provide a range of catering services for all types of events, from corporate functions to private parties.",
      image: "https://images.unsplash.com/photo-1628294895933-4360614f39dd?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "service-2",
      title: "Events",
      description: "Our events team can help you plan and execute a wide range of events, from conferences to product launches.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "service-3",
      title: "Decor",
      description: "Our team of designers can help you create stunning decor for your event, from floral arrangements to lighting.",
      image: "https://plus.unsplash.com/premium_photo-1661778773089-8718bcedb39e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ]

  const teams = [
    {
      id: "team-1",
      name: "Hetty Here",
      role: "Chief Executive Officer",
      image: "https://www.jamjargh.com/wp-content/uploads/2020/02/MSP_5763.jpg",
    },
    {
      id: "team-2",
      name: "Joe here",
      role: "Head of Innovation",
      image: "https://www.jamjargh.com/wp-content/uploads/2020/02/MSP_5792.jpg",
    },
    {
      id: "team-3",
      name: "Sethrine J.K",
      role: "Director of Operations",
      image: "https://www.jamjargh.com/wp-content/uploads/2020/02/MSP_5777.jpg",
    },
    {
      id: "team-4",
      name: "Alex Turner",
      role: "Lead Software Architect",
      image: "https://www.jamjargh.com/wp-content/uploads/2020/03/MSP_5799.jpg",
    }
  ]

  const corValues = [
    {
      id: "value-1",
      title: "Innovation",
      description: "We embrace creativity and are always seeking new and better ways to solve problems.",
      color: "bg-gradient-to-tr from-rose-500 to-rose-600",
    },
    {
      id: "value-2",
      title: "Collaboration",
      description: "We believe in the power of teamwork and the strength that comes from diverse perspectives.",
      color: "bg-gradient-to-tr from-sky-500 to-sky-600",
    },
    {
      id: "value-3",
      title: "Integrity",
      description: "We are committed to honesty, ethics, and doing the right thing, even when no one is looking.",
      color: "bg-gradient-to-tr from-amber-500 to-amber-600",
    },
    {
      id: "value-4",
      title: "Customer Focus",
      description: "We put our customers first, understanding their needs and delivering value.",
      color: "bg-gradient-to-tr from-emerald-500 to-emerald-600",
    }
  ]

  const news = [
    {
      id: "news-1",
      title: "Introducing Nyanty Insights: Unlocking the Power of Data",
      link: "#",
      description: "We're excited to announce the launch of Nyanty Insights, our new data analytics platform that empowers businesses to harness the full potential of their data.",
    },
    {
      id: "news-2",
      title: "Accelerating Digital Transformation: The Nyanty Approach",
      link: "#",
      description: "In our latest whitepaper, we explore the key strategies for accelerating digital transformation and the role of innovation in driving success.",
    }
  ]

  const impacts = [
    {
      id: "impact-1",
      title: "Case Study: Transforming Customer Experiences",
      link: "#",
      description: "Learn how Nyanty's customer experience platform helped a leading retailer enhance engagement and drive sales.",
    },
    {
      id: "impact-2",
      title: "Insights: The Future of Work",
      link: "#",
      description: "Our research reveals the trends shaping the future of work and the opportunities for organizations to thrive in the digital age.",
    }
  ]

  const partners = [
    {
      id: "partner-1",
      name: "Partner 1",
      image: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "partner-2",
      name: "Partner 2",
      image: "https://images.unsplash.com/photo-1562783912-21ad31ee2a83?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "partner-3",
      name: "Partner 3",
      image: "https://images.unsplash.com/photo-1582547761340-e3de1de3c681?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "partner-4",
      name: "Partner 4",
      image: "https://images.unsplash.com/photo-1544216292-b5417607b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ]

  return (
    <>
      {/* Header & hero section*/}
      <Header />
      {/* Hero page */}
      <BgImagesSlider imgs={[]} />
      <div className="flex justify-center w-full">
        <div className="grid gap-12 lg:gap-24 grid-cols-1 w-full">
          {/* core value section */}
          <div id={navs.coreValues.id} className="w-full py-12 lg:py-24 flex justify-center bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:gap-12 grid-cols-1">
                <div className="space-y-2 text-center">
                  <div className="space-y-2">
                    <Fade direction="up" triggerOnce cascade>
                      <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Core Values</h2>
                    </Fade>
                    <Fade direction="up" triggerOnce cascade>
                      <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        At Nyanty Corporation, our core values are the foundation of everything we do. They guide our decisions,
                        inspire our actions, and define our culture.
                      </p>
                    </Fade>
                  </div>
                </div>
                <div className="mx-auto max-w-3xl grid gap-4 lg:gap-8">
                  <div className="grid grid-cols-2 items-start gap-4">
                    {
                      corValues.map((value) => (
                        <div key={value.id} className="flex items-center space-x-4">
                          <Fade direction="left" triggerOnce cascade>
                            <div className={`w-4 h-4 rounded-full ${value?.color}`} />
                          </Fade>
                          {/* w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 */}
                          <div className="space-y-1">
                            <Fade direction="down" triggerOnce cascade>
                              <h3 className="text-xl font-bold">{value?.title}</h3>
                            </Fade>
                            <Fade direction="up" triggerOnce cascade>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {value?.description}
                              </p>
                            </Fade>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* services section */}
          <div id={navs.services.id} className="w-full py-12 lg:py-24 flex justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce cascade>
                    <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      We offer a range of innovative solutions designed to help businesses thrive in the digital age. From
                      AI-powered insights to secure cloud migration, we've got you covered.
                    </p>
                  </Fade>
                </div>
              </div>

              <div className="mx-auto md:grid-cols-3 mt-2 sm:grid-cols-1 grid gap-8 md:gap-12">
                {
                  services.map((service) => (
                    <Fade key={service?.id} direction="right" triggerOnce cascade>
                      <div key={service?.id} className="group justify-center flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                        <Link className="absolute inset-0 z-10" href="#">
                          <span className="sr-only">View</span>
                        </Link>
                        <Image
                          alt="Category 1"
                          className="object-cover w-full aspect-[16/9]"
                          height={300}
                          src={service?.image}
                          width={500}
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-200">{service?.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{service?.description}</p>
                        </div>
                      </div>
                    </Fade>
                  ))
                }
              </div>

            </div>
          </div>
          {/* products */}
          <Product />
          {/* Team section */}
          <div id={navs.teams.id} className="w-full py-12 lg:py-24 flex justify-center bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  {/* reveal title from bottom to top when in viewpot */}
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-fade-in-up">Meet the Team</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce cascade>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Our team is made up of passionate innovators, experienced technologists, and dedicated professionals who
                      are committed to delivering excellence.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 lg:gap-24 w-full place-items-center">
                {
                  teams.map((team) => (
                    <Fade key={team?.id} direction="up" cascade triggerOnce>
                      <div className="flex flex-col items-center justify-center space-y-2 text-center md:items-start md:space-y-1">
                        <Image
                          alt="Team member 1"
                          className="inline-block object-cover object-center rounded-full"
                          height="150"
                          src={team?.image}
                          style={{
                            aspectRatio: "150/150",
                            objectFit: "cover",
                          }}
                          width="150"
                        />
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold">Hetty Here</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Chief Executive Officer</p>
                        </div>
                      </div>
                    </Fade>
                  ))
                }
              </div>
            </div>
          </div>
          {/* News section */}
          <div id={navs.news.id} className="w-full py-12 lg:py-24 flex justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Latest News</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce cascade>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Stay up to date with the latest news and updates from Nyanty Corporation.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 lg:gap-12">
                {
                  news.map((news) => (
                    <Fade key={news?.id} direction="up" triggerOnce cascade>
                      <div className="flex flex-col gap-2">
                        <Link className="font-semibold" href={news.link}>
                          {news?.title}
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {news?.description}
                        </p>
                      </div>
                    </Fade>
                  ))
                }
              </div>
            </div>
          </div>
          {/* Impact section */}
          <div className="w-full py-12 lg:py-24 flex justify-center bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Impact</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce cascade>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      At Nyanty Corporation, we're proud of the impact we've made. Our innovative solutions have helped our
                      clients achieve success and drive transformation.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2 lg:gap-12">
                {
                  impacts.map((impact) => (
                    <Fade key={impact?.id} direction="up" triggerOnce cascade>
                      <div className="flex flex-col gap-2">
                        <Link className="font-semibold" href={impact.link}>
                          {impact?.title}
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {impact?.description}
                        </p>
                      </div>
                    </Fade>
                  ))
                }
              </div>
            </div>
          </div>
          {/* partners section */}
          <div className="w-full py-12 lg:py-24 flex justify-center">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Fade direction="up" triggerOnce cascade>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Partners</h2>
                  </Fade>
                  <Fade direction="up" triggerOnce cascade>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      We're proud to collaborate with industry leaders, technology innovators, and forward-thinking
                      organizations.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="mx-auto  max-w-sm grid gap-4 items-center justify-center md:max-w-2xl md:grid-cols-4 lg:max-w-4xl lg:gap-8">
                {
                  partners.map((partner) => (
                    <Fade key={partner?.id} direction="right" triggerOnce cascade>
                      <div className="w-full flex p-2 items-center justify-center border border-gray-200 rounded-md bg-gray-50 dark:border-gray-800 dark:bg-gray-950 ">
                        <Image
                          alt="Partner 1"
                          height="60"
                          src={partner?.image}
                          style={{
                            aspectRatio: "120/60",
                            objectFit: "cover",
                            borderRadius: "2%",
                          }}
                          width="320"
                        />
                      </div>
                    </Fade>
                  ))
                }


                {/* <div className="w-full flex p-2 items-center justify-center border border-gray-200 rounded-md bg-gray-50  dark:bg-gray-950 dark:border-gray-800">
                  <Image
                    alt="Partner 2"
                    height="60"
                    src="https://images.unsplash.com/photo-1562783912-21ad31ee2a83?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "120/60",
                      objectFit: "cover",
                      borderRadius: "2%",
                    }}
                    width="320"
                  />
                </div>
                <div className="w-full flex p-2 items-center justify-center border border-gray-200 rounded-md bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                  <Image
                    alt="Partner 3"
                    height="60"
                    src="https://images.unsplash.com/photo-1582547761340-e3de1de3c681?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "120/60",
                      objectFit: "cover",
                      borderRadius: "2%",
                    }}
                    width="320"
                  />
                </div>
                <div className="w-full flex p-2 items-center justify-center border border-gray-200 rounded-md bg-gray-50 dark:border-gray-800 dark:bg-gray-9500">
                  <Image
                    alt="Partner 4"
                    height="60"
                    src="https://images.unsplash.com/photo-1544216292-b5417607b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    style={{
                      aspectRatio: "120/60",
                      objectFit: "cover",
                      borderRadius: "2%",
                    }}
                    width="320"
                  />
                </div> */}
              </div>
            </div>
          </div>
          {/* Contact section */}
          <Contact />
        </div>
      </div>
      {/* <Anchor /> */}
      <Anchor />
      <AcceptCookies />
      <Footer />
    </>
  )
}
