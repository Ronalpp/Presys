import { Coffee, Book, Users, Monitor } from "lucide-react";

export const courses = [
  {
    icon: <Coffee className="w-12 h-12" />,
    title: "Live classes",
    description: "Group and one-to-one online classes with expert teachers.",
    category: "interactive",
    color: "bg-purple-100 text-purple-600",
    hover: "hover:bg-purple-200",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    slug: "live-classes",
  },
  {
    icon: <Book className="w-12 h-12" />,
    title: "IELTS preparation",
    description:
      "Get the score you need with private and group online classes.",
    category: "exam",
    color: "bg-blue-100 text-blue-600",
    hover: "hover:bg-blue-200",
    slug: "ielts-preparation",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Personal tutoring",
    description: "One-to-one online sessions focused on a personal plan.",
    category: "interactive",
    color: "bg-green-100 text-green-600",
    hover: "hover:bg-green-200",
    slug: "personal-tutoring",
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Self-study courses",
    description: "Learn at your own pace with a self-study online course.",
    category: "self-paced",
    color: "bg-yellow-100 text-yellow-600",
    hover: "hover:bg-yellow-200",
    slug: "self-study",
  },
];
