import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const navs = {
  businessDescription: {
    title: "Business description",
    id: "business-description"
  },
  coreValues: {
    title: "Core values",
    id: "core-values"
  },
  services: {
    title: "Services",
    id: "services"
  },
  products: {
    title: "Products",
    id: "products"
  },
  contactUs: {
    title: "Contact us",
    id: "contacts"
  },
  teams: {
    title: "Teams",
    id: "teams"
  },
  news: {
    title: "News",
    id: "news"
  }
}