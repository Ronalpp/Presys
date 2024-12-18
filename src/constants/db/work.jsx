import { BarChart, ClipboardCheck, Book, Globe } from "lucide-react";

export const features = [
  {
    id: 1,
    icon: <BarChart className="w-10 h-10" />,
    title: "Understand your English level",
    description:
      "Learn more about the different CEFR levels and what learners at each level can do.",
    color: "bg-blue-100 text-blue-600",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "live-cl",
  },
  {
    id: 2,
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: "Free online English test",
    description:
      "Get an indication of your English proficiency to help you choose learning materials at the right level.",
    color: "bg-green-100 text-green-600",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "online",
  },
  {
    id: 3,
    icon: <Book className="w-10 h-10" />,
    title: "Personalized learning path",
    description:
      "Receive a customized study plan based on your current level and learning goals.",
    color: "bg-purple-100 text-purple-600",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "live",
  },
  {
    id: 3,
    icon: <Globe className="w-10 h-10" />,
    title: "Practice with native speakers",
    description:
      "Engage in real conversations with English speakers from around the world.",
    color: "bg-yellow-100 text-yellow-600",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "native",
  },
];
