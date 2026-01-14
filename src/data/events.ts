export type Event = {
  id: number
  title: string
  date: string
  day: string
  time: string
  venue: string
  description: string
  image: string
  featured?: boolean
}

export const events: Event[] = [
  {
    id: 1,
    title: "Japyajna",
    date: "January 1, 2025",
    day: "01",
    time: "6:00 AM – 9:00 PM",
    venue: "Main Temple Hall",
    description:
      "Japyajna is a sacred spiritual gathering where devotees collectively chant divine mantras with devotion and discipline. Through continuous jap, the atmosphere becomes purified, fostering inner peace, spiritual focus, and divine grace.",
    image: "src/assets/Hero1.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Makar Sankranti Utsav",
    date: "January",
    day: "14",
    time: "9:00 AM – 5:00 PM",
    venue: "Temple Premises",
    description:
      "Celebrate the harvest festival with rituals and kite flying.",
    image: "src/assets/Hero2.jpeg",
  },
  {
    id: 3,
    title: "Youth Shibir",
    date: "January",
    day: "20–21",
    time: "Full Day",
    venue: "Community Center",
    description:
      "Spiritual camp for youth featuring katha, seva, and activities.",
    image: "src/assets/Hero1.jpeg",
  },
]
