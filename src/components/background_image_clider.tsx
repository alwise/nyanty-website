"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/image-slider";
import { navs } from "@/lib/utils";
import { Button } from "./ui/button";

export function BgImagesSlider(props: {
    imgs: string[];
}) {
    const { imgs } = props;
    const images = imgs.length ? imgs : [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1598280877188-d1792cf027a8?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1666694890749-8f508abe68f4?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1643123158319-034f6a10aff9?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    function scrollToSection(id: string) {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <ImagesSlider className="h-[65dvh] transition-all duration-700"
            images={images} direction="up">
            <motion.div
                id={navs.businessDescription.id}
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.9,
                    delay: 1,
                }}
                className="relative flex flex-col justify-center items-center"
            >
                <motion.p className="z-20 font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    The hero section slideshow <br /> nobody asked for
                </motion.p>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(navs.services.id);
                    }}
                    className="px-4 z-20 static cursor-default py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full mt-4">
                    <span>Contact us →</span>
                    {/* <div onClick={() => scrollToSection(navs.contactUs.id)} className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
                </Button>
            </motion.div>
        </ImagesSlider>
    );
}
