import santImage from "@/assets/sant.jpg";
import type { Sant } from "./types";

export const SANTS: Sant[] = [
  {
    id: 1,
    name: "Maharaj Shree",
    role: "Spiritual Head",
    image: santImage,
    description:
      "Guiding devotees on the path of dharma and devotion for over three decades.",
    biography: [
      "Initiated thousands into the Swaminarayan Sampraday.",
      "Inspired spiritual upliftment across continents.",
      "Embodiment of compassion, discipline, and devotion.",
    ],
  },
  {
    id: 2,
    name: "Guru Dharmaprasaddasji",
    role: "Resident Sant",
    image: santImage,
    description:
      "Dedicated to teaching scriptures and conducting daily spiritual discourses.",
  },
  {
    id: 3,
    name: "Guru Bhaktiprakashdasji",
    role: "Spiritual Lead",
    image: santImage,
    description:
      "Dedicated to teaching scriptures and conducting daily spiritual discourses.",
  },
//   {
//     id: 4,
//     name: "Guru Muktaprakashdasji",
//     role: "Resident Sant",
//     image: santImage,
//     description:
//       "Dedicated to teaching scriptures and conducting daily spiritual discourses.",
//   },
];
