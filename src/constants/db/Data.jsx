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
      "Develop your reading, writing, listening and speaking skills to improve your language in real-life situations. Practice your listening and speaking skills with audio and video to practise your listening and speaking skills. Interactive exercises to help you remember new language. Texts on your reading skills in real-world contexts and understand more.",
    image:
      "https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <MessageSquare className="w-6 h-6" />,

    bulletPoints: [
      "Audio and video to practise your listening and speaking skills",
      "Interactive exercises to help you remember new language",
      "Texts on your reading skills in real-world contexts and understand more",
    ],
    slug: "skills",

    subTitle: "Que son las skills?",

    subicons: "",

    definition:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Elit libero tempus est vulputate fringilla senectus class. Turpis varius sit tristique, conubia conubia mollis. Praesent conubia accumsan cras, metus mollis sagittis. Montes arcu non mi maximus facilisis lobortis posuere ultrices. Mus volutpat nibh commodo, sem congue dis tortor. Laoreet molestie tortor nibh praesent; porttitor sagittis. Himenaeos accumsan porta fringilla parturient praesent sagittis. Nunc purus pellentesque diam duis at neque. Dictumst porttitor rutrum ligula nunc a augue odio. Metus per ut vivamus viverra, lectus ad lectus lacus orci. At torquent montes mus himenaeos efficitur. Bibendum vehicula lacinia montes laoreet luctus lacus gravida fames. Vel penatibus elementum id penatibus urna dignissim ac dui donec. In dignissim maecenas dapibus sociosqu ac aliquam placerat dui. Vulputate ligula curabitur quisque morbi egestas maecenas diam. Tellus facilisi blandit donec ex sagittis vehicula tristique. Semper duis montes in suscipit imperdiet habitasse ridiculus aptent. Magnis sagittis vitae felis senectus consectetur nulla. Felis dolor accumsan mollis semper hendrerit. Pellentesque vehicula class rutrum mi; donec tempus montes neque cras. Donec eu nibh tellus gravida maecenas leo pretium orci. Tempor non iaculis diam habitasse quam euismod ligula rutrum rhoncus. Nascetur ex justo tortor condimentum ipsum risus. Fusce velit mattis aliquet mi magna quisque blandit. Fames lectus proin justo eleifend donec iaculis, hendrerit habitasse. Ac justo sodales volutpat eros parturient volutpat velit sociosqu per. Adipiscing parturient condimentum fusce vulputate nisl nisi duis. Ornare bibendum dolor litora nunc diam hac semper volutpat. Tortor auctor ac ex ad venenatis. Cursus mi neque placerat id quisque orci efficitur montes. Tristique efficitur conubia quam quam nec in non tristique pharetra. Ac torquent hendrerit faucibus ornare parturient. Id molestie mi facilisi in volutpat cubilia pharetra metus. Posuere fames vulputate montes porttitor nostra nibh. Malesuada posuere nisl porttitor eleifend fringilla sapien nostra cursus inceptos.",
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
