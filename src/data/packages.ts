import { Package } from "@/types/package";

export const packages: Package[] = [
  {
    id: "standard",
    title: "Standard Package",
    description: "Basic sightseeing tour",
    price: 499,
    duration: "3 days",
    image: "/images/standard.jpg",
    type: "standard",
  },
  {
    id: "middle",
    title: "Middle Package",
    description: "Extended tour with guide",
    price: 799,
    duration: "5 days",
    image: "/images/middle.jpg",
    type: "middle",
  },
  {
    id: "premium",
    title: "Premium Package",
    description: "Luxury experience with full support",
    price: 1299,
    duration: "7 days",
    image: "/images/premium.jpg",
    type: "premium",
  },
];

