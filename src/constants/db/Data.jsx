import {
  Pencil,
  MessageSquare,
  Coffee,
  Book,
  Users,
  Monitor,
} from "lucide-react";

export const learningData = [
  {
    id: 1,
    title: "Skills",
    description:
      "Develop your reading, writing, listening and speaking skills to improve your language in real-life situations.",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <MessageSquare className="w-6 h-6" />,
    bulletPoints: [
      "Audio and video to practise your listening and speaking skills",
      "Interactive exercises to help you remember new language",
      "Texts on your reading skills in real-world contexts and understand more",
    ],
    slug: "skills",
  },
  {
    id: 2,
    title: "Grammar",
    description:
      "Revise and practise your grammar to improve your language level and increase your confidence.",
    image:
      "https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <Pencil className="w-6 h-6" />,
    bulletPoints: [
      "Clear and simple grammar explanations to help you revise and practise different grammar points.",
      "Online exercises to help you check your understanding of the grammar points.",
      "Use the grammar reference for further practice and more detailed explanations.",
    ],
    slug: "grammar",
  },
  {
    id: 3,
    title: "Vocabulary",
    description:
      "Learn new words and phrases to improve your language level and communicate more effectively.",
    image:
      "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <Book className="w-6 h-6" />,
    bulletPoints: [
      "Online activities to help you learn the meaning, pronunciation and spelling of new words",
      "Learn words and phrases in a wide range of different topics",
      "Use the vocabulary reference to find definitions and example sentences for new vocabulary",
    ],
    slug: "vocabulary",
  },
];

export const courses = [
  {
    icon: <Coffee className="w-12 h-12" />,
    title: "Live classes",
    description: "Group and one-to-one online classes with expert teachers.",
    category: "interactive",
    color: "bg-purple-100 text-purple-600",
    hover: "hover:bg-purple-200",
  },
  {
    icon: <Book className="w-12 h-12" />,
    title: "IELTS preparation",
    description:
      "Get the score you need with private and group online classes.",
    category: "exam",
    color: "bg-blue-100 text-blue-600",
    hover: "hover:bg-blue-200",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Personal tutoring",
    description: "One-to-one online sessions focused on a personal plan.",
    category: "interactive",
    color: "bg-green-100 text-green-600",
    hover: "hover:bg-green-200",
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Self-study courses",
    description: "Learn at your own pace with a self-study online course.",
    category: "self-paced",
    color: "bg-yellow-100 text-yellow-600",
    hover: "hover:bg-yellow-200",
  },
];
